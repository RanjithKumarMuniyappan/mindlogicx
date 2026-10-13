import { globalCompliancePage } from '../content/pages/esg-compliance';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import Reveal from '../components/common/Reveal';

/**
 * `/global-compliance` — ported 2026-10-13 from the 2025 frontend's
 * `app/global_compliance/page.tsx`. Copy is **verbatim**.
 *
 * The page title is "Global Compliance & Trust", which is what the source
 * banner says — longer than the "Global Compliance" the nav calls it. The
 * banner wins, since that is the page's own name for itself.
 *
 * Its three trust pillars each carry a photograph and a short feature list;
 * the regulations below are a three-card "bento" in the source, rendered here
 * as a plain three-up grid — this pattern has no bento, and the `size` field
 * the source used to drive it is carried in the content but unread.
 *
 * ## Absent because the source commented them out
 *
 * The hero's own `<h1>`, and the page has **no closing call to action** of any
 * kind. That is the original's shape, not an omission in the port.
 */
export default function GlobalCompliance() {
  const hero = globalCompliancePage.sections.find((s) => s.id === 'hero');
  const pillars = globalCompliancePage.sections.find((s) => s.id === 'trust-pillars');
  const regs = globalCompliancePage.sections.find((s) => s.id === 'regulations-bento');
  const quote = globalCompliancePage.sections.find((s) => s.id === 'security-quote');

  return (
    <>
      <PageHero title={globalCompliancePage.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={hero.desc} titleSize="ls-h3" />
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <ul className="ls-pillars">
            {pillars.pillars.map((pillar, i) => (
              <li key={pillar.id ?? pillar.title}>
                <Reveal
                  className={`ls-pillar ls-pillar--${i % 2 === 1 ? 'purple' : 'cyan'}`}
                  effect="fadeInUp"
                  delay={i * 80}
                >
                  <span className="ls-pillar__figure">
                    <img src={pillar.image} alt="" aria-hidden="true" loading="lazy" />
                  </span>

                  <span className="ls-pillar__body">
                    <h3 className="ls-pillar__title">{pillar.title}</h3>
                    <p className="ls-pillar__desc">{pillar.desc}</p>

                    <ul className="ls-bullets ls-pillar__points">
                      {pillar.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
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
          <div className="ls-grid ls-grid--3">
            {regs.cards.map((card, i) => (
              <Reveal className="ls-regcard" key={card.id ?? card.title} effect="fadeInUp" delay={i * 70}>
                <h3 className="ls-regcard__title">{card.title}</h3>
                <p className="ls-regcard__desc">{card.desc}</p>
                {/* Only the first card has tags in the source — "IP
                    Protection" and "OEM Partners" have none. Guarded rather
                    than back-filled: inventing tags for a compliance card
                    would be inventing claims. */}
                {card.tags?.length > 0 && (
                  <div className="ls-tagrow ls-tagrow--tight">
                    {card.tags.map((tag) => (
                      <span className="ls-tagrow__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal effect="fadeInUp">
            <blockquote className="ls-bigquote">{quote.quote}</blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
