import { Link } from 'react-router-dom';
import { knowledgeEngineeringPage as ke } from '../content/pages/knowledge-engineering';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';
import { ArrowUpRight } from '../components/common/icons';

/**
 * `/knowledge-engineering` — built 2026-10-13 from
 * `Mindlogicx_Knowledge_Engineering_Webpage_Content_Oct2026_REVISED.docx`
 * (the client's own copy deck, v4.0). Copy is **verbatim**.
 *
 * ## The document's art direction was deliberately ignored
 *
 * The deck interleaves "Website Content" with "Visual Design Direction"
 * blocks describing gradients, glows, isometric diagrams and animated
 * transitions. Only the content was taken; the page is built from this
 * site's existing pattern, as instructed. None of the direction text is
 * rendered anywhere — it is not even in the content module.
 *
 * ## Link destinations, and where they differ from the deck
 *
 * The deck names routes that do not exist on this site. They are mapped to
 * the real ones rather than shipped as dead links; the deck's own paths are
 * preserved in the content module so the difference is auditable.
 *
 * | deck | this site |
 * |---|---|
 * | `/education/` | `/ed-tech` |
 * | `/healthcare/` | `/health-tech` |
 * | `/legal/` | `/voice-of-law` |
 * | `/finance/` | `/mxpay` |
 * | `/contact-us/` | `/contact-us` |
 *
 * ⚠️ `/contact-us` **does not exist yet** — it is still the next page to
 * build. Until it does, both "Talk to Our Experts" and "Connect with Our
 * Experts" land on the placeholder.
 *
 * ## The framework diagram
 *
 * Section 5 exists in the deck **only as an embedded PNG**; its five stage
 * labels were transcribed from that image and are flagged
 * `transcribedFromImage: true`. They are rendered as a typographic pipeline
 * rather than as a picture — which keeps them real text, but **they need
 * proofreading against the original artwork**.
 */

/*
 * ⚠️ **These three are the home page's hero backdrops, reused.**
 *
 * They were chosen because they are the only bespoke Mindlogicx artwork in the
 * project that is actually about this page's subject — `knowledge-engineering`
 * is a developer at a workflow diagram, `ai-native` is the MindGENIE character
 * at a live assessment, `one-world` is the global-operations board. Everything
 * else in `public/assets/images` is either a product shot, a portrait, or
 * already carrying another page.
 *
 * The cost is that a visitor who scrolls the home hero will meet all three
 * again here. **Dedicated artwork for this page would be better**; swapping it
 * in is three paths.
 */
const ART = {
  hero: '/assets/images/hero_background/knowledge-engineering.webp',
  mindgenie: '/assets/images/hero_background/ai-native.webp',
  why: '/assets/images/hero_background/one-world.webp',
};

/** The deck's routes, mapped to this site's. See the table above. */
const ROUTES = {
  '/education/': '/ed-tech',
  '/healthcare/': '/health-tech',
  '/legal/': '/voice-of-law',
  '/finance/': '/mxpay',
  '/contact-us/': '/contact-us',
};
const route = (deckPath) => ROUTES[deckPath] ?? deckPath;

function ItemGrid({ items, columns = 3 }) {
  return (
    <ul className={`ls-grid ls-grid--${columns} ls-ke__grid`}>
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal className="ls-ke__card" effect="fadeInUp" delay={(i % columns) * 70}>
            <h3 className="ls-ke__cardtitle">{item.title}</h3>
            <p className="ls-ke__carddesc">{item.description}</p>
            {item.cta && (
              <Link className="ls-ke__cardlink" to={route(item.cta.link)}>
                {item.cta.label}
                <ArrowUpRight size={14} />
              </Link>
            )}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default function KnowledgeEngineering() {
  const s = Object.fromEntries(ke.sections.map((x) => [x.id, x]));
  const hero = s.hero;
  const capabilities = s['our-knowledge-engineering-capabilities'];
  const framework = s['our-knowledge-engineering-framework'];
  const mindgenie = s['mindgenie-agentic-ai-intelligence-layer'];
  const industries = s['knowledge-engineering-across-industries'];
  const why = s['why-mindlogicx'];
  const understanding = s['understanding-knowledge-engineering'];

  return (
    <>
      <PageHero title={hero.heading} tone="plain" />

      {/* Hero copy beside the page's own photograph. The title above carries
          the heading, so this opens on the eyebrow and the supporting lines. */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--3x2">
                <img src={ART.hero} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <span className="ls-eyebrow">{hero.eyebrow}</span>
            <p className="ls-lead ls-ke__sub">{hero.subheading}</p>
            {hero.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            <div className="ls-ke__ctas">
              {hero.ctas.map((cta, i) => (
                <Pill
                  key={cta.label}
                  variant={i === 0 ? 'solid' : 'ghost'}
                  to={cta.link.startsWith('#') ? undefined : route(cta.link)}
                  href={cta.link.startsWith('#') ? cta.link : undefined}
                  arrow
                >
                  {cta.label}
                </Pill>
              ))}
            </div>
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro eyebrow={understanding.sectionTitle} title={understanding.heading} />
          <div className="ls-ke__prose">
            {understanding.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The hero's first CTA scrolls here. */}
      <section className="ls-section ls-section--white" id={capabilities.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={capabilities.sectionTitle}
            title={capabilities.heading}
            lead={capabilities.body[0]}
          />
          <ItemGrid items={capabilities.items} />
          <Reveal className="ls-callout ls-mt-md" effect="fadeInUp">
            <p className="ls-callout__desc">{capabilities.closingStatement}</p>
          </Reveal>
        </div>
      </section>

      {/*
        The framework. Rendered as a typographic pipeline rather than a
        picture: in the deck it exists only as a PNG, and keeping the stages
        as real text means they are searchable, translatable and legible to a
        screen reader. See the note at the top about proofreading them.
      */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro
            eyebrow={framework.sectionTitle}
            title={framework.heading}
            lead={framework.body[0]}
          />

          <ol className="ls-flow">
            {framework.diagram.stages.map((stage, i) => (
              <li key={stage.title}>
                <Reveal className="ls-flow__stage" effect="fadeInUp" delay={i * 60}>
                  <h3 className="ls-flow__title">{stage.title}</h3>
                  <ul className="ls-flow__items">
                    {stage.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="ls-flow__caption" effect="fadeInUp">
            {framework.diagram.caption}
          </Reveal>

          <p className="ls-body ls-ke__para ls-mt-md">{framework.supportingContent}</p>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            media={
              <span className="ls-media ls-media--3x2">
                <img src={ART.mindgenie} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <span className="ls-eyebrow">{mindgenie.sectionTitle}</span>
            <h2 className="ls-h2 ls-h2--sm">{mindgenie.heading}</h2>
            {mindgenie.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>

          <h3 className="ls-h3 ls-mt-lg">{mindgenie.itemsHeading}</h3>
          <ItemGrid items={mindgenie.items} />

          <Reveal className="ls-callout ls-mt-md" effect="fadeInUp">
            <h3 className="ls-callout__title">{mindgenie.aiPhilosophyLabel}</h3>
            <p className="ls-callout__desc">{mindgenie.aiPhilosophy}</p>
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro
            eyebrow={industries.sectionTitle}
            title={industries.heading}
            lead={industries.body[0]}
          />
          <ItemGrid items={industries.items} columns={4} />
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--3x2">
                <img src={ART.why} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <span className="ls-eyebrow">{why.sectionTitle}</span>
            <h2 className="ls-h2 ls-h2--sm">{why.heading}</h2>
            {why.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
          <ItemGrid items={why.items} />
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <span className="ls-eyebrow ls-ke__closelabel">{why.closingCta.label}</span>
            <h2 className="ls-h2 ls-ke__closeheading">{why.closingCta.heading}</h2>
            <p className="ls-ke__closebody">{why.closingCta.body}</p>
            <div className="ls-ke__ctas">
              {why.closingCta.ctas.map((cta) => (
                <Pill key={cta.label} variant="light" to={route(cta.link)} arrow>
                  {cta.label}
                </Pill>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
