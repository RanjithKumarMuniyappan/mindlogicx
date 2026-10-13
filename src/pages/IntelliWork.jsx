import { intelliworkPage as iw } from '../content/pages/intelliwork';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/intelliwork` — built 2026-10-13 from https://mindlogicx.ae/intelliwork/.
 * Copy is **verbatim**; the layout is this site's pattern, not the UAE site's.
 *
 * ## The page title is the banner's, not the `h1`'s
 *
 * The source's `h1` is "The Digital Workforce Intelligence"; the product name
 * only appears in the banner above it (and again in a wordmark image, so it is
 * stated three times in the first viewport). Here "IntelliWORK" is the page
 * title and the tagline opens the body.
 *
 * ## ⚠️ The photographs are borrowed from unrelated pages
 *
 * **Seven of the nine images on the source are not IntelliWORK artwork.** They
 * come from the ESG, "Our Strength", Global Compliance and AI First folders —
 * `AI_first_Banner_image.png` is that page's *banner* reused as a product
 * graphic, and the enterprise-training section is illustrated with a file
 * called `Creative marketing.png`.
 *
 * They are carried so the page is not empty, but **they are placeholders** and
 * should be replaced with real IntelliWORK artwork.
 *
 * Because of that, every one is rendered **decorative** (`alt=""`): the
 * source's alt text describes pictures that are not what is actually shown,
 * and one of them reads "Workforce transformation **in the UAE**" — wrong for
 * this site. A wrong description is worse than none, and nothing here is
 * load-bearing information.
 *
 * They are also **hotlinked** from `mindlogicx.ae` and total **~13.5 MB** of
 * unoptimised PNG. Nothing was downloaded. Localised and converted to WebP
 * they would be a fraction of that; as it stands every visitor pulls them from
 * the UAE host.
 *
 * ## What was changed, and why
 *
 * - **The `01`–`09` on the use cases are gone**, per the site-wide rule that
 *   nothing is numbered. They were ordinals on an unordered list of parallel
 *   scenarios — nothing is first or ninth about any of them.
 * - **Both CTAs point at `/contact-us`**, not the source's `/contact-us/`.
 * - **The "Compliance & Governance built in" badge is not rendered.** It was a
 *   trust badge overlaid on a photograph, claiming something unsubstantiated,
 *   and it duplicates a capability card on the same screen.
 *
 * ## ⚠️ For the client
 *
 * - **No ® anywhere on the source**, across ~20 mentions of IntelliWORK and
 *   MindGENIE — while `knowledge-engineering.js` on this site writes
 *   **IntelliWORK®** and **MindGENIE®**. One of the two is wrong.
 * - **Real duplication, not merged**: "Transform HR Cost to HR Capital" is
 *   both a journey step and a section heading; "Institutional Knowledge
 *   Processing" is a card title twice; "Training Effectiveness" is both a
 *   MindGENIE tag and an outcome.
 * - **Mixed en-GB/en-US inside single sentences** — "analyse", "visualised",
 *   "cost centre" against "organizations", "personalize". Preserved verbatim.
 * - On the source each use-case row ends in an arrow implying a link, but
 *   none is clickable and no destination exists. Rendered as plain labels.
 */
export default function IntelliWork() {
  const s = Object.fromEntries(iw.sections.map((x) => [x.id, x]));
  const banner = s['page-title-banner'];
  const hero = s.hero;
  const journey = s.journey;
  const caps = s.capabilities;
  const genie = s.mindgenie;
  const eco = s.ecosystem;
  const use = s.usecases;
  const out = s.outcomes;
  const closing = s['closing-cta'];

  /* The source writes these with a trailing slash; this site does not. */
  const route = (link) => link.replace(/\/+$/, '') || '/';

  /* Every photograph here is a borrowed placeholder — see the file note. */
  const art = (src) => (
    <span className="ls-media ls-media--4x3">
      <img src={src} alt="" aria-hidden="true" loading="lazy" />
    </span>
  );

  return (
    <>
      <PageHero title={banner.heading} tone="plain" />

      <section className="ls-section ls-section--white" id="overview">
        <div className="ls-container">
          <FeatureLayout reverse media={art(hero.image)}>
            <span className="ls-eyebrow">{hero.badge}</span>
            <h2 className="ls-h2">{hero.heading}</h2>
            <p className="ls-lead">{hero.subheading}</p>
            {hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              {hero.ctas.map((cta) => (
                <Pill key={cta.label} variant="solid" to={route(cta.link)} arrow>
                  {cta.label}
                </Pill>
              ))}
            </div>
          </FeatureLayout>
        </div>
      </section>

      {/* The pipeline primitive renders no numbers — see `.ls-flow`. */}
      <section className="ls-section ls-section--smoke" id="journey">
        <div className="ls-container">
          <SectionIntro title={journey.heading} lead={journey.body[0]} />
          <ol className="ls-flow ls-mt-md">
            {journey.steps.map((step, i) => (
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

      <section className="ls-section ls-section--white" id="capabilities">
        <div className="ls-container">
          <SectionIntro title={caps.heading} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {caps.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{item.title}</h3>
                  <p className="ls-prod__capdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id="mindgenie">
        <div className="ls-container">
          <FeatureLayout media={art(genie.image)}>
            <h2 className="ls-h2">{genie.heading}</h2>
            <p className="ls-lead">{genie.subheading}</p>
            {genie.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <ul className="ls-tagrow ls-tagrow--tight">
              {genie.tags.map((tag) => (
                <li className="ls-tagrow__tag" key={tag.label}>
                  {tag.label}
                </li>
              ))}
            </ul>
          </FeatureLayout>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{genie.highlight}</p>
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--white" id="ecosystem">
        <div className="ls-container">
          <SectionIntro title={eco.heading} lead={eco.body[0]} />
          <ul className="ls-prod__labels ls-mt-md">
            {eco.nodes.map((node, i) => (
              <li key={node.label}>
                <Reveal className="ls-prod__label" effect="fadeInUp" delay={(i % 3) * 60}>
                  {node.label}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases. The source numbers these 01–09; see the file note. */}
      <section className="ls-section ls-section--smoke" id="usecases">
        <div className="ls-container">
          <SectionIntro title={use.heading} />
          <ul className="ls-prod__labels ls-mt-md">
            {use.items.map((item, i) => (
              <li key={item.label}>
                <Reveal className="ls-prod__label" effect="fadeInUp" delay={(i % 3) * 60}>
                  {item.label}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white" id="outcomes">
        <div className="ls-container">
          <SectionIntro title={out.heading} lead={out.body[0]} />

          <div className="ls-prod__ba ls-mt-md">
            <Reveal className="ls-prod__bapanel ls-prod__bapanel--before" effect="fadeInLeft">
              <span className="ls-prod__balabel">{out.before.label}</span>
              <p className="ls-prod__batext">{out.before.text}</p>
            </Reveal>

            <Reveal className="ls-prod__bapanel ls-prod__bapanel--after" effect="fadeInRight">
              <span className="ls-prod__balabel">{out.after.label}</span>
              <ul className="ls-prod__baitems">
                {out.after.items.map((item) => (
                  <li key={item.label}>{item.label}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{out.closingStatement}</p>
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <span className="ls-eyebrow ls-ke__closelabel">{closing.brandLine}</span>
            <h2 className="ls-h2 ls-ke__closeheading">{closing.heading}</h2>
            {closing.body.map((p) => (
              <p className="ls-ke__closebody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              {closing.ctas.map((cta) => (
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
