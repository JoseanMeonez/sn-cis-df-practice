/**
 * Question History Sync Utility
 *
 * Parses all quiz result files and exam HTML files to build/update
 * question-history.json tracking previously asked questions.
 *
 * Usage:
 *   node sync-history.js          - Sync history from all sources
 *   node sync-history.js --clear  - Clear all question history
 *   node sync-history.js --status - Show current history status
 *   node sync-history.js --help   - Show this help message
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration - paths relative to tools/ folder
const RESULTS_DIR = path.join(__dirname, '..', 'practice', 'results');
const CONFIG_DIR = path.join(__dirname, '..', 'practice', 'config');
const APP_DIR = path.join(__dirname, '..', 'practice', 'app');
const HISTORY_FILE = path.join(CONFIG_DIR, 'question-history.json');

/**
 * Generate SHA-256 hash of question text
 */
function hashQuestion(questionText) {
    const normalized = questionText.trim().toLowerCase().replace(/\s+/g, ' ');
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Extract questions from a practice test markdown file
 * Format: ### Question N (Domain)\n**STATUS**\n\nQuestion text
 */
function extractFromPracticeTest(content, sourceFile) {
    const questions = [];

    // Match pattern: ### Question N (Domain)\n**CORRECT|INCORRECT**\n\nQuestion text
    const questionPattern = /### Question \d+ \(([^)]+)\)\s*\n\*\*(?:CORRECT|INCORRECT)\*\*\s*\n\n([^\n]+(?:\n(?!- [A-D]\.).*)*)/g;

    let match;
    while ((match = questionPattern.exec(content)) !== null) {
        const domain = match[1].trim();
        const questionText = match[2].trim();

        if (questionText && questionText.length > 10) {
            questions.push({
                domain,
                questionText,
                source: sourceFile
            });
        }
    }

    return questions;
}

/**
 * Extract questions from a topic quiz markdown file
 * These have a simpler format with questions in review notes
 */
function extractFromTopicQuiz(content, sourceFile) {
    const questions = [];

    // Extract domain from the file header
    const domainMatch = content.match(/\*\*Domain:\*\* ([^\n]+)/);
    const domain = domainMatch ? domainMatch[1].trim().replace(/ \([^)]+\)/, '') : 'Unknown';

    // Match scenario/question patterns in review notes
    const scenarioPattern = /\*\*Scenario:\*\*\s*([^\n]+(?:\n(?!\*\*Correct).*)*)/g;

    let match;
    while ((match = scenarioPattern.exec(content)) !== null) {
        const questionText = match[1].trim();
        if (questionText && questionText.length > 10) {
            questions.push({
                domain,
                questionText,
                source: sourceFile
            });
        }
    }

    return questions;
}

/**
 * Parse a markdown file and extract questions
 */
function parseQuizFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    // Determine file type based on name pattern
    if (fileName.startsWith('practice-test-')) {
        return extractFromPracticeTest(content, fileName);
    } else {
        return extractFromTopicQuiz(content, fileName);
    }
}

/**
 * Extract date from filename
 */
function extractDateFromFilename(filename) {
    // practice-test-2026-01-20T04-30-43.md or configuration-20260121-161532.md
    const isoMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) return isoMatch[1];

    const compactMatch = filename.match(/(\d{8})/);
    if (compactMatch) {
        const d = compactMatch[1];
        return `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}`;
    }

    return new Date().toISOString().split('T')[0];
}

/**
 * Extract questions from HTML file with embedded JavaScript array
 */
function extractQuestionsFromHtml(htmlContent) {
    // Look for embeddedQuestions = [...] or const embeddedQuestions = [...]
    const match = htmlContent.match(/(?:const\s+)?embeddedQuestions\s*=\s*(\[[\s\S]*?\]);/);

    if (!match) {
        return [];
    }

    try {
        // Parse the JSON array
        const questionsJson = match[1];
        return JSON.parse(questionsJson);
    } catch (e) {
        // Try to handle potential JSON issues
        return [];
    }
}

/**
 * Sync questions from exam HTML files in practice/app folder
 */
function syncFromExamHtmlFiles(history, existingHashes) {
    let totalAdded = 0;

    if (!fs.existsSync(APP_DIR)) {
        return 0;
    }

    // Get all HTML files in practice/app folder
    const htmlFiles = fs.readdirSync(APP_DIR)
        .filter(f => f.endsWith('.html'));

    if (htmlFiles.length === 0) {
        return 0;
    }

    console.log('Scanning exam HTML files...');

    for (const file of htmlFiles) {
        const filePath = path.join(APP_DIR, file);
        console.log(`Processing: ${file} (exam simulation)`);

        try {
            const htmlContent = fs.readFileSync(filePath, 'utf-8');
            const questions = extractQuestionsFromHtml(htmlContent);

            if (questions.length === 0) {
                console.log(`  -> No embedded questions found`);
                continue;
            }

            let added = 0;
            // Extract date from filename or use file modified date
            const dateMatch = file.match(/(\d{4}-?\d{2}-?\d{2})/);
            const fileDate = dateMatch
                ? dateMatch[1].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
                : fs.statSync(filePath).mtime.toISOString().split('T')[0];

            for (const q of questions) {
                if (!q.question) continue;

                const hash = hashQuestion(q.question);

                if (!existingHashes.has(hash)) {
                    history.askedQuestions.push({
                        hash,
                        questionText: q.question.substring(0, 100) + (q.question.length > 100 ? '...' : ''),
                        domain: q.domain || 'Unknown',
                        askedOn: fileDate,
                        source: file
                    });
                    existingHashes.add(hash);
                    added++;
                }
            }

            console.log(`  -> Found ${questions.length} questions, ${added} new`);
            totalAdded += added;
        } catch (e) {
            console.log(`  -> Error: ${e.message}`);
        }
    }

    return totalAdded;
}

/**
 * Main sync function
 */
function syncHistory() {
    console.log('Question History Sync Utility');
    console.log('=============================\n');

    // Load existing history or create new
    let history = {
        lastUpdated: null,
        totalQuestionsAsked: 0,
        askedQuestions: []
    };

    if (fs.existsSync(HISTORY_FILE)) {
        try {
            history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
            console.log(`Loaded existing history: ${history.askedQuestions.length} questions\n`);
        } catch (e) {
            console.log('Could not parse existing history, starting fresh\n');
        }
    }

    // Build a set of existing hashes for quick lookup
    const existingHashes = new Set(history.askedQuestions.map(q => q.hash));

    // First sync from exam HTML files (exam simulation questions)
    let newQuestionsCount = syncFromExamHtmlFiles(history, existingHashes);

    console.log('');

    // Check if quizes-done directory exists
    if (!fs.existsSync(RESULTS_DIR)) {
        console.log(`Directory not found: ${RESULTS_DIR}`);
        console.log('No quiz files to process.');
        return;
    }

    // Get all markdown files
    const files = fs.readdirSync(RESULTS_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md');

    console.log(`Found ${files.length} quiz files to process\n`);

    // Process each file
    for (const file of files) {
        const filePath = path.join(RESULTS_DIR, file);
        console.log(`Processing: ${file}`);

        try {
            const questions = parseQuizFile(filePath);
            const askedDate = extractDateFromFilename(file);

            for (const q of questions) {
                const hash = hashQuestion(q.questionText);

                if (!existingHashes.has(hash)) {
                    history.askedQuestions.push({
                        hash,
                        questionText: q.questionText.substring(0, 100) + (q.questionText.length > 100 ? '...' : ''),
                        domain: q.domain,
                        askedOn: askedDate,
                        source: q.source
                    });
                    existingHashes.add(hash);
                    newQuestionsCount++;
                }
            }

            console.log(`  -> Found ${questions.length} questions`);
        } catch (e) {
            console.log(`  -> Error: ${e.message}`);
        }
    }

    // Update metadata
    history.lastUpdated = new Date().toISOString();
    history.totalQuestionsAsked = history.askedQuestions.length;

    // Save history
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));

    console.log('\n=============================');
    console.log(`Sync complete!`);
    console.log(`  - New questions added: ${newQuestionsCount}`);
    console.log(`  - Total questions in history: ${history.totalQuestionsAsked}`);
    console.log(`  - History file: ${HISTORY_FILE}`);
}

/**
 * Clear embedded questions from HTML files
 */
function clearEmbeddedQuestionsFromHtml() {
    let clearedFiles = 0;
    let clearedQuestions = 0;

    if (!fs.existsSync(APP_DIR)) {
        return { clearedFiles: 0, clearedQuestions: 0 };
    }

    // Get all HTML files in practice/app folder
    const htmlFiles = fs.readdirSync(APP_DIR)
        .filter(f => f.endsWith('.html'));

    for (const file of htmlFiles) {
        const filePath = path.join(APP_DIR, file);

        try {
            let htmlContent = fs.readFileSync(filePath, 'utf-8');

            // Check if file has embedded questions
            const match = htmlContent.match(/(?:const\s+)?embeddedQuestions\s*=\s*(\[[\s\S]*?\]);/);

            if (match) {
                // Count questions before clearing
                try {
                    const questions = JSON.parse(match[1]);
                    clearedQuestions += questions.length;
                } catch (e) {
                    // If can't parse, still try to clear
                }

                // Replace with empty array
                htmlContent = htmlContent.replace(
                    /(?:const\s+)?embeddedQuestions\s*=\s*\[[\s\S]*?\];/,
                    'const embeddedQuestions = [];'
                );

                fs.writeFileSync(filePath, htmlContent);
                clearedFiles++;
                console.log(`  Cleared questions from: ${file}`);
            }
        } catch (e) {
            console.log(`  Error processing ${file}: ${e.message}`);
        }
    }

    return { clearedFiles, clearedQuestions };
}

/**
 * Clear all question history
 */
function clearHistory() {
    console.log('Question History - Clear');
    console.log('========================\n');

    let historyCount = 0;

    // Clear history file
    if (fs.existsSync(HISTORY_FILE)) {
        const history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
        historyCount = history.askedQuestions ? history.askedQuestions.length : 0;

        const emptyHistory = {
            lastUpdated: new Date().toISOString(),
            totalQuestionsAsked: 0,
            askedQuestions: [],
            clearedOn: new Date().toISOString(),
            previousCount: historyCount
        };

        fs.writeFileSync(HISTORY_FILE, JSON.stringify(emptyHistory, null, 2));
        console.log(`Cleared ${historyCount} questions from history file.`);
    } else {
        console.log('No history file found.');
    }

    // Clear embedded questions from HTML files
    console.log('\nClearing embedded questions from HTML files...');
    const { clearedFiles, clearedQuestions } = clearEmbeddedQuestionsFromHtml();

    if (clearedFiles > 0) {
        console.log(`\nCleared ${clearedQuestions} questions from ${clearedFiles} HTML file(s).`);
    } else {
        console.log('No HTML files with embedded questions found.');
    }

    console.log('\n========================');
    console.log('All question data has been reset.');
    console.log('New exams will generate fresh questions.');
}

/**
 * Show current history status
 */
function showStatus() {
    console.log('Question History - Status');
    console.log('=========================\n');

    if (fs.existsSync(HISTORY_FILE)) {
        const history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));

        console.log(`Total questions tracked: ${history.totalQuestionsAsked || 0}`);
        console.log(`Last updated: ${history.lastUpdated || 'Never'}`);

        if (history.clearedOn) {
            console.log(`Last cleared: ${history.clearedOn}`);
        }

        // Count by domain
        if (history.askedQuestions && history.askedQuestions.length > 0) {
            const byDomain = {};
            for (const q of history.askedQuestions) {
                byDomain[q.domain] = (byDomain[q.domain] || 0) + 1;
            }

            console.log('\nQuestions by domain:');
            for (const [domain, count] of Object.entries(byDomain).sort()) {
                console.log(`  - ${domain}: ${count}`);
            }
        }
    } else {
        console.log('No history file found.');
        console.log('Run "node sync-history.js" to create one.');
    }
}

/**
 * Show help message
 */
function showHelp() {
    console.log(`
Question History Sync Utility
=============================

Commands:
  node sync-history.js          Sync history from quiz files and HTML exams
  node sync-history.js --clear  Clear history AND embedded questions from HTML files
  node sync-history.js --status Show current history statistics
  node sync-history.js --help   Show this help message

Aliases:
  --clear, -c    Clear history and HTML questions
  --status, -s   Show status
  --help, -h     Show help

What --clear does:
  1. Clears question-history.json (tracking file)
  2. Clears embedded questions from all HTML files in practice/app/

Examples:
  node sync-history.js --clear   # Reset everything for fresh start
  node sync-history.js --status  # Check how many questions are tracked
`);
}

// Run if called directly
if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
        case '--clear':
        case '-c':
            clearHistory();
            break;
        case '--status':
        case '-s':
            showStatus();
            break;
        case '--help':
        case '-h':
            showHelp();
            break;
        default:
            syncHistory();
    }
}

module.exports = { syncHistory, clearHistory, showStatus, hashQuestion };
