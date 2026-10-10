Signal is a portfolio design system for an AI architect who builds agentic systems. Its idea in one line: **show the system, not the slide.** The page reads like an editorial magazine and proves itself like a terminal: a serif voice making claims, mono evidence underneath, and one saffron *signal* marking the thing that matters.

## Principles

1. **Evidence over adjectives.** Every claim on the page sits next to proof — an `AgentTrace`, a `Terminal`, an architecture visual, a `Metric`. If a sentence says "scalable", replace it with what scaled.
2. **One signal per view.** `signal` (saffron) appears once per screen: the primary `Button`, the agent core, or the `ContactBand`. Two saffron things in one viewport means one of them is wrong.
3. **Editorial meets terminal.** Claims and names in the `display` serif; data, labels and anything a machine said in `mono`; everything else in `sans`.
4. **Precise, never sterile.** Small corners (`radius-xs`, `radius-md`), hairlines (`line`), a 4px grid — warmed by the paper-and-ink neutrals and generous air (`space-9` between sections).

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
- `signal` is the brand. Use it as a fill; when saffron must be text, use `signal-ink`. Text on a saffron fill is always `on-signal`.
- `current` (teal) is connective tissue: MCP and tool nodes, live edges, availability status, the focus ring. It never competes with signal for "primary".
- `signal-soft` / `current-soft` are tag grounds; `signal-tint` is decorative and never sits behind text.
- `danger` only for failures, always paired with a word. Signal (orange) and current (teal) sit on the blue–orange axis, so status never depends on red/green.
- Night is the default theme (dark looks dominate AI-portfolio audiences); Paper must look equally finished — test both before shipping a page.

## Typography

- Three families, each with one job: `display` (Instrument Serif) for names, titles, big numbers; `sans` (Geist) for reading; `mono` (Geist Mono) for labels, code, traces. All three load from Google Fonts (see `components/bundle.css`).
- Hero name in `display-xl`; the second word may be *italic* in `signal-ink` — the system's signature move. Use the italic-accent once per heading at most (`SectionHeader`, `ContactBand` do it via their `accent` prop).
- Section titles `display-m`; card titles `display-s`; running copy `body` at 60–72ch (`prose-max`).
- `eyebrow` is the only style with open letterspacing; never letterspace sans or serif.
- Never bold the serif. Emphasis in display text is italic; in body text, `ink` against `ink-muted`.

## Space, layout & shape

- 4px base: `space-1` … `space-9`. Card padding `space-5`; section gap `space-9`; hero/contact padding `space-8`.
- Frame: `content-max` 1200px, 12-column mental grid; case-study prose capped at `prose-max`.
- Corners say what a thing is: `radius-pill` = an action (Buttons only); `radius-xs` = data (tags, nodes); `radius-md` = a container; `radius-lg` = a stage (Hero, ContactBand).
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

`NavBar` → `Hero` → `SectionHeader` + `ProjectCard` grid → `AgentTrace` / `Terminal` inside case studies → `Metric` row → `Timeline` → `ContactBand`. That order *is* the home page. Use `Tag` for stacks and status, `Button` for every action. See **Case study anatomy** for the page that sits behind each card.

## Accessibility

- All text pairs meet WCAG AA (4.5:1) in both themes; usage notes name the grounds each colour is checked on.
- Focus: 2px solid `focus` ring, 3px offset, on every interactive element; inside `ContactBand` the ring becomes `on-signal`.
- Live/status meaning always has a word ("live", "complete", "Now", "failed") — never colour alone.
