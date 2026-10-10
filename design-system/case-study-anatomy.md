# Case study anatomy

Two or three deep case studies beat ten thin ones. Each card on the home page opens one page built in this order — every block names the component or token that carries it.

1. **Header.** `eyebrow` client type and year ("ENTERPRISE · 2026" — industry, never the client's name); title in `display-m` with an italic accent; a one-sentence outcome in `lede`, `ink-muted`.
2. **The problem, in their words.** One paragraph, `body`, capped at `prose-max`. What did the client actually need, and what made it hard (data access, governance, latency, trust)?
3. **Architecture.** A diagram on `surface-sunk` with a `line` border and `radius-md`. Agents and models as `signal` nodes, MCP servers and tools as `current` nodes, data stores as `ink-muted` outlines. Label edges with what flows, in `mono`.
4. **A real run.** An `AgentTrace` of one representative request — plan, MCP calls, tool calls, model, result — with timings. This is the "wow" moment: the reader watches the system think.
5. **What broke.** One honest failure and the fix: a bad retrieval, a hallucinated KPI, a permission leak caught in testing. Hiring managers and clients trust the person who shows the failure case.
6. **Evaluation.** How you knew it worked: evaluation set, faithfulness / context-precision scores for RAG, latency p95, human review rate. `Metric` row only for measured numbers.
7. **Outcome & stack.** `Metric` row (if measured) + `Tag` row of the stack. Close with a secondary `Button` to the next case study.

Rules: no client names, project codenames, people or confidential numbers; redact every screenshot, trace and schema; every visual must be real work, sanitised; keep each case study to one scroll of roughly 5–7 screens.
