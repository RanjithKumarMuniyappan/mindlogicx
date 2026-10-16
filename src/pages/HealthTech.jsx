import { healthTechSolutionsPage as ht } from '../content/pages/health-tech-solutions';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/health-tech` — **rebuilt 2026-10-15** from the client's own deck
 * (`HealthTechSolutions.html`). Copy is verbatim.
 *
 * ## This replaced the page entirely
 *
 * What was here was ported from the 2025 frontend and was a stub: four
 * MasterHealthPro / ForHim.ForHer product cards and a CTA, with the product
 * names only visible as pixels inside logos. **None of that copy survives.**
 * `content/pages/health-tech.js` still holds it, unrendered, along with
 * everything flagged about it — the "Mhpro Clinic" card that described
 * ForHim.ForHer, the unnamed accreditor, the four spellings of the product.
 * The four old logo files are still in `public/` and are no longer used.
 *
 * ## ⚠️ The hedging in this copy is load-bearing
 *
 * The deck closes with an instruction from its author: *"AI capabilities,
 * regulatory certifications, prescription automation and platform
 * availability should not be advertised as established facts until
 * validated."* It asks that the page position Mindlogicx as a HealthTech SaaS
 * innovator, **not as a hospital, clinic or medical-treatment provider**.
 *
 * The copy is written to match — "is developing", "aims to", "is being
 * designed", "envisioned", "proposed", "subject to medical validation and
 * professional judgement", and plainly *"Our healthcare SaaS platform is
 * currently under development."*
 *
 * **Every one of those qualifiers is doing legal work on a page about medical
 * care.** Tightening them into the present tense would turn a description of
 * an unbuilt platform into a claim about a live medical service. Nothing here
 * paraphrases them.
 *
 * ## ⚠️ The images may not be Mindlogicx's to use
 *
 * Their alt text in the deck names other companies' products — "Helios Med |
 * AI Health Assistant" and "Tjänster – VIV-IQ" (Swedish) — which suggests
 * they came from third-party marketing sites. The pictures themselves are
 * generic clinical stock with nothing Mindlogicx-specific in them.
 * **Licensing needs confirming before this is public.**
 *
 * None of that alt text is used: none of it describes the picture it was
 * attached to. The images illustrate rather than inform, so they are
 * decorative here and the headings beside them carry the meaning.
 *
 * ## What was changed from the deck
 *
 * - **The section numbers are gone.** The deck heads its sections "1.", "2."
 *   … "7."; this site removed index numbering everywhere on 2026-10-12. The
 *   stages are read in order anyway. `number` is kept in the content module.
 *   The same applies to the care journey's "Step 1" … "Step 5" labels.
 * - **"Partner With Us" is not rendered.** The deck lists it as the hero's
 *   second CTA, but that call to action was removed site-wide on 2026-10-12
 *   at the client's request. It is recorded in the content module.
 * - **The two closing CTAs had labels but no destinations.** "Connect With
 *   Our HealthTech Team" goes to `/contact-us`; "Explore Mindlogicx
 *   Solutions" to `/knowledge-engineering`, the closest thing to a solutions
 *   overview on this site. Both are this project's choices, not the deck's.
 * - **The deck's last two headed blocks are not on the page.** "Recommended
 *   webpage presentation" and "SEO recommendations" are instructions to
 *   whoever builds this, not words for the reader — the same call made for
 *   the Knowledge Engineering deck's "Visual Design Direction" blocks. The
 *   layout advice was followed where it agreed with this site's pattern; the
 *   title and description went into `seo`.
 *
 * ⚠️ The deck suggests the URL `/healthcare-solutions/`. The route stays
 * `/health-tech` because Technology → Healthcare points there; changing it
 * means changing the navigation too.
 */
export default function HealthTech() {
  const s = Object.fromEntries(ht.sections.map((x) => [x.id, x]));
  const vision = s['healthcare-vision'];
  const domains = s['specialised-domains'];
  const caps = s['integrated-capabilities'];
  const journey = s['care-journey'];
  const pros = s['for-professionals'];
  const future = s['future-of-care'];
  const collab = s.collaborate;
  const img = ht.images;

  const art = (src) => (
    <span className="ls-media ls-media--3x2">
      <img src={src} alt="" aria-hidden="true" loading="lazy" />
    </span>
  );

  return (
    <>
      <PageHero title={ht.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout reverse media={art(img.hero.src)}>
            <span className="ls-eyebrow">{ht.hero.strapline}</span>
            <h2 className="ls-h2">{ht.hero.heading}</h2>
            {ht.hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              {/* Only the first — "Partner With Us" was removed site-wide. */}
              <Pill variant="solid" href={ht.hero.ctas[0].target} arrow>
                {ht.hero.ctas[0].label}
              </Pill>
            </div>
          </FeatureLayout>
        </div>
      </section>

      {/* The hero CTA scrolls here. */}
      <section className="ls-section ls-section--smoke" id={vision.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={vision.subheading} title={vision.heading} />
          <div className="ls-ke__prose">
            {vision.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={domains.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={domains.subheading}
            title={domains.heading}
            lead={domains.body[0]}
          />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {domains.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__pillar" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__pillartitle">{item.title}</h3>
                  <span className="ls-prod__pillarsub">{item.strapline}</span>
                  <p className="ls-prod__pillardesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id={caps.id}>
        <div className="ls-container">
          <FeatureLayout media={art(img.capabilities.src)}>
            <span className="ls-eyebrow">{caps.subheading}</span>
            <h2 className="ls-h2 ls-h2--sm">{caps.heading}</h2>
            <p className="ls-body">{caps.body[0]}</p>
          </FeatureLayout>

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

      {/* The care journey. `.ls-flow` renders no numbers — the deck's
          "Step 1"…"Step 5" labels are dropped, per the site-wide rule. */}
      <section className="ls-section ls-section--white" id={journey.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={journey.subheading}
            title={journey.heading}
            lead={journey.body[0]}
          />
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

      <section className="ls-section ls-section--smoke" id={pros.id}>
        <div className="ls-container">
          <FeatureLayout reverse media={art(img.professionals.src)}>
            <span className="ls-eyebrow">{pros.subheading}</span>
            <h2 className="ls-h2 ls-h2--sm">{pros.heading}</h2>
            {pros.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>

          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {pros.principles.map((p, i) => (
              <li key={p.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 4) * 70}>
                  <h3 className="ls-prod__captitle">{p.title}</h3>
                  <p className="ls-prod__capdesc">{p.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={future.id}>
        <div className="ls-container">
          <FeatureLayout media={art(img.journey.src)}>
            <span className="ls-eyebrow">{future.subheading}</span>
            <h2 className="ls-h2 ls-h2--sm">{future.heading}</h2>
            {future.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--ink" id={collab.id}>
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <span className="ls-eyebrow ls-ke__closelabel">{collab.subheading}</span>
            <h2 className="ls-h2 ls-ke__closeheading">{collab.heading}</h2>
            {collab.body.map((p) => (
              <p className="ls-ke__closebody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              {collab.ctas.map((cta, i) => (
                <Pill
                  key={cta.label}
                  variant={i === 0 ? 'light' : 'ghost'}
                  to={cta.link}
                  arrow={i === 0}
                >
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
