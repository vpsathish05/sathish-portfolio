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
  function diamond(x, y, r) { return x + ',' + (y - r) + ' ' + (x + r) + ',' + y + ' ' + x + ',' + (y + r) + ' ' + (x - r) + ',' + y; }
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
      kids.push(h('polygon', { key: 's' + i, className: cx('sat', hot.indexOf(i) >= 0 && 'hot'), points: diamond(s[0], s[1], 10) }));
      kids.push(h('text', { key: 't' + i, className: 'label', x: s[0] + s[3], y: s[1] + s[4], textAnchor: s[2] }, labels[i] || ''));
    });
    kids.push(h('polygon', { key: 'halo', className: 'halo', points: diamond(200, 200, 48) }));
    kids.push(h('polygon', { key: 'core', className: 'core', points: diamond(200, 200, 48) }));
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

  /* CapabilityGrid ---------------------------------------------------- */
  function CapabilityGrid(p) {
    var items = p.items || [];
    return h('div', { className: cx('sg-cap', p.className), style: p.columns ? { '--cols': p.columns } : undefined }, items.map(function (it, i) {
      return h('article', { key: i, className: 'sg-cap__cell' },
        h('div', { className: 'sg-cap__head' },
          h('span', { className: 'sg-cap__mark', 'aria-hidden': 'true' }),
          h('h3', { className: 'sg-cap__title' }, it.title),
          h('span', { className: 'sg-cap__code' }, it.code || pad(i + 1))),
        it.summary ? h('p', { className: 'sg-cap__summary' }, it.summary) : null,
        (it.points && it.points.length) ? h('ul', { className: 'sg-cap__list' }, it.points.map(function (x, j) { return h('li', { key: j }, x); })) : null);
    }));
  }

  /* ArchitectureStack ------------------------------------------------- */
  function ArchitectureStack(p) {
    var layers = p.layers || [];
    return h('figure', { className: cx('sg-arch', p.rail && 'has-rail', p.className) },
      (p.title || p.meta) ? h('figcaption', { className: 'sg-arch__cap' }, h('span', { className: 'sg-arch__title' }, p.title), h('span', null, p.meta)) : null,
      h('div', { className: 'sg-arch__layers' }, layers.map(function (l, i) {
        return h('div', { key: i, className: cx('sg-arch__layer', l.tone && 'is-' + l.tone) },
          h('span', { className: 'sg-arch__name' }, l.name),
          h('div', { className: 'sg-arch__items' }, (l.items || []).map(function (t, j) { return h(Tag, { key: j, tone: l.tone === 'current' ? 'current' : 'neutral' }, t); })));
      })),
      p.rail ? h('div', { className: 'sg-arch__rail' }, p.rail) : null);
  }

  /* ProcessSteps ------------------------------------------------------ */
  function ProcessSteps(p) {
    var steps = p.steps || [];
    return h('ol', { className: cx('sg-steps', p.className), style: { '--n': steps.length || 1 } }, steps.map(function (s, i) {
      return h('li', { key: i, className: cx('sg-steps__item', i === p.active && 'is-active') },
        h('span', { className: 'sg-steps__node', 'aria-hidden': 'true' }),
        h('span', { className: 'sg-steps__num' }, pad(i + 1)),
        h('h3', { className: 'sg-steps__title' }, s.title),
        s.summary ? h('p', { className: 'sg-steps__summary' }, s.summary) : null,
        s.output ? h('p', { className: 'sg-steps__out' }, h('span', { 'aria-hidden': 'true' }, '\u2192 '), s.output) : null);
    }));
  }

  /* StackMatrix ------------------------------------------------------- */
  var LEVEL = { daily: 'Daily', proficient: 'Proficient', familiar: 'Familiar' };
  function Level(lv) { return h('span', { className: 'sg-lvl sg-lvl--' + lv, 'aria-hidden': 'true' }); }
  function StackMatrix(p) {
    var groups = p.groups || [];
    return h('div', { className: cx('sg-stack', p.className) },
      p.legend === false ? null : h('div', { className: 'sg-stack__legend' },
        Object.keys(LEVEL).map(function (k) { return h('span', { key: k, className: 'sg-stack__key' }, Level(k), LEVEL[k]); })),
      groups.map(function (g, i) {
        return h('div', { key: i, className: 'sg-stack__row' },
          h('span', { className: 'sg-stack__label' }, g.label),
          h('ul', { className: 'sg-stack__items' }, (g.items || []).map(function (it, j) {
            var t = typeof it === 'string' ? { name: it, level: 'proficient' } : it;
            var lv = LEVEL[t.level] ? t.level : 'proficient';
            return h('li', { key: j, className: 'sg-stack__item' }, Level(lv), t.name, h('span', { className: 'sg-sr' }, ' (' + LEVEL[lv] + ')'));
          })));
      }));
  }

  /* CredentialList ---------------------------------------------------- */
  var CRED = { cert: ['Certification', 'current'], degree: ['Education', 'neutral'], award: ['Award', 'signal'], membership: ['Membership', 'neutral'] };
  function CredentialList(p) {
    var items = p.items || [];
    return h('ul', { className: cx('sg-cred', p.className) }, items.map(function (c, i) {
      var k = CRED[c.kind] || [c.kind || 'Credential', 'neutral'];
      return h('li', { key: i, className: 'sg-cred__item' },
        h('span', null, h(Tag, { tone: k[1], dot: true }, k[0])),
        h('div', null, h('p', { className: 'sg-cred__title' }, c.title), c.issuer ? h('p', { className: 'sg-cred__issuer' }, c.issuer) : null),
        h('div', { className: 'sg-cred__meta' }, c.year ? h('span', null, c.year) : null,
          c.href ? h('a', { className: 'sg-cred__verify', href: c.href }, 'Verify \u2197') : null));
    }));
  }

  /* WritingList ------------------------------------------------------- */
  function WritingList(p) {
    var items = p.items || [];
    return h('ul', { className: cx('sg-writing', p.className) }, items.map(function (w, i) {
      return h('li', { key: i, className: 'sg-writing__item' },
        h('a', { className: 'sg-writing__link', href: w.href || '#' },
          h('span', { className: 'sg-writing__type' }, w.type || 'Article'),
          h('span', null, h('span', { className: 'sg-writing__title' }, w.title), w.venue ? h('span', { className: 'sg-writing__venue' }, w.venue) : null),
          h('span', { className: 'sg-writing__date' }, w.date || '', h('span', { className: 'sg-writing__go', 'aria-hidden': 'true' }, ' \u2197'))));
    }));
  }

  /* Testimonial ------------------------------------------------------- */
  function Testimonial(p) {
    return h('figure', { className: cx('sg-quote', p.className) },
      h('span', { className: 'sg-quote__mark', 'aria-hidden': 'true' }, '\u201C'),
      h('blockquote', { className: 'sg-quote__text' }, h('p', null, p.quote)),
      h('figcaption', { className: 'sg-quote__by' },
        h('span', { className: 'sg-quote__dia', 'aria-hidden': 'true' }),
        h('span', null, h('span', { className: 'sg-quote__name' }, p.name), p.role ? h('span', { className: 'sg-quote__role' }, p.role) : null),
        p.source ? h(Tag, { className: 'sg-quote__src' }, p.source) : null));
  }

  /* ServiceCard ------------------------------------------------------- */
  function ServiceCard(p) {
    var inc = p.includes || [];
    return h('article', { className: cx('sg-svc', p.featured && 'sg-svc--featured', p.className) },
      h('div', { className: 'sg-svc__top' }, h('span', { className: 'sg-svc__index' }, p.index || ''), p.duration ? h(Tag, { tone: p.featured ? 'signal' : 'neutral' }, p.duration) : null),
      h('h3', { className: 'sg-svc__title' }, p.title),
      p.summary ? h('p', { className: 'sg-svc__summary' }, p.summary) : null,
      inc.length ? h('ul', { className: 'sg-svc__list' }, inc.map(function (x, i) { return h('li', { key: i }, x); })) : null,
      p.cta ? h('div', { className: 'sg-svc__cta' }, h(Button, { href: p.cta.href || '#', variant: p.featured ? 'primary' : 'secondary', arrow: true }, p.cta.label)) : null);
  }

  /* Resume ------------------------------------------------------------ */
  function ResumeHeader(p) {
    var links = p.links || [];
    return h('header', { className: cx('sg-rh', p.className) },
      h('p', { className: 'sg-rh__title' }, p.title),
      h('h1', { className: 'sg-rh__name' }, p.name),
      h('p', { className: 'sg-rh__contact' }, [p.location].concat(links.map(function (l) { return l.href ? h('a', { href: l.href }, l.label) : l.label; })).filter(Boolean).map(function (x, i, a) {
        return h(React.Fragment, { key: i }, x, i < a.length - 1 ? h('span', { className: 'sg-rh__sep', 'aria-hidden': 'true' }, ' \u25c6 ') : null);
      })),
      p.statement ? h('p', { className: 'sg-rh__statement' }, p.statement) : null);
  }
  function ResumeSection(p) {
    return h('section', { className: cx('sg-rs', p.className) }, h('h2', { className: 'sg-rs__title' }, p.title), h('div', { className: 'sg-rs__body' }, p.children));
  }
  function ResumeRole(p) {
    var b = p.bullets || [];
    return h('div', { className: cx('sg-rr', p.className) },
      h('div', { className: 'sg-rr__head' },
        h('p', { className: 'sg-rr__role' }, p.role, p.org ? h('span', { className: 'sg-rr__org' }, ' \u00b7 ' + p.org) : null),
        h('span', { className: 'sg-rr__period' }, [p.location, p.period].filter(Boolean).join(' \u00b7 '))),
      p.summary ? h('p', { className: 'sg-rr__summary' }, p.summary) : null,
      b.length ? h('ul', { className: 'sg-rr__bullets' }, b.map(function (x, i) { return h('li', { key: i }, x); })) : null);
  }

export { Button, Tag, NavBar, Hero, SectionHeader, Metric, ProjectCard, AgentTrace, Terminal, Timeline, ContactBand, AgentGraph, CapabilityGrid, ArchitectureStack, ProcessSteps, StackMatrix, CredentialList, WritingList, Testimonial, ServiceCard, ResumeHeader, ResumeSection, ResumeRole };
