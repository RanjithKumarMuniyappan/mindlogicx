import { voiceOfLawPage as vol } from '../content/pages/voice-of-law';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/voice-of-law` — built 2026-10-15 from the 2025 frontend's
 * `app/voice_of_law/` and `components/LegalTech/VoiceOfLaw/`, cross-checked
 * against that project's dev server. Copy is **verbatim**, typos included.
 *
 * Reached from Technology → Legal, which already pointed here.
 *
 * ## ⚠️ For the client, before this is public
 *
 * - **"FREE Legal advise from the licensed lawyers"** is an unqualified
 *   free-of-charge promise with no terms attached, and the SOS section
 *   promises immediate real-world response to "accidents, threat to life and
 *   property" with no SLA, coverage area, hours or disclaimer. Both are
 *   carried verbatim. **This page as a whole is worth a Bar Council of India
 *   Rule 36 review** — advertising rules for legal services are strict.
 * - **Six typos are preserved**: "Every needs to be heard", "deserves es
 *   justice", "ourr heart", "FREE Legal **advise**", "a qualified legal
 *   professionals", and the bare fragment "Links to Resources" which has no
 *   explanation attached to it.
 * - **"VOL" is never expanded** anywhere on the page, and the SOS copy refers
 *   to a "mobile app" that is never named or linked.
 * - The source's meta description **describes a different product** — case
 *   tracking, e-learning, judiciary, digital courts — not the consumer
 *   lawyer-matching and SOS service this page actually sells.
 *
 * ## What was changed from the source, and why
 *
 * - **The page now has an `h1`.** The source has none at all: its title is an
 *   `h2`, "Our USP" is an `h3` among `h2` siblings, and an `h5` is used purely
 *   for font size with no `h4` above it. The outline here is h1 → h2.
 * - **Two images were swapped back.** In the source `vol_how_it_works.webp`
 *   renders in the *Our Services* band and `vol_our_service.webp` in *How It
 *   Works?* — and the hard-coded width/height on each `<Image>` matches the
 *   *other* file, which is what gives the mistake away. Each picture is with
 *   its own section here.
 * - **"Talk To Us" is a real link.** In the source it is a `<div onClick>`
 *   that calls `window.open(…, '_blank')` with no `rel="noopener"` — not
 *   keyboard reachable, invisible to crawlers, and the only interactive
 *   control on the entire page. It points at `/contact-us` here, matching the
 *   other product pages; **the source's destination was a WhatsApp handoff**
 *   to +91-9071177765, which is the same number already on the contact page,
 *   so nothing is lost. The original URL is kept in the content module.
 * - **The USP icons are not rendered.** They are FontAwesome classes
 *   (`fa-solid fa-robot`, …) and this build has no FontAwesome; one of them
 *   even carries an unresolved authoring note in the source. The seven
 *   statements carry themselves.
 *
 * ## Not carried
 *
 * `components/LegalTech/LegalTechContent/` is exported but **imported by
 * nothing** — dead code describing five products that are not on this page
 * (SmartContract Hub, e-Sign & Trust Vault, Compliance Copilot, e-Discovery &
 * Insight Engine, CaseFlow BPM) and claiming SOC 2, ISO 27001, GDPR/HIPAA and
 * "up to 60 percent" cycle-time cuts. It is preserved in the content module
 * under `notRendered` in case any of it was meant to ship, but **none of
 * those claims appear here**.
 */
export default function VoiceOfLaw() {
  const s = Object.fromEntries(vol.sections.map((x) => [x.id, x]));
  const intro = s['vol-introduction'];
  const services = s['our-services'];
  const how = s['how-it-works'];
  const sos = s['sos-services'];
  const usp = s['our-usp'];
  const closing = s['closing-cta'];

  const ART = {
    logo: '/assets/images/pages/voice-of-law/vol-logo.webp',
    intro: '/assets/images/pages/voice-of-law/intro.webp',
    services: '/assets/images/pages/voice-of-law/our-services.webp',
    how: '/assets/images/pages/voice-of-law/how-it-works.webp',
    sos: '/assets/images/pages/voice-of-law/sos-services.webp',
  };

  const art = (src) => (
    <span className="ls-media ls-media--4x3">
      <img src={src} alt="" aria-hidden="true" loading="lazy" />
    </span>
  );

  return (
    <>
      <PageHero title={vol.title} tone="plain" />

      {/* The source gives this band no heading — its "About Us" h2 is
          commented out — so the lockup and the copy open the page. */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout reverse media={art(ART.intro)}>
            <img className="ls-vol__logo" src={ART.logo} alt="" aria-hidden="true" width="260" />
            {intro.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p.trim()}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout media={art(ART.services)}>
            <h2 className="ls-h2 ls-h2--sm">{services.heading}</h2>
            <ul className="ls-bullets">
              {services.items.map((item) => (
                <li key={item}>{item.trim()}</li>
              ))}
            </ul>
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout reverse media={art(ART.how)}>
            <h2 className="ls-h2 ls-h2--sm">{how.heading}</h2>
            <ul className="ls-bullets">
              {how.items.map((item) => (
                <li key={item.text}>
                  {/* Only two of the three steps carry a bold label in the
                      source; the first has none. Reproduced as found. */}
                  {item.label && <strong>{item.label.trim()} </strong>}
                  {item.text}
                </li>
              ))}
            </ul>
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout media={art(ART.sos)}>
            <h2 className="ls-h2 ls-h2--sm">{sos.heading}</h2>
            <ul className="ls-bullets">
              {sos.items.map((item) => (
                <li key={item.slice(0, 40)}>{item.trim()}</li>
              ))}
            </ul>
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={usp.heading} center />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {usp.items.map((item, i) => (
              <li key={item.text}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <p className="ls-vol__usp">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{usp.closingStatement.text}</p>
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <h2 className="ls-h2 ls-ke__closeheading">{closing.heading}</h2>
            <div className="ls-ke__ctas">
              {/* Repointed from the source's WhatsApp handoff — see the note
                  at the top of this file. */}
              <Pill variant="light" to="/contact-us" arrow>
                {closing.ctas[0].label}
              </Pill>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
