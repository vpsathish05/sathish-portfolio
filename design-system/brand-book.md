Signal is a portfolio design system for an AI architect who builds agentic systems. Its idea in one line: **show the system, not the slide.** The look is **Obsidian**: near-black, machined surfaces with a metallic sheen, sharp faceted geometry, and one ice silver-white glow marking the thing that matters. The page reads like an editorial magazine and proves itself like a terminal: a serif voice making claims, mono evidence underneath.

## Principles

1. **Evidence over adjectives.** Every claim on the page sits next to proof — an `AgentTrace`, a `Terminal`, an architecture visual, a `Metric`. If a sentence says "scalable", replace it with what scaled.
2. **One glow per view.** `signal` (ice silver-white) appears once per screen: the primary `Button`, the agent core, or the `ContactBand`. Two glowing things in one viewport means one of them is wrong.
3. **Editorial meets terminal.** Claims and names in the `display` serif; data, labels and anything a machine said in `mono`; everything else in `sans`.
4. **Machined, never cold.** Sharp corners (`radius-xs` to `radius-lg`, nothing round), diamond nodes, hairlines (`line`), a 1px `sheen` on every raised edge, a 4px grid — softened by the serif and generous air (`space-9` between sections).

## Content fundamentals

- Write in first person, active voice, present tense: "I architect agentic AI for the enterprise." Not "Passionate AI enthusiast leveraging cutting-edge…".
- Sentence case everywhere except `eyebrow` labels, which are UPPERCASE mono: `01 — SELECTED WORK`.
- Lead with the outcome, then the mechanism: "Tickets triaged in seconds — via an agent that calls CRM, payments and policy tools over MCP."
- Name real tools and protocols (MCP, LangGraph, RAG, Python). Specific nouns are credibility; buzzwords ("revolutionary", "synergy", "cutting-edge") are banned.
- Numbers only when measured. Never invent a metric to fill a `Metric` slot; use a verifiable, non-confidential fact (a year, a count of shipped systems) instead.
- **Confidentiality is non-negotiable.** Never name an employer's clients, internal project codenames, internal tools, people, or confidential figures. Describe work by industry and problem ("an enterprise support team", "a finance function"), give projects descriptive generic titles ("Support Triage Agent"), and redact traces, schemas and commands before publishing.
- Every name, project, metric and trace in the component previews is **sample content** — replace it with your own anonymised material.
- No emoji. Arrows are the only glyph-ornament: `→` for actions, `↗` for outbound/case-study links.

## Colour

- Ground every page in `bg`; step up with `surface` (cards, nav) and `surface-raised` (featured only); step *down* into `surface-sunk` for evidence (Hero stage, `AgentTrace`, `Terminal`, card visuals). Depth means "this is proof".
- Text is `ink` (headings, labels) or `ink-muted` (paragraphs). `ink-faint` is for small mono metadata only.
- `signal` is the glow: ice silver-white on Obsidian, deep steel on Paper. Use it as a fill; when it must be text, use `signal-ink` (pale ice blue, with `glow-text` on Obsidian). Text on a signal fill is always `on-signal`.
- `sheen` is the metal: a 1px top-edge highlight on cards and stages and a faint diagonal light across the Hero. Never more than that — the surfaces stay matte.
- `current` (mint) is connective tissue: MCP and tool nodes, live edges, availability status. It never competes with signal for "primary". The focus ring is the ice `focus` token.
- `signal-soft` / `current-soft` are tag grounds; `signal-tint` is decorative and never sits behind text.
- `danger` only for failures, always paired with a word. Ice and mint differ in lightness as well as hue, and every status carries a word, so nothing depends on colour alone.
- Obsidian is the default theme; Paper (cool greys, steel accent) must look equally finished — test both before shipping a page.

## Typography

- Three families, each with one job: `display` (Instrument Serif) for names, titles, big numbers; `sans` (Geist) for reading; `mono` (Geist Mono) for labels, code, traces. All three load from Google Fonts (see `components/bundle.css`).
- Hero name in `display-xl`; the second word may be *italic* in `signal-ink` — the system's signature move. Use the italic-accent once per heading at most (`SectionHeader`, `ContactBand` do it via their `accent` prop).
- Section titles `display-m`; card titles `display-s`; running copy `body` at 60–72ch (`prose-max`).
- `eyebrow` is the only style with open letterspacing; never letterspace sans or serif.
- Never bold the serif. Emphasis in display text is italic; in body text, `ink` against `ink-muted`.

## Space, layout & shape

- 4px base: `space-1` … `space-9`. Card padding `space-5`; section gap `space-9`; hero/contact padding `space-8`.
- Frame: `content-max` 1200px, 12-column mental grid; case-study prose capped at `prose-max`.
- Corners are machined: `radius-xs` for actions and data (Buttons, tags), `radius-md` for containers, `radius-lg` for stages (Hero, ContactBand). Nothing is a pill or a circle; markers and nodes are diamonds (squares turned 45°).
- Borders before shadows. Cards rest on a `line` border; hover raises them 3px with `shadow-card` and draws a 2px `signal` rule across the top edge.
- Texture comes from one pattern: a dot grid in `line` at a 24px pitch, faded with a mask. Use it on stages only.

## Motion

- Motion explains data flow; it is never decoration. Allowed: edges flowing toward the agent core, trace steps arriving in order, a blinking cursor, live-dot breathing, hover lifts.
- Easing `cubic-bezier(.2,.8,.2,1)`; 180–250ms for hovers, 400–500ms for reveals, staggered 420ms per trace step.
- Every looping animation stops under `prefers-reduced-motion: reduce` (already handled in `bundle.css`).

## Iconography & imagery

- No logo exists; the identity is typographic. The NavBar shows the owner's initials as a mono monogram set in plain type on `ink` — keep it type, never draw a mark.
- Icons: use [Lucide](https://lucide.dev) at 1.5px stroke, 16/20px, in `ink-muted` (flagged substitute — no custom icon set exists yet).
- Imagery is architecture, not stock: system diagrams, `AgentTrace` captures, `Terminal` sessions, screenshots of real tools. No robot heads, glowing brains, or blue-purple gradient "AI" art. One portrait is allowed on About, unretouched, desaturated toward the palette.

## Components at a glance

- **Page frame:** `NavBar`, `Hero`, `SectionHeader`, `ContactBand`.
- **Proof:** `Metric`, `ProjectCard`, `AgentTrace`, `Terminal`, `ArchitectureStack`, `Testimonial`.
- **Expertise:** `CapabilityGrid`, `ProcessSteps`, `StackMatrix`.
- **Profile:** `Timeline`, `CredentialList`, `WritingList`, `ServiceCard` (optional).
- **Résumé:** `ResumeHeader`, `ResumeSection`, `ResumeRole` inside `.sg-resume`.
- `Tag` for stacks and status, `Button` for every action.

The page order and the CV format are in **Portfolio & résumé structure**; the page behind each project card is in **Case study anatomy**.

## Accessibility

- All text pairs meet WCAG AA (4.5:1) in both themes; usage notes name the grounds each colour is checked on.
- Focus: 2px solid `focus` ring, 3px offset, on every interactive element; inside `ContactBand` the ring becomes `on-signal`.
- Live/status meaning always has a word ("live", "complete", "Now", "failed") — never colour alone.
