# Terminal
A shell session as evidence: how the thing runs, not how it looks.

- Consumer provides `title` (working dir), `shell`, and `lines`: strings for output, `{cmd}` for commands (saffron `$` prompt), `{text, tone}` for `ok` (`current-ink`), `warn` (`signal-ink`) or `error` (`danger`).
- A trailing prompt with a blinking cursor is on by default (`cursor: false` to hide).
- Keep to ≤ 10 lines; one Terminal per case study. Real commands only.
