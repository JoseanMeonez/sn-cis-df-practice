# CIS-DF Interactive Quiz System

## Overview

This quiz system provides two distinct modes for CIS-DF exam preparation:

| Mode | Interface | Time | Purpose |
|------|-----------|------|---------|
| **Topic Quiz** | CLI (Interactive) | Untimed | Learn concepts with detailed explanations |
| **Full Practice Test** | Web App | 90 min | Exam simulation with timer |

---

## Mode 1: Topic Quiz (Learning Mode) - CLI

### How to Start
Say any of these to Claude:
- `"Quiz me on Configuration"`
- `"Quiz me on Ingest"`
- `"Quiz me on Govern"`
- `"Quiz me on Insight"`
- `"Quiz me on CSDM"`

### Quiz Flow
```
┌─────────────────────────────────────────────────────────────┐
│  Question Presented (1 at a time via CLI)                   │
│  ↓                                                          │
│  You Select Answer (A/B/C/D)                               │
│  ↓                                                          │
│  Immediate Feedback:                                        │
│    ├── Correct/Incorrect indicator                         │
│    ├── Correct answer with explanation                     │
│    ├── Why other options are wrong                         │
│    └── TOPIC DEEP DIVE:                                    │
│         ├── What the concept is                            │
│         ├── How it works in ServiceNow                     │
│         ├── Real-world use cases                           │
│         └── Exam tips                                      │
│  ↓                                                          │
│  Next Question → Repeat until complete                      │
│  ↓                                                          │
│  Final Summary & Score                                      │
│  ↓                                                          │
│  Auto-save to: practice/results/{topic}-{timestamp}.md     │
└─────────────────────────────────────────────────────────────┘
```

### Questions Per Topic
| Domain | Questions | Focus Areas |
|--------|-----------|-------------|
| Configuration | 7-10 | CI Class Manager, IRE, CMDB 360 |
| Ingest | 7-10 | Service Graph Connectors, ETL, Discovery |
| Govern | 10-15 | Health Score, Data Manager, Deduplication |
| Insight | 7-10 | NLQ, Unified Map, Dependency Views |
| CSDM | 5-7 | Domains, Service Types, Stakeholders |

---

## Mode 2: Full Practice Test (Exam Simulation) - Web App

### How to Start
Say to Claude: `"Full practice test"` or `"Start exam simulation"`

### What Happens
1. **Claude generates 75 unique questions** from documentation (randomized each time)
2. **Creates timestamped HTML file:** `practice/app/practice-test-YYYYMMDD-HHMMSS.html`
3. **You open** that specific file in browser
4. **Take the exam** with full timer and exam environment
5. **Each exam preserved** - unique file for every practice test

### Exam Parameters
| Parameter | Value |
|-----------|-------|
| Total Questions | 75 |
| Duration | 90 minutes (STRICT) |
| Passing Score | ~70% |
| Interface | Web browser |

### Question Distribution (Weighted by Domain)
| Domain | Weight | Questions |
|--------|--------|-----------|
| Configuration | 15% | 11-12 |
| Ingest | 19% | 14-15 |
| Govern | 35% | 26-27 |
| Insight | 20% | 15 |
| CSDM Fundamentals | 11% | 8-9 |
| **Total** | **100%** | **75** |

### Web App Features

```
┌─────────────────────────────────────────────────────────────┐
│  CIS-DF Practice Exam                      Timer: 45:32    │
│  Question 23 of 75                         Domain: Govern  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Question Text Here]                                       │
│                                                             │
│  ○ A. Option A                                             │
│  ○ B. Option B                                             │
│  ○ C. Option C                                             │
│  ○ D. Option D                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [Flag for Review]              [Previous] [Next] [Submit] │
└─────────────────────────────────────────────────────────────┘

SIDEBAR: Question Navigator (1-75) showing:
  - Current question (red)
  - Answered questions (green border)
  - Flagged questions (yellow dot)
  - Unanswered (gray)
```

### Exam Rules (Enforced by App)
- **Timer starts immediately** when you click "Start Exam"
- **Auto-submits when time expires** - cannot continue after
- **No feedback during exam** - just like real exam
- **Navigate freely** between questions
- **Flag for review** - mark questions to revisit
- **Unanswered = Incorrect** - all blank answers count as wrong

### After Exam Completion

The app shows:
1. **Overall Score** - Pass/Fail status
2. **Domain Breakdown** - Performance per domain with visual bars
3. **Improvement Areas** - Domains scoring below 70%
4. **Question Review** - See all questions with:
   - Your answer vs correct answer
   - Full explanation
5. **Download Report** - Saves markdown to your downloads

### Exam Flow Diagram
```
┌──────────────────────────────────────────────────────────────┐
│  User: "Full practice test"                                  │
│                              ↓                               │
│  Claude: Reads docs/servicenow/markdown/ documentation       │
│                              ↓                               │
│  Claude: Generates 75 UNIQUE randomized questions            │
│          (weighted by domain blueprint)                      │
│                              ↓                               │
│  Claude: Creates practice/app/practice-test-YYYYMMDD.html    │
│                              ↓                               │
│  Claude: "Open this file in your browser"                    │
│                              ↓                               │
│  User: Opens browser → Takes 90-minute exam                  │
│                              ↓                               │
│  App: Timer expires OR user submits                          │
│                              ↓                               │
│  App: Shows results + domain breakdown + improvement areas   │
│                              ↓                               │
│  User: Downloads report → Copy to practice/results/          │
└──────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
CIS - Data Foundation - Learning and Practice/
├── CLAUDE.md                        # AI instructions
├── README.md                        # Project overview
├── docs/
│   ├── INTERACTIVE_QUIZ_GUIDE.md    # This file
│   ├── requirements.md              # Project requirements
│   ├── servicenow/
│   │   ├── markdown/                # AI-readable docs
│   │   └── pdf/                     # Original PDFs
│   └── ServiceNow CIS-DF...pdf      # Exam blueprint
├── practice/
│   ├── app/
│   │   ├── index.html               # Main exam app
│   │   └── practice-test-*.html     # Timestamped exams
│   ├── config/
│   │   ├── exam-config.json         # Deduplication settings
│   │   └── question-history.json    # Tracked questions
│   └── results/
│       ├── configuration-*.md       # Topic quiz results
│       └── practice-test-*.md       # Exam reports
└── tools/
    └── sync-history.js              # Question history utility
```

---

## Question JSON Format

When Claude generates questions, they follow this format:

```json
[
    {
        "domain": "Configuration",
        "question": "Question text here?",
        "options": [
            "Option A text",
            "Option B text",
            "Option C text",
            "Option D text"
        ],
        "correctIndex": 1,
        "explanation": "Detailed explanation of why B is correct..."
    }
]
```

---

## Commands Reference

| Command | Mode | What It Does |
|---------|------|--------------|
| `Quiz me on {domain}` | CLI | Interactive topic quiz with explanations |
| `Full practice test` | Web App | Generate 75 questions, launch exam |
| `Explain {topic}` | CLI | Detailed explanation of a concept |
| `Show my quiz history` | CLI | List files in practice/results/ |

---

## Tips for Best Results

### For Topic Quizzes (Learning)
- Take your time - focus on understanding
- Read the topic deep dive even if you got it right
- Note concepts that confuse you
- Review saved quiz files periodically

### For Practice Tests (Exam Simulation)
- Simulate real exam conditions:
  - Quiet room, no interruptions
  - Don't look up answers
  - Use a real 90-minute block
- Manage time: ~72 seconds per question
- Review the full report afterward
- Focus study on weak domains
- Wait 2-3 days before retaking

---

## Troubleshooting

### "No Exam Found" in browser
- Make sure Claude generated questions first
- Check that `practice/app/index.html` exists
- Ask Claude: "Full practice test" to generate

### Questions seem similar across exams
- Questions are generated from documentation each time
- Some core concepts will appear frequently
- Focus on understanding, not memorization
