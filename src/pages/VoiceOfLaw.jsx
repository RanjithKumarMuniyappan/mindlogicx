import { legalSolutionsPage as legal } from '../content/pages/legal-solutions';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/voice-of-law` — **rebuilt 2026-10-16** from the client's Legal deck
 * (`MindlogicxWebsiteLegal.html`). Copy is verbatim.
 *
 * ## This replaced the page entirely
 *
 * What was here came from the 2025 frontend. **None of that copy survives**,
 * and the replacement clears most of what was flagged about it:
 *
 * | old problem | now |
 * |---|---|
 * | no `h1` anywhere | real `h1` |
 * | "FREE Legal **advise**" — a free-of-charge promise, and a typo | gone; the deck has no free-advice promise at all |
 * | SOS promising "immediate resolution … threat to life and property" | "Location-aware **guidance** to relevant emergency contacts … **subject to regional availability**" |
 * | "a carefully vetted network", "pan India" | gone |
 * | "VOL" never expanded | gone |
 * | six grammar/spelling errors | the new deck has none |
 * | orphan block claiming SOC 2, ISO 27001, GDPR, "60 percent" | not carried over |
 *
 * `content/pages/voice-of-law.js` still holds the old content, unrendered.
 *
 * ## ⚠️ The hedging is load-bearing — do not tighten it
 *
 * The deck instructs: *"the website should communicate the planned
 * capabilities … without implying that the services are already commercially
 * available"*, and *"Do not use wording such as 'trusted by law firms
 * worldwide,' 'available globally,' or '24/7 legal assistance' until
 * substantiated."*
 *
 * **Legal services are a regulated advertising area in India (Bar Council of
 * India Rule 36).** Around twenty qualifiers carry that load here — "is
 * developing", "proposed", "envisions", "planned pathways", "intended to
 * support" — plus two "Under Development" badges and a jurisdictional
 * disclaimer. Nothing on this page paraphrases them.
 *
 * ## ⚠️ A disclaimer the deck asks for does not exist yet
 *
 * The deck's own notes require that *"Citizen-facing services should
 * distinguish general legal information from professional legal advice."*
 * **No sentence doing that was written.** The only statement of its kind is
 * on the professional side ("…legal interpretation, advice, and decisions
 * remain under qualified human oversight"), which does not cover citizens.
 *
 * It is **not** drafted here — inventing regulated disclaimer wording would
 * be worse than leaving the gap visible. `legal.requiredDisclaimer` records
 * it; the client must supply the text and have it reviewed.
 *
 * ## ⚠️ Harvey is deliberately absent
 *
 * The deck names **Harvey** as a functional benchmark and says in the same
 * breath: *"It should not be mentioned on the public webpage."* It lives in
 * `authorGuidance` only. Do not promote it into page copy.
 *
 * ## Other decisions
 *
 * - **The deck's trailing blocks are not on the page**: its preamble, the
 *   interleaved "Suggested CTA:" and "UI/UX guidance:" lines, "Section 8. SEO
 *   and Metadata" and "Website Implementation Recommendations". Same call as
 *   the HealthTech and Finance decks.
 * - **"Section N." prefixes are dropped**, per the site-wide no-numbering
 *   rule; `number` is kept in the content module.
 * - **All three CTAs were labels only** — the deck contains no links at all.
 *   "Explore Our Legal Vision" scrolls to the vision band; the other two go
 *   to `/contact-us`. This project's choices.
 * - **Section 5 captions a diagram the deck does not include.** The four
 *   layers are rendered as the text they are, which is also the diagram's
 *   text alternative once one is drawn.
 *
 * ## ⚠️ Two naming mismatches worth settling
 *
 * The deck suggests the slug **`/legal`**; the route stays `/voice-of-law`
 * because Technology → Legal points there. More awkwardly, **"Voice of Law"
 * appears nowhere in the deck** — it says the platform name "has not been
 * finalised" — so the route and menu label name a product this page never
 * mentions.
 *
 * ## Images
 *
 * **The deck references none.** The three here are reused from the old build,
 * matched by what they actually show — and one of them is why the citizen
 * band has a picture at all: it is the only legacy photograph showing a
 * citizen rather than a lawyer. A vertical built around citizen rights
 * deserves artwork of its own.
 */
export default function VoiceOfLaw() {
  const s = Object.fromEntries(legal.sections.map((x) => [x.id, x]));
  const vision = s['legal-technology-vision'];
  const pros = s['professional-intelligence'];
  const citizens = s['citizen-empowerment'];
  const ke = s['knowledge-engineering-and-ai'];
  const saas = s['global-saas-platform'];
  const future = s['accessible-legal-intelligence'];
  const join = s['be-part-of-the-journey'];

  const ART = '/assets/images/pages/voice-of-law';
  const art = (src) => (
    <span className="ls-media ls-media--4x3">
      <img src={src} alt="" aria-hidden="true" loading="lazy" />
    </span>
  );

  return (
    <>
      <PageHero title={legal.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout reverse media={art(`${ART}/intro.webp`)}>
            <h2 className="ls-h2">{legal.hero.heading}</h2>
            <p className="ls-lead">{legal.hero.strapline}</p>
            {legal.hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            {/* "Platform Under Development" is a regulatory statement, not
                decoration. See the note at the top of this file. */}
            <ul className="ls-legal__badges">
              {legal.hero.badges.map((b) => (
                <li className="ls-fin__status" key={b}>
                  {b}
                </li>
              ))}
            </ul>

            <div className="ls-ke__ctas">
              {/* The content module names these two differently — the in-page
                  anchor is `target`, the route is `link` — so read both.
                  Assuming `link` threw on the first CTA. */}
              {legal.hero.ctas.map((cta, i) => {
                const href = cta.target ?? cta.link ?? '';
                return href.startsWith('#') ? (
                  <Pill key={cta.label} variant="solid" href={href} arrow>
                    {cta.label}
                  </Pill>
                ) : (
                  <Pill key={cta.label} variant={i === 0 ? 'solid' : 'ghost'} to={href}>
                    {cta.label}
                  </Pill>
                );
              })}
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

          {/* The two pillars the whole page is organised around. */}
          <ul className="ls-grid ls-grid--2 ls-mt-md">
            {vision.serviceAreas.map((area, i) => (
              <li key={area.title}>
                <Reveal className="ls-prod__pillar" effect="fadeInUp" delay={i * 80}>
                  <h3 className="ls-prod__pillartitle">{area.title}</h3>
                  <p className="ls-prod__pillardesc">{area.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={pros.id}>
        <div className="ls-container">
          <FeatureLayout media={art(`${ART}/our-services.webp`)}>
            <span className="ls-eyebrow">{pros.subheading}</span>
            <h2 className="ls-h2 ls-h2--sm">{pros.heading}</h2>
            {pros.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>

          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {pros.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{item.title}</h3>
                  <p className="ls-prod__capdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* ⚠️ The advice boundary on the professional side. */}
          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{pros.closingStatement}</p>
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id={citizens.id}>
        <div className="ls-container">
          <FeatureLayout reverse media={art(`${ART}/sos-services.webp`)}>
            <span className="ls-eyebrow">{citizens.subheading}</span>
            <h2 className="ls-h2 ls-h2--sm">{citizens.heading}</h2>
            {citizens.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>

          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {citizens.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{item.title}</h3>
                  <p className="ls-prod__capdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{citizens.closingStatement}</p>
          </Reveal>
        </div>
      </section>

      {/* The conceptual architecture. The deck has no diagram — these four
          layers are the text, and the text alternative if one is drawn. */}
      <section className="ls-section ls-section--white" id={ke.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={ke.subheading} title={ke.heading} lead={ke.body[0]} />

          <ol className="ls-legal__layers ls-mt-md">
            {ke.architecture.layers.map((layer, i) => (
              <li key={layer.title}>
                <Reveal
                  className="ls-legal__layer"
                  effect="fadeInUp"
                  delay={i * 70}
                  style={{
                    '--layer-depth': `${30 + (70 * i) / (ke.architecture.layers.length - 1)}%`,
                  }}
                >
                  <h3 className="ls-legal__layertitle">{layer.title}</h3>
                  <ul className="ls-legal__nodes">
                    {layer.parts.map((part) => (
                      <li key={part}>{part}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="ls-kef__span ls-mt-md" effect="fadeInUp">
            <span className="ls-kef__spanmark" aria-hidden="true" />
            {ke.architecture.caption}
          </Reveal>

          <p className="ls-body ls-ke__para ls-mt-sm">{ke.closingStatement}</p>
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id={saas.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={saas.subheading} title={saas.heading} lead={saas.body[0]} />
          <ul className="ls-bullets ls-mt-md">
            {saas.items.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>

          {/* ⚠️ Jurisdictional disclaimer. */}
          <Reveal className="ls-fin__disclaimer ls-mt-md" effect="fadeInUp">
            {saas.disclaimer}
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={future.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={future.subheading} title={future.heading} />
          <div className="ls-ke__prose">
            {future.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="ls-section ls-section--ink" id={join.id}>
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <h2 className="ls-h2 ls-ke__closeheading">{join.heading}</h2>
            {join.body.map((p) => (
              <p className="ls-ke__closebody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <div className="ls-ke__ctas">
              <Pill variant="light" to={join.ctas[0].link ?? join.ctas[0].target} arrow>
                {join.ctas[0].label}
              </Pill>
            </div>
            <p className="ls-fin__disclaimer ls-fin__disclaimer--ink">{join.statusBadge}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
