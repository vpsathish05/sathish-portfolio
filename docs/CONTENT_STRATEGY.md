# Content Strategy: Portfolio & Resume

Based on research on what actually works for AI architects seeking UK/US remote roles, and a deep review of your OKF.

---

## Key Insights from Research

### What Contract Clients & Hiring Managers Want

1. **Problem-first, not tech-first** — Lead with the business problem, not the tech stack
2. **Show judgment, not just output** — Why did you choose this approach? What did you NOT do?
3. **Real constraints** — Messy data, tight deadlines, changing requirements, budget limits
4. **Business outcomes** — Time saved, money saved, people helped, decisions enabled
5. **Narrow positioning** — "I help X companies solve Y problem" beats "AI/ML generalist"
6. **One honest failure** — What broke? What did you learn? Shows maturity.

### What's Wrong with Current Portfolio

| Issue | Problem |
|-------|---------|
| Too much jargon | "Agentic AI", "MCP servers", "multi-agent workflows" — means nothing to a non-technical hiring manager |
| No human stories | Numbers without context. "260 hours → 26 minutes" — but WHY did it matter? |
| Generic positioning | "AI Architect & Team Lead" — what KIND of problems? For whom? |
| No constraints shown | Everything looks easy. No trade-offs discussed. |
| No failures | Perfect portfolio = suspicious portfolio |
| Robotic voice | "Architected AI solutions" — no one talks like this |

---

## Your Real Story (from OKF)

### The Narrative Arc

**2017-2021: The Foundation**
- Started with C#/.NET at RmKV — enterprise ERP for 20+ retail locations
- Learned that software exists to solve real business problems, not to be clever

**2022-2023: The Data Layer**
- Joined consulting firm, built data platforms
- ETL pipelines, dbt, Redshift — the "plumbing" that makes AI possible
- Learned: AI without good data is worthless

**2024-2025: The AI Pivot**
- Contract Intelligence project — your breakthrough
- Took a "3-4 week PoC" that became 6 months because it actually worked
- Built products, not just projects

**2025-Now: The Leader**
- Running a team of 6-7 engineers
- Product owner for multiple AI platforms
- Winning sales opportunities — not just building, but selling

### The Real Problems You Solved

#### 1. Contract Intelligence (Enterprise Client)
**The human story:**
> A company was drowning in contracts. 200-page documents, nested tables, pricing buried in legalese. Their team spent 260 hours manually extracting data from each batch. They'd tried OCR tools before — they all failed on complex tables.

**What you actually did:**
- PaddleOCR for table detection (because commercial OCR couldn't handle nested structures)
- Qwen SLM for extraction (not GPT-4 — cost would've been prohibitive at scale)
- Human-in-the-loop for low-confidence fields (because 100% automation wasn't the goal — accuracy was)

**The constraint:**
- Started as a 3-4 week proof of concept
- Grew to 6 months because the problem was harder than anyone expected
- Had to integrate with Salesforce — their existing system, not a greenfield

**What broke:**
- Early versions hallucinated pricing on complex multi-currency tables
- Had to add confidence scoring and flag anything below 85% for human review

**The outcome:**
- 260 hours → 26 minutes (99% reduction)
- 85-90% straight-through automation
- Legal team now does strategic work instead of data entry

#### 2. Enterprise AI Assistant (Internal Platform)
**The human story:**
> 200+ consultants using ChatGPT for client work — but with sensitive data. Compliance nightmare waiting to happen. Leadership wanted a "private ChatGPT" that connected to internal systems.

**What you actually did:**
- Built the product from scratch (not just assembled APIs)
- Connected to SharePoint, Power BI, DevOps, CRM — where the actual knowledge lives
- Added workspace management — different teams, different access, different data

**The constraint:**
- Security requirements meant no external API calls for certain data
- Had to work with Azure OpenAI (client mandate, not choice)
- Multiple stakeholders with conflicting requirements

**Why it mattered:**
- Consultants stopped using public AI tools for client work
- Knowledge that was locked in documents became searchable
- New hires could find answers without asking senior people

#### 3. AI Context Layer for PE Firm
**The human story:**
> Investment team at a PE firm spent days preparing for Investment Committee meetings. Information scattered across deal memos, portfolio reports, market research. They wanted an "intelligent analyst" that knew their context.

**What you actually did:**
- Designed architecture for context layer — not just RAG, but structured business context
- Used Claude Enterprise (their choice) with custom MCP tools
- Built for governance — audit trail, explainability, human approval

**The constraint:**
- Highly regulated environment — every answer needed citations
- Couldn't train on their data (they didn't want that risk)
- Had to integrate with their existing workflow, not replace it

**What you learned:**
- PE firms don't want AI that makes decisions — they want AI that prepares decisions
- "Devil's Advocate" feature was their favorite — AI that challenges assumptions

#### 4. Custom MCP Server for Microsoft Fabric
**The human story:**
> Fabric Data Agent could answer questions about data, but that's all it did. "What were sales last quarter?" → Answer. But users wanted to DO things — export to Excel, create a chart, send to a colleague.

**What you actually did:**
- Built custom MCP server that extends Fabric's capabilities
- Added tools: Excel export, chart generation, scheduled reports
- Connected to Claude for natural language interface

**The constraint:**
- Had to work around Fabric Data Agent's limitations without replacing it
- OAuth authentication was broken in the preview — had to build workaround with custom Entra ID app

**Why this matters:**
- Showed that MCP isn't just for toy demos — it's for extending enterprise tools
- Prototype led to broader MCP adoption discussions internally

---

## Positioning Statement (One Sentence)

**Current (bad):**
> "AI Architect & Team Lead | Building Production LLM Systems & RAG Architectures"

**Better options:**

1. For enterprise clients:
> "I help consulting and PE firms turn unstructured documents into decisions — without replacing their existing workflows."

2. For technical leaders:
> "I build AI systems that work inside enterprises — not demos, but production systems with guardrails, governance, and human oversight."

3. For the human version:
> "I spent four years learning that AI only matters when it solves real problems for real people. Now I lead a team that builds AI systems for enterprises — the kind that actually get used, not just demo'd."

---

## Portfolio Structure (Recommended)

### Home Page
1. **One-liner** — Who you help, with what
2. **The proof** — 2-3 case studies (not 7)
3. **How you think** — One "why I chose this approach" section
4. **The path** — Timeline (brief)
5. **Let's talk** — Contact

### Each Case Study
1. **The situation** — What was the problem? Who had it? Why did it matter?
2. **The constraint** — What made this hard? Budget? Data? Timeline? Politics?
3. **The approach** — What did you try? What didn't work? What did you choose and why?
4. **The evidence** — Show it working (trace, terminal, screenshot)
5. **The outcome** — Business result, not technical metrics
6. **What I learned** — Honesty builds trust

---

## Resume Structure (Recommended)

### Summary (3-4 sentences, human voice)
Don't: "AI COE Team Lead managing 6-7 engineers while driving enterprise AI strategy..."
Do: "I lead a team of AI engineers at a consulting firm. We build systems that help enterprises make sense of their documents, data, and decisions. My work has saved clients thousands of hours of manual work — and helped win new business worth millions."

### Experience (STAR format, outcome-first)
Don't: "Architected and deployed GenAI-based products including AI chatbots..."
Do: "Took over a failing contract extraction project. Previous team couldn't handle complex tables. Built a new pipeline using PaddleOCR and a small language model. Went from 260 hours of manual work to 26 minutes of automation. Client extended the engagement from 4 weeks to 6 months."

### Projects (2-3 deep, not 7 shallow)
- Lead with the business problem
- Include one "what didn't work" detail
- End with measurable outcome

---

## Voice Guidelines

### Don't
- "Architected", "Leveraged", "Utilized", "Spearheaded"
- "Cutting-edge", "Revolutionary", "World-class"
- "Passionate about AI" (everyone says this)
- Long sentences with multiple clauses
- Third person ("Sathish has...")

### Do
- "Built", "Led", "Fixed", "Shipped"
- Specific numbers with context
- Short sentences. Active voice.
- First person ("I built...")
- One idea per sentence

### Examples

**Before:**
> "Architected and deployed GenAI-based products including AI chatbots and document intelligence systems leveraging Azure AI Foundry and AWS Bedrock to deliver intelligent automation solutions."

**After:**
> "Built a document extraction system that cut processing time from 260 hours to 26 minutes. The client's legal team now spends time on strategy instead of copying data into spreadsheets."

---

## Action Items

1. **Rewrite portfolio page** — 3 case studies max, human voice, problem-first
2. **Rewrite resume** — Summary in first person, experience with context, outcomes with meaning
3. **Add one "what broke" section** — Shows maturity and honesty
4. **Narrow the positioning** — "Document intelligence for enterprises" or similar
5. **Remove jargon** — If your mom can't understand it, simplify it

---

## Questions to Answer Before Writing

For each project:
1. Who had this problem?
2. Why couldn't they solve it themselves?
3. What did you try that didn't work?
4. What did you choose and why?
5. What was the hardest part?
6. What would you do differently?
7. How do you know it worked?

---

*This document is the foundation for rewriting the portfolio and resume with human, authentic content.*
