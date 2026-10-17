import { intelliosmPage as osm } from '../content/pages/intelliosm';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';
import { ContentIcon } from '../components/common/icons';

/**
 * `/intelliosm` — built 2026-10-17 from the client's deck
 * (`IntelliOSM_Webpage_Content_v1.2.docx`). Copy is **verbatim**; the
 * provenance, the hedging and everything held back live in
 * `content/pages/intelliosm.js`, which should be read alongside this file.
 *
 * Reached from Education → the IntelliOSM card on `/ed-tech`, whose "Explore
 * IntelliOSM™" link was switched back on in the same change. Before this the
 * product's `link` pointed at `/products/intelliosm`, which rendered
 * `Placeholder`, so the CTA was hidden with `ctaHidden: true`.
 *
 * ## ⚠️ Do not tighten the hedging
 *
 * The deck's handoff line is explicit: *"MVP feature availability requires
 * Product Engineering sign-off."* Everything on this page is written as design
 * intent — "designed for", "is designed to", "supports", "can choose" — and
 * the device list says *"Designed for supported Windows, macOS, Linux, iOS,
 * Android tablet, and iPad environments"* rather than promising they work.
 * On a page selling an unreleased product, those words are the difference
 * between a roadmap and a warranty.
 *
 * **No price, no credit quantity, no entitlement appears anywhere**, because
 * the deck forbids publishing them before commercial finalisation. Nothing
 * here fills that gap with an invented figure.
 *
 * ## The workflow diagram is built, not pasted
 *
 * The deck's one embedded image is a 1512×1444 flowchart. It is not shipped —
 * see `workflowDiagram` in the content module for why. The deck asks instead
 * for "a responsive process diagram … three preparation scenarios in parallel
 * on desktop and stacked on mobile … distinguish AI marking visually from
 * evaluator approval", and that is what `.ls-osm__flow` is.
 *
 * **Colour is not the only distinction.** Cyan marks the AI stages and purple
 * the evaluator's, but each tinted node also carries a worded tag, because a
 * difference conveyed by hue alone fails WCAG 1.4.1 and disappears in
 * greyscale. The tag wording is this page's, not the deck's — it is lifted
 * from the hero's own line, "AI-Assisted Intelligence. Human-Controlled
 * Decisions."
 *
 * **The three scenario names came off the flowchart, not the prose.** The body
 * text only says the platform "supports multiple evaluation-readiness
 * scenarios"; A, B and C exist nowhere else in the document.
 *
 * ## ⚠️ This page has a closing CTA band, and the others do not
 *
 * Every closing CTA band on this site was removed on 2026-10-16 at the
 * client's request. This deck has one as a numbered section of its own
 * ("SECTION 7 | CLOSING CALL TO ACTION") and the page was asked for section by
 * section, so it is built. **It is the only one left on the site** — flagged
 * rather than silently dropped or silently kept.
 *
 * Its destinations are this project's: the deck contains no hyperlink
 * anywhere, only the labels "Experience Intelligent Marking" and "Request a
 * Demo". Both go to `/contact-us`, matching the other product pages. The
 * deck's own recommendation is to "Connect CTAs to functional
 * product-exploration and demo-enquiry journeys" — when a demo-booking flow
 * exists, this is the one place to change.
 *
 * ## Other decisions
 *
 * - **"SECTION N |" prefixes and the flowchart's 1–6 are dropped**, per the
 *   site-wide no-numbering rule. `number` is kept in the content module.
 * - **The deck's recommended `h1` is the first `h2` here.** See the content
 *   module; the slug it asks for, `/intelliosm`, is honoured.
 * - **The hero is a client photograph** (2026-10-17), replacing the
 *   `MarkingArt` drawing that stood there. ⚠️ The screen in it shows a marking
 *   interface with legible rubric scores that **is not IntelliOSM** — see the
 *   note on `hero.image` in the content module. `MarkingArt.jsx` is kept,
 *   unimported, and records why a drawing was there first.
 */

/* A capability card with its glyph. The six in Platform Capabilities and the
   four in Global Scale share this shape; only the glyph is optional. */
function CapCard({ title, description, glyph, delay = 0 }) {
  return (
    <Reveal className="ls-prod__cap" effect="fadeInUp" delay={delay}>
      {glyph && (
        <span className="ls-osm__capicon" aria-hidden="true">
          <ContentIcon name={glyph} />
        </span>
      )}
      <h3 className="ls-prod__captitle">{title}</h3>
      <p className="ls-prod__capdesc">{description}</p>
    </Reveal>
  );
}

/*
 * The worded half of the AI/human distinction. Colour alone would fail WCAG
 * 1.4.1; these tags carry the same information in text.
 */
const TONE_TAG = {
  ai: 'AI-assisted',
  human: 'Human-controlled',
};

function FlowNode({ title, description, tone = 'plain', heading = 'h4' }) {
  const Heading = heading;
  return (
    <div className="ls-osm__node" data-tone={tone}>
      {TONE_TAG[tone] && <span className="ls-osm__tag">{TONE_TAG[tone]}</span>}
      <Heading className="ls-osm__nodetitle">{title}</Heading>
      <p className="ls-osm__nodedesc">{description}</p>
    </div>
  );
}

/*
 * The comparison table.
 *
 * A real `<table>` with a real `<th scope>` on both axes, inside its own
 * `overflow-x` box. The box is what scrolls at phone width, never the page.
 *
 * The deck prints an em dash for "not applicable" in the Team Collaboration /
 * Individual cell. A lone "—" is announced as nothing by most screen readers,
 * so the dash is kept for the eye and the words are supplied for everything
 * else.
 */
function Comparison({ comparison }) {
  const [rowHeader, ...colHeaders] = comparison.columns;
  return (
    <div className="ls-osm__tablewrap">
      <table className="ls-osm__table">
        <caption className="ls-visually-hidden">{comparison.heading}</caption>
        <thead>
          <tr>
            <th scope="col">{rowHeader}</th>
            {colHeaders.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map(([label, ...cells]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {cells.map((cell, i) => (
                <td key={colHeaders[i]}>
                  {cell === '—' ? (
                    <>
                      <span aria-hidden="true">—</span>
                      <span className="ls-visually-hidden">Not included</span>
                    </>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function IntelliOsm() {
  const s = Object.fromEntries(osm.sections.map((x) => [x.id, x]));
  const caps = s['platform-capabilities'];
  const flow = s['evaluation-workflow'];
  const saas = s['saas-workspaces'];
  const human = s['human-centred-intelligence'];
  const global = s['global-scale'];
  const close = osm.closing;

  return (
    <>
      <PageHero title={osm.title} tone="plain" />

      {/* ── Hero ── */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img
                  src={osm.hero.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </span>
            }
          >
            <span className="ls-eyebrow">{osm.productLine}</span>
            <h2 className="ls-h2">{osm.hero.heading}</h2>
            <p className="ls-lead">{osm.hero.strapline}</p>
            {osm.hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            {/*
              ⚠️ Both hero CTAs — "Explore IntelliOSM" and "Request a Demo" —
              were removed 2026-10-17 at the client's request, along with the
              drawing this photograph replaced.

              "Explore IntelliOSM" was the only thing scrolling to
              `#platform-capabilities`; that band is still the next section
              down, so nothing became unreachable. The page keeps its outbound
              routes through the closing band.

              ⚠️ **The closing band still carries its own "Request a Demo".**
              The request named the hero's pair, and stripping the closing band
              too would leave this page with no outbound route at all — the
              state `/voice-of-law` is already in. Flagged, not assumed.

              Both are still in `osm.hero.ctas`.
            */}
          </FeatureLayout>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{osm.hero.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Platform capabilities ── */}
      <section className="ls-section ls-section--smoke" id={caps.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={caps.subheading} title={caps.heading} />
          <div className="ls-ke__prose">
            {caps.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          <h3 className="ls-h3 ls-osm__subhead">{caps.itemsHeading}</h3>
          <ul className="ls-grid ls-grid--3">
            {caps.items.map((item, i) => (
              <li key={item.title}>
                <CapCard {...item} delay={(i % 3) * 70} />
              </li>
            ))}
          </ul>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{caps.coreMessage}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Evaluation workflow ──
          The deck's flowchart, rebuilt. See the file note. */}
      <section className="ls-section ls-section--white" id={flow.id}>
        <div className="ls-container">
          <SectionIntro title={flow.heading} />
          <div className="ls-ke__prose">
            {flow.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          <h3 className="ls-h3 ls-osm__subhead">{flow.diagramHeading}</h3>

          <ol className="ls-osm__flow">
            {flow.stages.map((stage, i) => (
              <li className="ls-osm__stage" key={stage.title}>
                {i > 0 && <span className="ls-osm__link" aria-hidden="true" />}

                <Reveal effect="fadeInUp">
                  <FlowNode {...stage} />
                </Reveal>

                {/* The branch. Three scenarios side by side on desktop,
                    stacked below 768px, converging on one approved set of
                    criteria — which is the step the rest of the flow
                    depends on. */}
                {stage.branchAfter && (
                  <div className="ls-osm__fork">
                    <span className="ls-osm__link ls-osm__link--fan" aria-hidden="true" />
                    <p className="ls-osm__forklead">{flow.scenarios.lead}</p>

                    <ul className="ls-osm__scenarios">
                      {flow.scenarios.items.map((sc, n) => (
                        <li key={sc.title}>
                          <Reveal className="ls-osm__scenario" effect="fadeInUp" delay={n * 70}>
                            <h4 className="ls-osm__scenarioname">{sc.title}</h4>
                            <p className="ls-osm__scenariostate">{sc.state}</p>
                            <p className="ls-osm__scenarioaction">{sc.action}</p>
                          </Reveal>
                        </li>
                      ))}
                    </ul>

                    <span className="ls-osm__link" aria-hidden="true" />
                    <Reveal effect="fadeInUp">
                      <FlowNode {...flow.scenarios.converge} tone="human" />
                    </Reveal>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SaaS workspaces ── */}
      <section className="ls-section ls-section--smoke" id={saas.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={saas.subheading}
            title={saas.heading}
            lead={saas.body[0]}
          />

          <ul className="ls-grid ls-grid--2 ls-mt-md">
            {saas.workspaces.map((w, i) => (
              <li key={w.title}>
                <Reveal
                  className={`ls-osm__workspace ls-osm__workspace--${w.tone}`}
                  effect="fadeInUp"
                  delay={i * 90}
                >
                  <h3 className="ls-osm__workspacetitle">{w.title}</h3>
                  <p className="ls-osm__workspacedesc">{w.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <h3 className="ls-h3 ls-osm__subhead">{saas.comparison.heading}</h3>
          <Reveal effect="fadeInUp">
            <Comparison comparison={saas.comparison} />
          </Reveal>

          {/*
            ⚠️ Describes the credit model and names no price, no credit
            quantity and no entitlement — the deck forbids publishing those
            before commercial finalisation.
          */}
          <Reveal className="ls-osm__credits ls-mt-md" effect="fadeInUp">
            <h3 className="ls-osm__creditstitle">{saas.credits.heading}</h3>
            <p className="ls-osm__creditsbody">{saas.credits.body}</p>
          </Reveal>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{saas.coreMessage}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Human-centred intelligence ── */}
      <section className="ls-section ls-section--white" id={human.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={human.subheading}
            title={human.heading}
            lead={human.body[0]}
          />

          {/* The accountability chain, left to right. Same two tones as the
              workflow diagram, and the same worded tags. */}
          <ol className="ls-osm__chain ls-mt-md">
            {human.loop.map((step, i) => (
              <li key={step.title}>
                <Reveal effect="fadeInUp" delay={i * 70}>
                  <FlowNode {...step} heading="h3" />
                </Reveal>
              </li>
            ))}
          </ol>

          <h3 className="ls-h3 ls-osm__subhead">{human.principlesHeading}</h3>
          <ul className="ls-grid ls-grid--4">
            {human.principles.map((p, i) => (
              <li key={p.title}>
                <CapCard {...p} delay={(i % 4) * 70} />
              </li>
            ))}
          </ul>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{human.coreMessage}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Global scale ── */}
      <section className="ls-section ls-section--smoke" id={global.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={global.subheading}
            title={global.heading}
            lead={global.body[0]}
          />

          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {global.items.map((item, i) => (
              <li key={item.title}>
                <CapCard {...item} delay={(i % 4) * 70} />
              </li>
            ))}
          </ul>

          <Reveal className="ls-osm__credits ls-mt-md" effect="fadeInUp">
            <h3 className="ls-osm__creditstitle">{global.environments.heading}</h3>
            <p className="ls-osm__creditsbody">{global.environments.body}</p>
          </Reveal>

          <Reveal className="ls-statement ls-mt-md" effect="fadeInUp">
            <p>{global.coreMessage}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Closing call to action ──
          ⚠️ The only closing CTA band left on the site. See the file note. */}
      <section className="ls-section ls-section--white" id={close.id}>
        <div className="ls-container">
          <Reveal className="ls-osm__close" effect="fadeInUp">
            <span className="ls-eyebrow">{close.subheading}</span>
            <h2 className="ls-h2 ls-osm__closeheading">{close.heading}</h2>
            {close.body.map((p) => (
              <p className="ls-lead ls-osm__closebody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            <p className="ls-osm__closestatement">{close.statement}</p>

            <div className="ls-ke__ctas ls-osm__closectas">
              {close.ctas.map((cta) => (
                <Pill
                  key={cta.label}
                  variant={cta.kind === 'primary' ? 'solid' : 'tint'}
                  to={cta.target}
                  arrow={cta.kind === 'primary'}
                >
                  {cta.label}
                </Pill>
              ))}
            </div>

            <p className="ls-osm__signoff">{close.signoff}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
