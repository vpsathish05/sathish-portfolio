# ArchitectureStack
A layered reference architecture: the fastest way to show how you think about systems.

- Consumer provides `layers` — `{name, items[], tone?}` top (user-facing) to bottom (platform) — plus `title`, `meta` and an optional cross-cutting `rail` ("Evaluation · Observability · Governance").
- `tone: 'signal'` marks the one layer you own (glow); `tone: 'current'` marks the MCP/tool layer. Use each once at most.
- Use generic component names ("CRM server"), never a client's system names.
