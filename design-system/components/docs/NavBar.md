# NavBar
The top bar: typographic initials monogram + name, numbered section links, a live status, and a secondary CTA.

- Consumer provides `name`, `links` (3–5, one `active`), optional `status` (≤ 3 words, e.g. "Shipping agents") and `cta` (`{label, href}`).
- Numbers (`01`, `02`…) mirror the section indices in `SectionHeader`, so the nav reads like a table of contents.
- The monogram is plain type — there is no logo. Links collapse below 820px; supply your own menu if you need one.
- Make it `position: sticky; top: var(--space-3)` in the page shell; height is `nav-height`.
