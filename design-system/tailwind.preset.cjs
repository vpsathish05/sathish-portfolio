/* Signal Tailwind preset. Values are CSS variables from tokens.css — import tokens.css globally. */
module.exports = {
  "darkMode": [
    "selector",
    "[data-theme=\"obsidian\"]"
  ],
  "theme": {
    "extend": {
      "colors": {
        "bg": "var(--bg)",
        "surface": "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        "surface-sunk": "var(--surface-sunk)",
        "line": "var(--line)",
        "line-strong": "var(--line-strong)",
        "ink": "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-faint": "var(--ink-faint)",
        "signal": "var(--signal)",
        "signal-strong": "var(--signal-strong)",
        "signal-ink": "var(--signal-ink)",
        "on-signal": "var(--on-signal)",
        "signal-soft": "var(--signal-soft)",
        "signal-tint": "var(--signal-tint)",
        "sheen": "var(--sheen)",
        "current": "var(--current)",
        "current-ink": "var(--current-ink)",
        "on-current": "var(--on-current)",
        "current-soft": "var(--current-soft)",
        "danger": "var(--danger)",
        "focus": "var(--focus)"
      },
      "spacing": {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
        "8": "var(--space-8)",
        "9": "var(--space-9)"
      },
      "borderRadius": {
        "xs": "var(--radius-xs)",
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)"
      },
      "fontFamily": {
        "display": [
          "var(--font-display)"
        ],
        "sans": [
          "var(--font-sans)"
        ],
        "mono": [
          "var(--font-mono)"
        ]
      },
      "fontSize": {
        "display-xl": [
          "120px",
          {
            "lineHeight": "0.92",
            "letterSpacing": "-0.02em",
            "fontWeight": "400"
          }
        ],
        "display-l": [
          "72px",
          {
            "lineHeight": "0.98",
            "letterSpacing": "-0.02em",
            "fontWeight": "400"
          }
        ],
        "display-m": [
          "56px",
          {
            "lineHeight": "1",
            "letterSpacing": "-0.015em",
            "fontWeight": "400"
          }
        ],
        "display-s": [
          "34px",
          {
            "lineHeight": "1.05",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "title": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "heading": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.015em",
            "fontWeight": "600"
          }
        ],
        "lede": [
          "20px",
          {
            "lineHeight": "30px",
            "fontWeight": "400"
          }
        ],
        "body": [
          "16px",
          {
            "lineHeight": "26px",
            "fontWeight": "400"
          }
        ],
        "small": [
          "14px",
          {
            "lineHeight": "22px",
            "fontWeight": "400"
          }
        ],
        "eyebrow": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.12em",
            "fontWeight": "500"
          }
        ],
        "code": [
          "13px",
          {
            "lineHeight": "22px",
            "fontWeight": "400"
          }
        ],
        "tag": [
          "12px",
          {
            "lineHeight": "12px",
            "letterSpacing": "0.02em",
            "fontWeight": "500"
          }
        ]
      },
      "boxShadow": {
        "card": "var(--shadow-card)",
        "glow": "var(--shadow-glow)"
      },
      "dropShadow": {},
      "textShadow": {
        "glow": "var(--glow-text)"
      },
      "maxWidth": {
        "content": "var(--content-max)",
        "prose": "var(--prose-max)"
      },
      "transitionTimingFunction": {
        "signal": "cubic-bezier(.2,.8,.2,1)"
      }
    }
  }
};
