import { intellitutePage as it } from '../content/pages/intellitute';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/intellitute` — built 2026-10-13 from https://mindlogicx.ae/intellitute/.
 * Copy is **verbatim**, including the source's own grammar slip (see below).
 * Laid out in this site's pattern, not the UAE site's.
 *
 * ## The page title is the banner's, not the `h1`'s
 *
 * The source's `h1` is literally **"One Ecosystem"** — the product name
 * appears only in the banner above it. Here "IntelliTUTE" is the page title
 * and "One Ecosystem" opens the body, so the page is identifiable from the
 * tab, a search result and a link preview.
 *
 * ## ⚠️ The images are hotlinked from mindlogicx.ae
 *
 * All five still point at `https://mindlogicx.ae/latest_images/...`. Nothing
 * was downloaded. Two consequences worth a decision:
 *
 * - **The ecosystem diagram is a 2.85 MB PNG.** Every visitor pulls it from
 *   the UAE host on every view. Localised and converted to WebP it would be
 *   roughly 100 KB — the same treatment the club portraits got.
 * - The page breaks if that host moves, renames or blocks hotlinking.
 *
 * ## What was deliberately not rendered
 *
 * The hero artwork on the source carries two **mock UI cards** — a "92%
 * Employability Score" with a progress bar, and "IntelliGENIE recommendation:
 * Complete the advanced project". They are decoration drawn to look like a
 * product screenshot, but on the live page they are real indexable text. A
 * fabricated score presented as a page statement is worse here than the
 * missing decoration, so they are omitted.
 *
 * ## ⚠️ For the client, before this is public
 *
 * - **The comparison panel is unsourced.** "3x Hiring Confidence", "50% Faster
 *   Onboarding", and the 40%-vs-95% bars against an unnamed "Traditional
 *   Platforms" are the source's own claims with no citation. Carried as found;
 *   competitive claims with invented-looking precision are worth a legal read.
 * - **"Candidates set goals, chooses a role pathway, and establishes a
 *   baseline."** — the source's subject/verb disagreement, kept verbatim.
 * - **IntelliGENIE vs MindGENIE®.** This page says IntelliGENIE; the
 *   Knowledge Engineering deck says MindGENIE®. If they are the same product,
 *   one name is wrong.
 * - **No ® or ™** on IntelliTUTE, IntelliEXAMS or IntelliGENIE here, while
 *   IntelliWORK® carries one elsewhere on this site.
 * - **The closing CTA had no button.** The source says "Talk to Mindlogicx"
 *   and then offers no link, phone number or form. The button below is an
 *   **addition** — it points at this site's own `/contact-us`. Remove it if
 *   the dead end was deliberate.
 */
export default function IntelliTute() {
  const s = Object.fromEntries(it.sections.map((x) => [x.id, x]));
  const hero = s.hero;
  const pillars = s['three-pillars'];
  const why = s['why-intellitute'];
  const how = s['how-it-works'];
  const stakeholders = s.stakeholders;
  const ai = s['powered-by-intelligenie'];
  const caps = s['key-capabilities'];
  const closing = s['closing-cta'];

  return (
    <>
      <PageHero title={it.banner.pageTitle} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img src={hero.visual.image} alt={hero.visual.imageAlt} loading="lazy" />
              </span>
            }
          >
            <span className="ls-eyebrow">{hero.badge}</span>
            <h2 className="ls-h2">{hero.heading}</h2>

            {/* "Academy . Assessment . Career" — the source separates these
                with full stops; rendered as a sequence instead. */}
            <ul className="ls-prod__breadcrumbs">
              {hero.breadcrumbs.map((crumb) => (
                <li key={crumb}>{crumb.replace(/\s*\.\s*$/, '')}</li>
              ))}
            </ul>

            {hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      {/* Three pillars. The source gives this band no heading of its own. */}
      <section className="ls-section ls-section--smoke" id={pillars.domId ?? undefined}>
        <div className="ls-container">
          <ul className="ls-grid ls-grid--3">
            {pillars.items.map((item, i) => (
              <li key={item.key}>
                <Reveal className="ls-prod__pillar" effect="fadeInUp" delay={(i % 3) * 70}>
                  <span className="ls-prod__pillarsub">{item.subtitle}</span>
                  <h2 className="ls-prod__pillartitle">{item.title}</h2>
                  <p className="ls-prod__pillardesc">{item.description}</p>
                  <ul className="ls-bullets">
                    {item.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={why.heading} lead={why.body[0]} />

          <div className="ls-feature ls-mt-md">
            <Reveal className="ls-feature__body" effect="fadeInLeft">
              <ul className="ls-grid ls-grid--2 ls-prod__whygrid">
                {why.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="ls-prod__captitle">{item.title}</h3>
                    <p className="ls-prod__capdesc">{item.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ⚠️ Unsourced — see the note at the top of this file. */}
            <Reveal className="ls-prod__stats" effect="fadeInRight">
              <h3 className="ls-prod__statstitle">{why.statsCard.heading}</h3>

              <div>
                {why.statsCard.comparisonBars.map((bar, i) => (
                  <div className="ls-prod__bar" key={bar.label}>
                    <div className="ls-prod__barhead">
                      <span className="ls-prod__barlabel">{bar.label}</span>
                      <span className="ls-prod__barvalue">{bar.value}</span>
                    </div>
                    {/* The widths are the source's own styling, not measured
                        data, so the bars are decoration: the labels beside
                        them carry the meaning and are what gets announced. */}
                    <div className="ls-prod__bartrack" aria-hidden="true">
                      <div
                        className={`ls-prod__barfill${i === 0 ? ' ls-prod__barfill--muted' : ''}`}
                        style={{ width: bar.barWidth }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <ul className="ls-prod__metrics">
                {why.statsCard.metrics.map((m) => (
                  <li key={m.label}>
                    <span className="ls-prod__metricvalue">{m.value}</span>
                    <p className="ls-prod__metriclabel">{m.label}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The pipeline primitive. It renders no numbers — see `.ls-flow`. */}
      <section className="ls-section ls-section--smoke" id={how.domId ?? undefined}>
        <div className="ls-container">
          <SectionIntro title={how.heading} lead={how.subheading} />
          <ol className="ls-flow ls-mt-md">
            {how.items.map((step, i) => (
              <li key={step.title}>
                <Reveal className="ls-flow__stage" effect="fadeInUp" delay={i * 60}>
                  <h3 className="ls-flow__title">{step.title}</h3>
                  <p className="ls-prod__capdesc">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={stakeholders.domId ?? undefined}>
        <div className="ls-container">
          <SectionIntro title={stakeholders.heading} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {stakeholders.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-mediacard" effect="fadeInUp" delay={(i % 3) * 70}>
                  <span className="ls-media ls-media--4x3">
                    <img src={item.image} alt="" aria-hidden="true" loading="lazy" />
                  </span>
                  <span className="ls-prod__shbody">
                    <h3 className="ls-prod__shtitle">{item.title}</h3>
                    <span className="ls-prod__shdesc">{item.benefit}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The source inverts these two — its eyebrow is the `h2` and its real
          heading an `h3`. Corrected here; the words are unchanged. */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro eyebrow={ai.eyebrow} title={ai.heading} />
          <ul className="ls-bullets ls-mt-md">
            {ai.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={caps.heading} lead={caps.subheading} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {caps.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <span className="ls-prod__cappillar">{item.pillar}</span>
                  <h3 className="ls-prod__captitle">{item.title}</h3>
                  <p className="ls-prod__capdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <h2 className="ls-h2 ls-ke__closeheading">{closing.heading}</h2>
            {closing.body.map((p) => (
              <p className="ls-ke__closebody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              {/* ⚠️ Added — the source has no button here. See the top note. */}
              <Pill variant="light" to="/contact-us" arrow>
                Contact Us
              </Pill>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
