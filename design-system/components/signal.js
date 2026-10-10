/* Signal components — ES module build for React 18+. Import './signal.css' and '../tokens.css' once, globally. */
import * as React from 'react';
const h = React.createElement;

  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) if (arguments[i]) o.push(arguments[i]); return o.join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k) && keys.indexOf(k) < 0) o[k] = p[k]; return o; }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function initials(name) { return String(name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join(''); }
  function fmtMs(ms) { return ms >= 1000 ? (ms / 1000).toFixed(1) + 's' : Math.round(ms) + 'ms'; }

  /* Button ------------------------------------------------------------ */
  function Button(p) {
    var v = p.variant || 'primary', s = p.size || 'md';
    var arrow = p.arrow != null ? p.arrow : v === 'primary';
    var props = omit(p, ['variant', 'size', 'arrow', 'className', 'children']);
    if (!p.href && !props.type) props.type = 'button';
    props.className = cx('sg-btn', 'sg-btn--' + v, 'sg-btn--' + s, p.className);
    return h(p.href ? 'a' : 'button', props,
      h('span', null, p.children),
      arrow ? h('span', { className: 'sg-btn__arrow', 'aria-hidden': 'true' }, '\u2192') : null);
  }

  /* Tag --------------------------------------------------------------- */
  function Tag(p) {
    var t = p.tone || 'neutral';
    return h('span', { className: cx('sg-tag', 'sg-tag--' + t, p.live && 'sg-tag--live', p.className) },
      (p.dot || p.live) ? h('span', { className: 'sg-tag__dot', 'aria-hidden': 'true' }) : null,
      p.children);
  }

  /* NavBar ------------------------------------------------------------ */
  function NavBar(p) {
    var links = p.links || [];
    return h('header', { className: cx('sg-nav', p.className) },
      h('a', { className: 'sg-nav__brand', href: p.homeHref || '#' },
        h('span', { className: 'sg-nav__mark', 'aria-hidden': 'true' }, p.initials || initials(p.name)),
        h('span', null, p.name)),
      h('nav', { className: 'sg-nav__links', 'aria-label': 'Primary' },
        links.map(function (l, i) {
          return h('a', { key: i, href: l.href || '#', className: cx('sg-nav__link', l.active && 'is-active'), 'aria-current': l.active ? 'page' : undefined },
            h('span', { className: 'sg-nav__num', 'aria-hidden': 'true' }, pad(i + 1)), l.label);
        })),
      h('div', { className: 'sg-nav__end' },
        p.status ? h(Tag, { tone: 'current', live: true }, p.status) : null,
        p.cta ? h(Button, { href: p.cta.href || '#', size: 'sm', variant: 'secondary', arrow: true }, p.cta.label) : null));
  }

  /* Hero (with AgentGraph) -------------------------------------------- */
  var SAT = [[200, 50, 'middle', 0, -20], [342.7, 153.6, 'start', 20, 4], [288.2, 321.4, 'start', 16, 24], [111.8, 321.4, 'end', -16, 24], [57.3, 153.6, 'end', -20, 4]];
  function AgentGraph(p) {
    var labels = p.nodes || ['LLM', 'MCP', 'DATA', 'HUMAN', 'TOOLS'];
    var hot = p.hot || [1, 2];
    var core = p.core || 'AGENT';
    var kids = [h('circle', { key: 'o', className: 'orbit', cx: 200, cy: 200, r: 150 })];
    SAT.forEach(function (s, i) {
      kids.push(h('path', { key: 'e' + i, className: cx('edge', hot.indexOf(i) >= 0 && 'hot'), d: 'M' + s[0] + ' ' + s[1] + ' L200 200' }));
    });
    hot.forEach(function (i, n) {
      var s = SAT[i]; if (!s) return;
      kids.push(h('circle', { key: 'p' + i, className: 'packet', r: 3.5, cx: 0, cy: 0, style: { offsetPath: "path('M" + s[0] + ' ' + s[1] + " L200 200')", animationDelay: (n * 0.9) + 's' } }));
    });
    SAT.forEach(function (s, i) {
      kids.push(h('rect', { key: 's' + i, className: cx('sat', hot.indexOf(i) >= 0 && 'hot'), x: s[0] - 8, y: s[1] - 8, width: 16, height: 16, rx: 3 }));
      kids.push(h('text', { key: 't' + i, className: 'label', x: s[0] + s[3], y: s[1] + s[4], textAnchor: s[2] }, labels[i] || ''));
    });
    kids.push(h('rect', { key: 'halo', className: 'halo', x: 164, y: 164, width: 72, height: 72, rx: 12 }));
    kids.push(h('rect', { key: 'core', className: 'core', x: 164, y: 164, width: 72, height: 72, rx: 12 }));
    kids.push(h('text', { key: 'cl', className: 'core-label', x: 200, y: 204, textAnchor: 'middle' }, core));
    return h('div', { className: 'sg-graph', 'aria-hidden': 'true' },
      h('svg', { viewBox: '0 0 400 400', role: 'presentation' }, kids));
  }
  function Hero(p) {
    return h('section', { className: cx('sg-hero', p.className) },
      h('div', { className: 'sg-hero__grid', 'aria-hidden': 'true' }),
      h('div', null,
        p.eyebrow ? h('p', { className: 'sg-hero__eyebrow' }, p.eyebrow) : null,
        h('h1', { className: 'sg-hero__name' }, p.name, p.accent ? h('em', null, p.accent) : null),
        p.statement ? h('p', { className: 'sg-hero__statement' }, p.statement) : null,
        p.actions ? h('div', { className: 'sg-hero__actions' }, p.actions) : null),
      p.graph === false ? null : h(AgentGraph, p.graph || {}));
  }

  /* SectionHeader ----------------------------------------------------- */
  function SectionHeader(p) {
    return h('div', { className: cx('sg-sh', p.className) },
      h('p', { className: 'sg-sh__index' }, p.index ? h('span', { className: 'sg-sh__num' }, p.index) : null, p.label),
      h('div', null,
        h('h2', { className: 'sg-sh__title' }, p.title, p.accent ? h(React.Fragment, null, ' ', h('em', null, p.accent)) : null),
        p.lede ? h('p', { className: 'sg-sh__lede' }, p.lede) : null),
      p.aside ? h('div', { className: 'sg-sh__aside' }, p.aside) : h('span', null));
  }

  /* Metric ------------------------------------------------------------ */
  function Metric(p) {
    return h('div', { className: cx('sg-metric', p.className) },
      h('p', { className: 'sg-metric__value' }, p.value, p.unit ? h('span', { className: 'sg-metric__unit' }, p.unit) : null),
      h('p', { className: 'sg-metric__label' }, p.label),
      p.note ? h('p', { className: 'sg-metric__note' }, p.note) : null);
  }

  /* ProjectCard ------------------------------------------------------- */
  function ProjectCard(p) {
    var tags = p.tags || [];
    return h('article', { className: cx('sg-card', p.featured && 'sg-card--featured', p.className) },
      h('a', { className: 'sg-card__link', href: p.href || '#', 'aria-label': 'Read case study: ' + p.title }),
      h('div', { className: 'sg-card__top' },
        p.index ? h('span', { className: 'sg-card__index' }, p.index) : null,
        p.kind ? h(Tag, null, p.kind) : null,
        h('span', { className: 'sg-card__go', 'aria-hidden': 'true' }, '\u2197')),
      p.visual ? h('div', { className: 'sg-card__visual' }, p.visual) : null,
      h('h3', { className: 'sg-card__title' }, p.title),
      p.summary ? h('p', { className: 'sg-card__summary' }, p.summary) : null,
      p.outcome ? h('div', { className: 'sg-card__outcome' }, h('span', { className: 'sg-card__k' }, 'Outcome'), h('span', null, p.outcome)) : null,
      tags.length ? h('div', { className: 'sg-card__tags' }, tags.map(function (t, i) { return h(Tag, { key: i }, t); })) : null);
  }

  /* AgentTrace -------------------------------------------------------- */
  var KIND = { plan: 'Plan', model: 'Model', tool: 'Tool', mcp: 'MCP', human: 'Human', result: 'Result', error: 'Error' };
  function AgentTrace(p) {
    var steps = p.steps || [];
    var status = p.live ? h(Tag, { tone: 'signal', live: true }, 'live')
      : p.status === 'failed' ? h(Tag, { dot: true }, 'failed')
      : h(Tag, { tone: 'current', dot: true }, 'complete');
    return h('figure', { className: cx('sg-trace', p.live && 'is-live', p.className) },
      h('figcaption', { className: 'sg-trace__head' },
        h('span', { className: 'sg-trace__title' }, p.title || 'trace'),
        h('span', { className: 'sg-trace__meta' }, p.meta || ''),
        status),
      h('ol', { className: 'sg-trace__steps' }, steps.map(function (s, i) {
        var k = s.kind || 'tool';
        return h('li', { key: i, className: 'sg-step sg-step--' + k, style: { '--i': i } },
          h('span', { className: 'sg-step__node', 'aria-hidden': 'true' }),
          h('span', { className: 'sg-step__kind' }, KIND[k] || k),
          h('span', null,
            h('span', { className: 'sg-step__label' }, s.label),
            s.detail ? h('code', { className: 'sg-step__detail' }, s.detail) : null),
          s.ms != null ? h('span', { className: 'sg-step__ms' }, fmtMs(s.ms)) : h('span', null));
      })));
  }

  /* Terminal ---------------------------------------------------------- */
  function Terminal(p) {
    var lines = p.lines || [];
    return h('div', { className: cx('sg-term', p.className) },
      h('div', { className: 'sg-term__bar' }, h('span', null, p.title || '~'), h('span', { className: 'sg-term__shell' }, p.shell || 'zsh')),
      h('pre', { className: 'sg-term__body' },
        lines.map(function (l, i) {
          var t = typeof l === 'string' ? { text: l } : l;
          return h('div', { key: i, className: cx('sg-term__line', t.cmd && 'is-cmd', t.tone && 'is-' + t.tone) },
            t.cmd ? h('span', { className: 'sg-term__prompt', 'aria-hidden': 'true' }, '$ ') : null,
            t.cmd || t.text);
        }),
        p.cursor === false ? null : h('div', { className: 'sg-term__line is-cmd' },
          h('span', { className: 'sg-term__prompt', 'aria-hidden': 'true' }, '$ '),
          h('span', { className: 'sg-term__cursor', 'aria-hidden': 'true' }))));
  }

  /* Timeline ---------------------------------------------------------- */
  function Timeline(p) {
    var items = p.items || [];
    return h('ol', { className: cx('sg-tl', p.className) }, items.map(function (it, i) {
      return h('li', { key: i, className: cx('sg-tl__item', it.current && 'is-current') },
        h('span', { className: 'sg-tl__period' }, it.period),
        h('span', { className: 'sg-tl__node', 'aria-hidden': 'true' }),
        h('div', null,
          h('h3', { className: 'sg-tl__role' }, it.role, it.current ? h(Tag, { tone: 'signal', live: true }, 'Now') : null),
          it.org ? h('p', { className: 'sg-tl__org' }, it.org) : null,
          it.summary ? h('p', { className: 'sg-tl__summary' }, it.summary) : null));
    }));
  }

  /* ContactBand ------------------------------------------------------- */
  function ContactBand(p) {
    var links = p.links || [];
    return h('section', { className: cx('sg-contact', p.className) },
      h('p', { className: 'sg-contact__eyebrow' }, p.eyebrow || 'Contact'),
      h('h2', { className: 'sg-contact__title' }, p.title, p.accent ? h(React.Fragment, null, ' ', h('em', null, p.accent)) : null),
      p.lede ? h('p', { className: 'sg-contact__lede' }, p.lede) : null,
      h('div', { className: 'sg-contact__row' },
        p.email ? h('a', { className: 'sg-contact__email', href: 'mailto:' + p.email }, p.email, ' \u2192') : h('span', null),
        links.length ? h('ul', { className: 'sg-contact__links' }, links.map(function (l, i) {
          return h('li', { key: i }, h('a', { href: l.href || '#' }, l.label, ' \u2197'));
        })) : null));
  }

export { Button, Tag, NavBar, Hero, AgentGraph, SectionHeader, Metric, ProjectCard, AgentTrace, Terminal, Timeline, ContactBand };
