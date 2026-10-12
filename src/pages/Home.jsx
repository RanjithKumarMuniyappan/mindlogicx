import ErrorBoundary from '../components/common/ErrorBoundary';
import Hero from '../components/home/Hero';
import WhatWeDo from '../components/home/WhatWeDo';
import Industries from '../components/home/Industries';
import Strengths from '../components/home/Strengths';
import MindGenie from '../components/home/MindGenie';
import WhyMindlogicx from '../components/home/WhyMindlogicx';
import Affiliations from '../components/home/Affiliations';

/**
 * Section order:
 *
 *   hero (full screen) → what we do → where we apply it → strengths
 *        → how we make it intelligent → why mindlogicx → affiliations
 *
 * Seven sections: a full-height carousel, the knowledge-engineering argument,
 * the sector carousel, what sets the company apart, the MindGENIE
 * intelligence layer, the credibility band, and the memberships strip.
 *
 * **There is no closing call to action.** The band that used to sit here was
 * a headline plus a "Partner With Us" button; that call to action was removed
 * throughout on 2026-10-12, and the band went with it rather than being left
 * as a headline with nothing to click. `components/home/Cta.jsx` and the
 * `cta` content are both intact — see the note on the export in `site.js`.
 *
 * Every section but the hero sits on the shared page measure (`.ls-container`,
 * `--measure`). The hero and the header are the only two that run edge to
 * edge.
 *
 * Bands alternate white and smoke so no two of the same background ever
 * touch. They are set on each component's own `<section>`, not here, so this
 * list and those classes have to be kept in step — removing a section inverts
 * every band below it. `WhatWeDo` has to be smoke — its cards are white and
 * would have nothing to separate them from a white band — and that fixes
 * everything after it: `Industries` white, `Strengths` smoke, `MindGenie`
 * ink, `WhyMindlogicx` ink, `Affiliations` white.
 *
 * `Affiliations` being light also keeps the page from ending on a third dark
 * surface — the footer is dark, so ink → ink → dark footer would have run
 * the last third of the page together.
 *
 * **Two ink bands do touch here**, which the rule above otherwise forbids.
 * They are told apart by the photograph: `WhyMindlogicx` is a full-bleed
 * picture, `MindGenie` is flat ink. That is the only thing separating them —
 * if the photograph is ever dropped, this band needs a different tone or the
 * two will run together into one very long dark stretch.
 *
 * ## Dropped from this page, all by request
 *
 * Each still has its component file and its content in `src/content/site.js`,
 * so restoring one is an import plus a line in SECTIONS — plus flipping the
 * bands below it back.
 *
 * | Section | Component | Content | Still published at |
 * |---|---|---|---|
 * | Our Leadership | `home/Leadership.jsx` | `team` | `/about` |
 * | About Mindlogicx | `home/About.jsx` | `about` | `/about` |
 * | Domains We Operate | `home/Domains.jsx` | `process` | — |
 * | Newsroom | `home/Newsroom.jsx` | `blog` | — |
 * | Our Focus | `home/Focus.jsx` | `services` | — |
 * | Our Platforms (card grid) | `home/Platforms.jsx` | `projects` |
 * | Our Platforms (split layout) | `home/PlatformsAlt.jsx` | `products` | — |
 * | Product wordmark marquee | `home/Brands.jsx` | `products` | — |
 *
 * **On the two platforms sections.** This page carried two designs for the
 * same five products so they could be compared: `Platforms.jsx` (a uniform
 * 3-up card grid inside the 1152px measure) and `PlatformsAlt.jsx` (the
 * full-bleed split layout built to the supplied comp). The card grid is the
 * one that was removed, so the comp's design is what ships. Both headings
 * read "Our Platforms", so if the wrong one went, swapping them back is one
 * import and one line.
 *
 * **Worth knowing before this ships:** the home page no longer describes the
 * company in prose anywhere, and no longer lists the domains, the newsroom or
 * the leadership. All of that still lives in `site.js`; only `/about` renders
 * any of it. The footer still links to domain and newsroom routes that
 * currently render `Placeholder`.
 *
 * There is no contact-form section: nothing is standing behind this site to
 * receive a submission, and a form that silently discards enquiries is worse
 * than no form.
 */
const SECTIONS = [
  ['Hero', Hero],
  ['WhatWeDo', WhatWeDo],
  ['Industries', Industries],
  ['Strengths', Strengths],
  ['MindGenie', MindGenie],
  ['WhyMindlogicx', WhyMindlogicx],
  ['Affiliations', Affiliations],
];

export default function Home() {
  return (
    <>
      {SECTIONS.map(([name, Section]) => (
        <ErrorBoundary key={name} name={name}>
          <Section />
        </ErrorBoundary>
      ))}
    </>
  );
}
