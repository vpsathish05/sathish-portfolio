# AgentTrace
The signature evidence component: one recorded agent run, rendered step by step on a node rail.

- Consumer provides `steps` — `{kind, label, detail?, ms?}` where `kind` is `plan`, `mcp`, `tool`, `model`, `human`, `result` or `error` — plus `title` ("trace · agent-name"), `meta` (run id · steps · total time).
- Colour follows meaning: model/result nodes in `signal`, MCP/tool in `current`, plan/human neutral, error in `danger` with the word "Error".
- `live` replays the run (steps arrive 420ms apart, cursor blinks on the last); use it once per page, above the fold of a case study. Otherwise it shows "complete" (or `status: 'failed'`).
- Use real runs, lightly redacted. 4–8 steps reads best; summarise longer runs.
