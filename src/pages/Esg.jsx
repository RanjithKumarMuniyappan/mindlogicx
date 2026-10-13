import { esgPage } from '../content/pages/esg-compliance';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import Reveal from '../components/common/Reveal';

/**
 * `/esg-sustainability` — ported 2026-10-13 from the 2025 frontend's
 * `app/esg_sustainability/page.tsx`. Copy is **verbatim**.
 *
 * ## What the port changed, and what it deliberately did not
 *
 * The source leaned on gradient panels and three unrelated colour ramps
 * (emerald, orange, blue) for its three pillars. This build has two brand
 * colours, so the pillars alternate cyan/purple instead — the rhythm survives,
 * the third hue does not.
 *
 * The source also carried stock Unsplash photographs alongside real artwork
 * in a dead `image` field. Those are dropped; each pillar keeps the real local
 * photograph that was actually being rendered.
 *
 * ## ⚠️ One sentence is broken in the original and is reproduced as-is
 *
 * "ESG principles are embedded across the Mindlogicx ecosystem spanning
 * EdTech, and CommerceTech." — the list reads oddly because *HealthTech,
 * FinTech and LegalTech were commented out* in the source JSX, leaving a
 * dangling comma. It is carried across unchanged rather than silently
 * repaired, because restoring three verticals to a public ESG claim is the
 * client's call, not mine. The suppressed names are recorded in
 * `_commentedOut.ecosystemVerticals`.
 *
 * Also commented out in the source and therefore absent here: the hero's own
 * `<h1>`, the "Pillar 01/02/03" badges, and a "View Reports" button that had
 * no destination.
 */
export default function Esg() {
  const hero = esgPage.sections.find((s) => s.id === 'hero');
  const pillars = esgPage.sections.find((s) => s.id === 'pillars');
  const impact = esgPage.sections.find((s) => s.id === 'ecosystem-impact');

  return (
    <>
      <PageHero title={esgPage.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro eyebrow={hero.tagline} title={hero.desc} titleSize="ls-h3" />
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <ul className="ls-pillars">
            {pillars.pillars.map((pillar, i) => (
              <li key={pillar.title}>
                <Reveal
                  className={`ls-pillar ls-pillar--${i % 2 === 1 ? 'purple' : 'cyan'}`}
                  effect="fadeInUp"
                  delay={i * 80}
                >
                  <span className="ls-pillar__figure">
                    {/* Decorative: the pillar's own heading names it. */}
                    <img src={pillar.image} alt="" aria-hidden="true" loading="lazy" />
                  </span>

                  <span className="ls-pillar__body">
                    <span className="ls-pillar__tagline">{pillar.tagline}</span>
                    <h3 className="ls-pillar__title">{pillar.title}</h3>
                    <p className="ls-pillar__desc">{pillar.desc}</p>

                    <ul className="ls-bullets ls-pillar__points">
                      {pillar.points?.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={impact.title} lead={impact.desc} />

          <Reveal className="ls-tagrow" effect="fadeInUp">
            {impact.tags?.map((tag) => (
              <span className="ls-tagrow__tag" key={tag}>
                {tag}
              </span>
            ))}
          </Reveal>

          <Reveal className="ls-callout ls-mt-md" effect="fadeInUp" delay={80}>
            <h3 className="ls-callout__title">{impact.callout.title}</h3>
            <p className="ls-callout__desc">{impact.callout.desc}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
