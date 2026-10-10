---
name: signal-design-system
description: Use for ANY UI, page, component, styling or copy work in this portfolio — building pages, case studies, components, theming, Tailwind classes, or reviewing a design. Applies the Signal design system in ./design-system (tokens, brand book, React components) and its confidentiality rules.
---

# Signal design system

## Before you write UI
1. Read `design-system/brand-book.md` (rules) and, for case studies, `design-system/case-study-anatomy.md`.
2. Read `design-system/components/index.d.ts` for available components and props; read `design-system/components/docs/<Component>.md` for any component you use.
3. Open `design-system/tokens.json` for exact values when you need them.

## Build rules
- Style only with tokens: CSS variables from `tokens.css` or classes from `tailwind.preset.cjs`. No raw hex, px font sizes, or ad-hoc radii.
- Prefer existing components (`Button`, `Tag`, `NavBar`, `Hero`, `SectionHeader`, `Metric`, `ProjectCard`, `AgentTrace`, `Terminal`, `Timeline`, `ContactBand`). Import from `design-system/components/signal.js` (React) — or port them into the app's component folder keeping the `sg-` classes and `signal.css`.
- New components: `sg-<name>` BEM-style classes, token-only values, a `docs/<Name>.md` with when-to-use + props, and both themes checked.
- Page order for the home page: NavBar → Hero → Selected work (SectionHeader + ProjectCards, 1 featured + 2) → How it runs (AgentTrace + Terminal + Metrics) → About (Timeline) → ContactBand. `design-system/demo.html` is the reference implementation.
- Corners: pill = Buttons only; `radius-xs` data; `radius-md` containers; `radius-lg` stages (Hero, ContactBand).
- One `signal` (saffron) focal element per viewport. `current` (teal) for MCP/tools/links/focus. Fonts: Instrument Serif (display), Geist (sans), Geist Mono (mono).
- Accessibility: contrast ≥ 4.5:1 in both themes; visible 2px focus ring (`--focus`); status always has a word, not colour alone; animations stop under `prefers-reduced-motion`.

## Confidentiality — check before every write
- No client names, employer-internal project names/codenames, people's names, internal tools, or confidential numbers in code, copy, alt text, metadata or commits.
- Generic, descriptive project titles; industry instead of client; redact traces, SQL, schemas, screenshots.
- If unsure whether something is confidential, stop and ask.

## Changing tokens
Edit `tokens.json` only, then regenerate `tokens.css` (`:root,[data-theme="night"]` + `[data-theme="paper"]` blocks, then spacing/radius/layout/fonts, then one class per type style) and `tailwind.preset.cjs` so all three stay in sync.

## Done checklist
- [ ] Only tokens used  - [ ] Night + Paper both checked  - [ ] One saffron focal point per view
- [ ] Keyboard focus visible  - [ ] Reduced motion respected  - [ ] No confidential or personal data
