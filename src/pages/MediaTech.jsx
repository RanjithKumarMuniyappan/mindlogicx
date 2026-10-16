import { mediaTechPage as mt } from '../content/pages/media-tech';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';

/**
 * `/media-tech` — built 2026-10-15 from the 2025 frontend's `app/media_tech/`
 * and `components/MediaTech/`, cross-checked against that project's dev
 * server. Copy is **verbatim** except where noted below.
 *
 * Reached from Technology → Media, which already pointed here.
 *
 * ## ⚠️ The source page is titled "BSIM"
 *
 * That is the only above-the-fold heading on the live page, and the string
 * **appears nowhere else** — not in the rest of the page, not in its SEO data,
 * not anywhere in the MediaTech source tree. It is almost certainly left over
 * from another project.
 *
 * This page is titled **"MediaX"**, which is the product every section is
 * actually about. "BSIM" is preserved in the content module as `title` with
 * `titleIsSuspect: true` so the oddity is not lost — **but the client should
 * confirm what this page is meant to be called.**
 *
 * ## Two copy corrections, and one typo left alone
 *
 * - The body reads **"AI- driven"** and **"rollout— delivering"** on the live
 *   page. Those spaces are not authored: they are JSX line breaks collapsing
 *   into text nodes mid-word. The intended text is rendered here
 *   (`bodyIntendedText` in the content module holds it); reproducing a
 *   whitespace artifact would read as this build's mistake.
 * - **"Ent-to-End Creative & Production Powerhouse" is left exactly as
 *   written.** That one is a real typo in the source copy, not a rendering
 *   artifact, so it is carried like every other verbatim string. One word,
 *   one fix, whenever the client wants it.
 *
 * ## ⚠️ What the source does not have
 *
 * - **The six "Impact Stories" are not stories.** Each card renders a
 *   category label and nothing else — no narrative, client, metric or link —
 *   under an intro promising "measurable business wins". Their `title` fields
 *   exist in the data but never reach the DOM, and are template filler that
 *   does not match its own category ("Embedding Design Ops Across Teams"
 *   filed under Live-Action & Virtual Production). Not rendered here either.
 * - **The four process steps have no descriptions.** Each one's copy is lorem
 *   ipsum, commented out, so the steps are bare one-word labels. Nothing was
 *   written to fill them.
 * - **Cards 1 and 4 share one image** (`AICreativeAutomation.webp`), which is
 *   the source's own duplication.
 * - "Localization & Accessibility" appears **twice** — once as an impact
 *   category and once as a service module — with two different pictures.
 *
 * ## What was changed from the source
 *
 * - **The page now has an `h1`.** The source has none; its banner is an `h2`,
 *   and section 2 jumps straight from `h2` to `h4` while sections 3–4 use
 *   `h3` for the same card role.
 * - **Nothing is a dead link.** All seven service tiles and all four slider
 *   steps carry `href="#"` in the source, and all six impact cards point at
 *   `/portfolio/portfolio-details/` — an unmigrated template demo route. They
 *   render as plain cards.
 * - **The closing CTA was broken four ways**: a `<div onClick>` with no href,
 *   role or tabIndex (not keyboard reachable), routing an external
 *   `https://wa.me/…` through Next's `router.push()` (which would not
 *   reliably open WhatsApp), dispatching an empty Calendly URL, and shipping
 *   an empty `<p>`. It is a real link to `/contact-us` here.
 * - **The microsite link is a labelled button**, not a floating GIF whose
 *   only accessible name was a `title` attribute on a `<div>`.
 * - **Twelve images carried `alt="Mindlogicx"`** — the company name, not a
 *   description of any picture. They are decorative here; the heading beside
 *   or beneath each one names it.
 *
 * Images: 18 copied, 2.42 MB → 0.32 MB.
 */

const ART = '/assets/images/pages/media-tech';

const IMPACT = {
  'Creative Story Telling': 'impact-ai-creative.webp',
  'Live-Action & Virtual Production': 'impact-live-action.webp',
  'VFX & Motion Graphics': 'impact-vfx.webp',
  'AI + Creative Automation': 'impact-ai-creative.webp',
  'Experience-as-a-Service': 'impact-xaas.webp',
  'Localization & Accessibility': 'impact-localization.webp',
};

const STEPS = {
  Imagine: 'step-imagine.webp',
  Ideate: 'step-ideate.webp',
  Prototype: 'step-prototype.webp',
  Produce: 'step-produce.webp',
};

const MODULES = {
  'Localization & Accessibility': 'mod-localization.webp',
  'Cinematic VFX & CGI': 'mod-vfx-cgi.webp',
  'Motion Graphics & Data Viz': 'mod-motion-dataviz.webp',
  '2D/3D Explainer Animation': 'mod-explainer.webp',
  'AR / VR / MR Content': 'mod-ar-vr-mr.webp',
  'Generative AI Imagery': 'mod-generative-ai.webp',
  'Green Screen Studio': 'mod-green-screen.webp',
};

export default function MediaTech() {
  const s = Object.fromEntries(mt.sections.map((x) => [x.id, x]));
  const intro = s['mediax-intro'];
  const impact = s['mediax-impact-stories'];
  const power = s['ent-to-end-creative-production-powerhouse'];
  const modules = s['specialist-service-modules'];

  return (
    <>
      {/*
        No visible page title, removed 2026-10-15 at the client's request.

        **The `h1` is kept, visually hidden.** Deleting it outright would
        leave the page with no `h1` at all — no document outline for a screen
        reader, and nothing for a search result or link preview to name the
        page with. Unlike `/about`, there is no existing visible heading that
        could take the role: the first band has no heading of its own (the
        source puts a logo image where one would go) and the next heading is
        "MediaX Impact Stories", which names a section, not the page.

        "MediaX" rather than the source's "BSIM" — see the note above.
      */}
      <h1 className="ls-visually-hidden">{mt.productName}</h1>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img src={`${ART}/intro.webp`} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <img
              className="ls-mx__logo"
              src={`${ART}/mediax-logo.webp`}
              alt=""
              aria-hidden="true"
              width="240"
            />
            {intro.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      {/* Category tiles. The source calls these stories; they are labels. */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={impact.heading} lead={impact.intro} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {impact.cards.map((card, i) => (
              <li key={card.category}>
                <Reveal className="ls-mx__tile" effect="fadeInUp" delay={(i % 3) * 70}>
                  <span className="ls-media ls-media--3x2">
                    <img
                      src={`${ART}/${IMPACT[card.category]}`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </span>
                  <h3 className="ls-mx__tiletitle">{card.category}</h3>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          {/* "Ent-to-End" is the source's typo — see the note above. */}
          <SectionIntro title={power.heading} lead={power.bodyIntendedText} />

          {/* Four steps with no copy: every description is commented-out
              lorem ipsum in the source. The labels stand alone. */}
          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {power.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal className="ls-mx__step" effect="fadeInUp" delay={(i % 4) * 70}>
                  <span className="ls-media ls-media--3x2">
                    <img
                      src={`${ART}/${STEPS[step.title]}`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </span>
                  <h3 className="ls-mx__steptitle">{step.title}</h3>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={modules.heading} lead={modules.intro} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {(modules.modules ?? modules.items).map((m, i) => {
              const name = m.title ?? m.heading;
              return (
                <li key={name}>
                  {/* Not a link: every tile is `href="#"` in the source. */}
                  <Reveal className="ls-mx__tile" effect="fadeInUp" delay={(i % 3) * 70}>
                    <span className="ls-media ls-media--3x2">
                      <img
                        src={`${ART}/${MODULES[name]}`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                    </span>
                    <h3 className="ls-mx__tiletitle">{name}</h3>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/*
        The closing CTA band was removed 2026-10-16, along with every other
        page's, at the client's request. Its content is intact in the content
        module.

        ⚠️ **This page now has no outbound route.** It was the only link off
        it; the section is a few lines to restore if that turns out to matter.
      */}
    </>
  );
}
