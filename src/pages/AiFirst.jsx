import { aiFirstPage } from '../content/pages/ai-first';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';

/**
 * `/ai-first` — ported 2026-10-13 from the 2025 frontend's `app/ai_first/`
 * and the ten components under `components/AIFirst/`. Copy is **verbatim**.
 *
 * ## What the port left behind
 *
 * - **`AIFHeroSection` is dead** in the source: imported, but its render line
 *   is commented out. `NewAIFHero` is the live one and is what this uses.
 * - **Every call to action was commented out.** The page therefore ends on
 *   its brand essence rather than a CTA — that is the original's shape, not
 *   an omission here. There is nothing to link to that was not invented.
 * - The source's "Case Study available" label appears on all four
 *   AI-in-Action cards but **links nowhere**, so it is rendered as a plain
 *   label rather than as a link to a page that does not exist.
 *
 * ## Structure
 *
 * Nine of the ten sections share a shape — heading, subtitle, a grid of
 * items, then one highlighted card — so they are driven by the two small
 * components below rather than written out nine times. Bands alternate
 * white/smoke, with the two pull-quote moments on ink.
 */
/*
 * ⚠️ **Two of these three are the home page's hero backdrops, reused**, and
 * the third is the MindGENIE character already used on the home page.
 *
 * They were chosen because they are the only bespoke Mindlogicx artwork in the
 * project that is actually about this page's subject — `security-by-design` is
 * an engineer at a build/test/release board, `built-for-trust` is a compliance
 * review. Everything else in `public/assets/images` is a product shot, a
 * portrait, or already carrying another page.
 *
 * The cost is repetition across the site. **Dedicated artwork for this page
 * would be better**; swapping it in is three paths.
 *
 * `ai-native.webp` is deliberately *not* used here even though it suits a
 * MindGENIE band — `/knowledge-engineering` already takes it, and using it on
 * both would put the same photograph on two sibling pages.
 */
const ART = {
  /* The "Powered by MindGENIE" lockup (486×240, transparent), 2026-10-16 —
     it was the square character. Landscape, so `.ls-aif__genie` widened with
     it. Same ceiling as on the home page: the file is 486px wide, so beyond
     ~486 CSS px it is upscaling. */
  mindgenie: '/assets/images/mindgenie.png',
  labs: '/assets/images/hero_background/security-by-design.webp',
  why: '/assets/images/hero_background/built-for-trust.webp',
};

function ItemGrid({ items, columns = 3 }) {
  return (
    <ul className={`ls-grid ls-grid--${columns} ls-aif__grid`}>
      {items.map((item, i) => (
        <li key={item.title ?? item.label}>
          <Reveal className="ls-aif__card" effect="fadeInUp" delay={(i % columns) * 70}>
            {item.label && <span className="ls-aif__label">{item.label}</span>}
            {item.title && <h3 className="ls-aif__cardtitle">{item.title}</h3>}
            {item.text && <p className="ls-aif__cardtext">{item.text}</p>}
            {item.description && <p className="ls-aif__carddesc">{item.description}</p>}

            {/* `ai-in-action` carries outcomes instead of a description. */}
            {item.outcomes && (
              <ul className="ls-bullets ls-aif__outcomes">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            )}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** The single highlighted panel most sections close on. */
function Highlight({ card }) {
  if (!card) return null;
  return (
    <Reveal className="ls-callout ls-mt-md" effect="fadeInUp">
      {card.title && <h3 className="ls-callout__title">{card.title}</h3>}
      {card.description && <p className="ls-callout__desc">{card.description}</p>}
      {card.text && <p className="ls-callout__desc">{card.text}</p>}
      {card.quote && <p className="ls-callout__quote">{card.quote}</p>}
      {/* `statement` was never rendered, so "This is how Mindlogicx builds —
          today." silently vanished from The AI-First Promise. Added
          2026-10-16. */}
      {card.statement && <p className="ls-callout__statement">{card.statement}</p>}
      {card.highlight && <p className="ls-aif__highlight">{card.highlight}</p>}
    </Reveal>
  );
}

export default function AiFirst() {
  const s = Object.fromEntries(aiFirstPage.sections.map((x) => [x.id, x]));

  return (
    <>
      <PageHero title={aiFirstPage.title} tone="plain" />

      {/* Manifesto */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={s['ai-first-manifesto'].heading} lead={s['ai-first-manifesto'].description} />
          <Reveal className="ls-callout ls-mt-md" effect="fadeInUp">
            {s['ai-first-manifesto'].cardText.map((line) => (
              <p className="ls-callout__desc" key={line.slice(0, 40)}>
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The AI-First Imperative */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={s['ai-first-imperative'].heading} lead={s['ai-first-imperative'].subtitle} />
          <ItemGrid items={s['ai-first-imperative'].items} />
          <Highlight card={s['ai-first-imperative'].ctaBanner} />
        </div>
      </section>

      {/* MindGENIE */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            media={
              <img className="ls-aif__genie" src={ART.mindgenie} alt="" aria-hidden="true" loading="lazy" />
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{s.mindgenie.heading}</h2>
            {s.mindgenie.paragraphs.map((p) => (
              <p className="ls-body ls-aif__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
          <Highlight card={s.mindgenie.trustCard} />

          <h3 className="ls-h3 ls-mt-lg">{s.mindgenie.featuresTitle}</h3>
          <ItemGrid items={s.mindgenie.features} />
        </div>
      </section>

      {/* AI Labs */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--3x2">
                <img src={ART.labs} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{s['ai-labs'].heading}</h2>
            <p className="ls-lead">{s['ai-labs'].intro}</p>
          </FeatureLayout>
          <ItemGrid items={s['ai-labs'].capabilities} />
          <Highlight card={s['ai-labs'].callout} />
        </div>
      </section>

      {/* AI Labs Mandate */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={s['ai-labs-mandate'].heading} lead={s['ai-labs-mandate'].subtitle} />
          <ItemGrid items={s['ai-labs-mandate'].items} />
          <Highlight card={s['ai-labs-mandate'].summaryCard} />
        </div>
      </section>

      {/* Architecture principles */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={s['architecture-principles'].heading} lead={s['architecture-principles'].subtitle} />
          <ItemGrid items={s['architecture-principles'].items} />
          <Highlight card={s['architecture-principles'].futureCard} />
        </div>
      </section>

      {/* The dark banner that closes the principles */}
      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <ul className="ls-grid ls-grid--3 ls-aif__grid">
            {s['architecture-principles'].darkBanner.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-aif__darkcard" effect="fadeInUp" delay={i * 70}>
                  <h3 className="ls-aif__darktitle">{item.title}</h3>
                  <p className="ls-aif__darkdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI in Action */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={s['ai-in-action'].heading} lead={s['ai-in-action'].subtitle} />
          <ItemGrid items={s['ai-in-action'].items} columns={2} />
          {/* A label, not a link: the source anchors it nowhere. */}
          <Reveal className="ls-aif__note" effect="fadeInUp">
            {s['ai-in-action'].linkLabel}
          </Reveal>
          <Highlight card={s['ai-in-action'].ctaBanner} />
        </div>
      </section>

      {/* Why AI-First matters */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout
            media={
              <span className="ls-media ls-media--3x2">
                <img src={ART.why} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{s['why-ai-first'].heading}</h2>
            <p className="ls-lead">{s['why-ai-first'].subtitle}</p>
          </FeatureLayout>
          <ItemGrid items={s['why-ai-first'].items} />
          <Highlight card={s['why-ai-first'].partnerCard} />
        </div>
      </section>

      {/* The commitment quote */}
      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal effect="fadeInUp">
            <span className="ls-eyebrow ls-aif__commitlabel">{s['why-ai-first'].commitment.label}</span>
            <h2 className="ls-h2 ls-aif__commitheading">{s['why-ai-first'].commitment.heading}</h2>
            <blockquote className="ls-bigquote ls-mt-md">{s['why-ai-first'].commitment.quote}</blockquote>
          </Reveal>
        </div>
      </section>

      {/* The AI-First Promise */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={s['ai-first-promise'].heading} lead={s['ai-first-promise'].subtitle} />
          <ItemGrid items={s['ai-first-promise'].items} />
          <Highlight card={s['ai-first-promise'].footer} />
        </div>
      </section>

      {/* Brand essence — the page's closing note. It has no heading because
          the source's wordmark block above it is commented out. */}
      {/*
        The brand-essence band — four descriptors and the tagline "The Future
        is Orchestrated" — was removed 2026-10-16 at the client's request. It
        is intact in the content module as `brand-essence`.
      */}
    </>
  );
}
