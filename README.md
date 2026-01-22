# ServiceNow CIS-DF Certification Study Guide

> An AI-powered study companion for the **ServiceNow Certified Implementation Specialist - Data Foundations (CIS-DF)** certification exam, covering CMDB and CSDM concepts.

---

## Table of Contents

- [Exam Overview](#exam-overview)
- [Quick Start](#quick-start)
- [Features](#features)
- [Commands Reference](#commands-reference)
- [Key Study Topics](#key-study-topics)
- [Repository Structure](#repository-structure)
- [Requirements](#requirements)
- [Tips for Success](#tips-for-success)

---

## Exam Overview

| Detail | Info |
|--------|------|
| **Exam Code** | CIS-DF |
| **Questions** | 75 |
| **Duration** | 90 minutes |
| **Passing Score** | ~70% |

### Domain Breakdown

| Domain | Weight | Focus Areas |
|--------|:------:|-------------|
| **Govern** | 35% | Health Score, Data Manager, Deduplication |
| **Insight** | 20% | NLQ, Unified Map, Dependency Views |
| **Ingest** | 19% | Service Graph Connectors, Discovery, ETL |
| **Configuration** | 15% | CI Class Manager, IRE, CMDB 360 |
| **CSDM Fundamentals** | 11% | Service mapping, Stakeholder roles |

---

## Quick Start

This repository is designed to work with **[Claude Code](https://claude.ai/code)** for interactive study sessions.

### 1. Start a Topic Quiz (Learning Mode)
```
"Quiz me on Govern"
```
Get 7-15 questions with immediate feedback, explanations, and concept deep dives.

### 2. Take a Full Practice Exam (Simulation Mode)
```
"Full practice test"
```
75-question timed exam that mirrors the real certification test.

---

## Features

### Topic Quizzes (Learning Mode)

Interactive quizzes with instant feedback for focused study:

| Command | Questions | Description |
|---------|:---------:|-------------|
| `"Quiz me on Govern"` | 10-15 | Largest domain - Health Score, Data Manager |
| `"Quiz me on Insight"` | 7-10 | NLQ, Unified Map, Dependency Views |
| `"Quiz me on Ingest"` | 7-10 | Service Graph Connectors, Discovery |
| `"Quiz me on Configuration"` | 7-10 | CI Class Manager, IRE |
| `"Quiz me on CSDM"` | 5-7 | CSDM fundamentals and mapping |

**What you get:**
- One question at a time with A/B/C/D options
- Immediate correct/incorrect feedback
- Detailed explanations for each answer
- Topic deep dives with exam tips
- Results automatically saved

### Full Practice Exam (Simulation Mode)

Realistic exam simulation that opens in your browser:

| Feature | Description |
|---------|-------------|
| **75 Questions** | Weighted by domain (Govern 26, Insight 15, Ingest 14, Config 11, CSDM 9) |
| **90-Minute Timer** | Strict countdown with auto-submit |
| **Question Navigator** | Jump to any question |
| **Flag for Review** | Mark questions to revisit |
| **Real Exam Feel** | No explanations during the test |
| **Results Report** | Domain breakdown with improvement areas |

---

## Commands Reference

### Study Commands

| Command | Description |
|---------|-------------|
| `"Quiz me on [topic]"` | Start an interactive topic quiz |
| `"Full practice test"` | Generate a 75-question exam simulation |
| `"Explain [topic]"` | Get detailed explanation of any concept |
| `"Show my quiz history"` | List all completed quizzes |
| `"Review [quiz-file]"` | Review a specific past quiz |

### Cleanup Commands

| Command | What it does |
|---------|--------------|
| `"Clear the results"` | Delete quiz results from `practice/results/` |
| `"Clear the practice exams"` | Delete generated HTML exams from `practice/app/` |
| `"Clear all practice data"` | Delete both results and exams |
| `"Clear question history"` | Reset deduplication (allows questions to repeat) |

**CLI alternative:**
```bash
node tools/sync-history.js --clear   # Clear question history
node tools/sync-history.js --status  # View history stats
```

---

## Key Study Topics

### Health Score Metrics (Memorize These!)

The CMDB Health Score consists of **6 key metrics**:

| # | Metric | What it Measures |
|:-:|--------|------------------|
| 1 | **Correctness** | Data accuracy and integrity |
| 2 | **Completeness** | Required fields are populated |
| 3 | **Compliance** | Adherence to defined policies |
| 4 | **Relationship** | Valid CI relationships exist |
| 5 | **Staleness** | Data freshness and recency |
| 6 | **Duplicate** | Duplicate CI detection |

### CSDM Layers

1. Foundation Data
2. Design Data
3. Sell/Consume Data
4. Manage Technical Services Data
5. Manage Portfolio Data

### Common Service Graph Connectors

AWS, Azure, GCP, SCCM, Intune, Active Directory, VMware, and 30+ others

---

## Repository Structure

```
.
├── docs/
│   ├── servicenow/
│   │   ├── markdown/       # 70+ ServiceNow Zurich docs (AI-readable)
│   │   └── pdf/            # Original PDF documentation
│   ├── courses/            # LinkedIn Learning course notes
│   └── INTERACTIVE_QUIZ_GUIDE.md
│
├── practice/
│   ├── app/                # Generated exam HTML files
│   ├── results/            # Saved quiz results (Markdown)
│   └── config/             # Exam settings & question history
│
├── tools/
│   ├── sync-history.js     # Question deduplication utility
│   └── pdf_to_markdown.py  # PDF conversion script
│
├── CLAUDE.md               # AI assistant instructions
└── README.md               # This file
```

### Documentation Coverage

The `docs/servicenow/markdown/` folder includes documentation on:
- CMDB fundamentals and architecture
- Identification and Reconciliation Engine (IRE)
- Service Graph Connectors
- CMDB Health and Data Management
- Unified Map and Dependency Views
- CSDM implementation

---

## Requirements

| Requirement | Purpose |
|-------------|---------|
| **Claude Code** | CLI or Claude.ai with code interpreter |
| **Web Browser** | For exam simulation app |
| **Node.js** | Optional - for running utility scripts |

---

## Tips for Success

| Priority | Tip |
|:--------:|-----|
| 1 | **Focus on Govern domain** - It's 35% of the exam |
| 2 | **Memorize the 6 Health Score metrics** - Frequently tested |
| 3 | **Understand IRE** - Identification rules, reconciliation, deduplication |
| 4 | **Know Service Graph Connectors** - Common ones and their purposes |
| 5 | **Practice with scenarios** - The exam is heavily scenario-based |

---

## License

This repository contains study materials and references to ServiceNow documentation. ServiceNow and related trademarks are property of ServiceNow, Inc.

---

<div align="center">

**Good luck with your CIS-DF certification!**

</div>
