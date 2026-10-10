# Portfolio & résumé structure

How UK and US AI architects structure the two documents that get them hired, mapped to Signal components. Both follow one rule: **proof before claims**. Three deep case studies beat ten thumbnails, every project shows its decisions and evaluation, and every number is real and non-confidential.

## Home page (top to bottom)

| # | Section | What it answers | Components |
|---|---|---|---|
| 0 | Navigation | Where can I go? Are you available? | `NavBar` |
| 1 | Hero | Who are you, what do you architect, for whom? (one sentence) | `Hero` |
| 2 | Proof strip | Is there evidence? 3–4 measured outcomes | `Metric` row |
| 3 | Expertise | What can you design and own? | `CapabilityGrid` (6 areas) |
| 4 | Selected work | Show me — 3 case studies, strongest first | `SectionHeader` + `ProjectCard` (1 featured + 2) |
| 5 | How it runs | Can I see a real system? | `ArchitectureStack`, `AgentTrace`, `Terminal` |
| 6 | Approach | How do you work, and what do I get at each stage? | `ProcessSteps` |
| 7 | Stack | Which tools, at what depth? | `StackMatrix` |
| 8 | Experience | Career path and scope | `Timeline` |
| 9 | Credentials | Certifications, education, awards | `CredentialList` |
| 10 | Thinking | Writing and talks | `WritingList` |
| 11 | Endorsements | What do others say? | `Testimonial` (1–3) |
| 12 | Engage (optional) | How can I hire you? | `ServiceCard` ×3 — independent/consulting only |
| 13 | Contact | One clear next step | `ContactBand` |

Recruiter-facing portfolios can drop 12; client-facing ones move 6 and 12 above 7.

## Case-study page

Problem → constraints → approach → architecture → key decisions and trade-offs → a real run → evaluation → results → what broke → what's next. The full block-by-block template is in **Case study anatomy**.

## CV / résumé

One source, two exports. Wrap it in `.sg-resume`; print with `data-theme="paper"`.

| | UK CV | US résumé |
|---|---|---|
| Length | 2 A4 pages (standard) | 1–2 US Letter pages (2 for senior) |
| Opening | Personal statement, 4–6 lines | Summary, 3–4 lines |
| Spelling & dates | British; "June 2024" | American; "06/2024" or "Jun 2024" |
| Personal details | City, email, phone, links only; right-to-work line only if relevant | City, email, phone, links only |
| Never | Photo, date of birth, marital status, nationality, full address | Same |

Section order for both: `ResumeHeader` (title, name, contact, statement) → `ResumeSection` "Core skills" (one line of 8–12 keywords matched to the role) → "Experience" with `ResumeRole`, reverse-chronological → "Certifications" → "Education" → "Publications & talks" / "Awards".

**Bullet formula:** action verb + what you architected/built + measurable result + scale. "Architected a multi-agent triage platform over MCP, cutting routine handling time by 38% across 4 support teams." Avoid "responsible for" and "helped". Use 3–5 bullets for recent roles and 1–2 for older ones.

## Confidentiality (applies to every section)

Describe clients by industry, never by name. Give projects generic, descriptive titles. Redact traces, schemas and screenshots. Attribute testimonials by role unless the person agrees to be named. Never include ID numbers or confidential figures.
