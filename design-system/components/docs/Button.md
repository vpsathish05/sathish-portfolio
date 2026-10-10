# Button
The only way to trigger an action: a sharp, machined rectangle (`radius-xs`).

- **primary** — ice `signal` fill, `on-signal` text, trailing `→`. At most once per view, for the thing the page is for ("See selected work", "Book a call"). Hover lifts to `signal-strong` with `shadow-glow`.
- **secondary** — `line-strong` outline, `ink` text. Every other action ("Download CV", "GitHub").
- **ghost** — underlined text for in-flow links ("All work").
- Sizes `sm` 36px (NavBar), `md` 44px, `lg` 56px (Hero, case-study ends).
- Consumer provides: `children` (verb-first, sentence case, ≤ 3 words), `href` to render a link, `onClick` otherwise. Do not put icons inside except the built-in arrow.
