import { Link } from 'react-router-dom';
import { mindgenie, agents } from '../../content/site';
import Reveal from '../common/Reveal';
import { ContentIcon, ArrowRight } from '../common/icons';

/**
 * "How We Make It Intelligent" — the MindGENIE section.
 *
 * Reproduced from the Mindlogicx 2025 frontend
 * (`components/sections/MindGenie.tsx`), structure for structure: a two-up
 * head with the orchestration diagram beside the argument, the six agent
 * classes below it, and the human-in-the-loop principle closing the section.
 *
 * ## It used to be the page's only dark band
 *
 * Flipped to `--white` on 2026-10-14 at the client's request, so the home page
 * is light throughout. That is not just a background swap: the whole section
 * was coloured for ink, and **cyan was doing the accent work precisely because
 * purple is unreadable on near-black** (2.10:1). On white the two trade
 * places — purple reads at 8.6:1 and cyan would be 2.5:1 — so every accent
 * here is now `--accent-text` (purple), the headings are ink, the body is
 * `--grey-500`, and the agent cards are real white cards with a hairline
 * instead of 3.5%-white-on-ink.
 *
 * The git history has the ink version if it is ever wanted back; flipping the
 * tone alone would leave the type unreadable.
 *
 * ## The visual
 *
 * The agent-orchestration diagram (`AgentOrchestration.jsx`) was replaced with
 * the MindGENIE character at the client's request. **The component is still in
 * the tree and still imported by nothing else** — restoring it is swapping the
 * `<img>` back for `<AgentOrchestration />`.
 *
 * ## What changed in the port, and why
 *
 * - **Tailwind utilities → this site's pattern.** `tone="inverse"` becomes
 *   `.ls-section--ink`; the type scale, container and reveal come from here.
 * - **Colour.** The source's accent becomes this build's **cyan**, because
 *   that is the colour that reads on ink (7.38:1); purple, which carries
 *   everything on the light bands, is 2.10:1 here and unusable. That applies
 *   to the definition's rule, the CTA, the agent glyphs and the closing
 *   callout.
 * - **No framer-motion.** The source animates the diagram drawing itself;
 *   this build has no animation library, so `Reveal` handles the entrance
 *   and the diagram renders settled. See `AgentOrchestration.jsx`.
 *
 */
export default function MindGenie() {
  return (
    <section className="ls-section ls-section--white ls-mg">
      <div className="ls-container">
        <div className="ls-mg__head">
          <Reveal className="ls-mg__intro" effect="fadeInUp">
            <p className="ls-wwd__eyebrow">
              <span className="ls-wwd__rule ls-mg__rule" aria-hidden="true" />
              <span className="ls-eyebrow">{mindgenie.eyebrow}</span>
            </p>

            <h2 className="ls-h2 ls-mg__title">{mindgenie.headline}</h2>
            <p className="ls-lead ls-mg__body">{mindgenie.body}</p>

            {/* The definition, marked by a rule rather than quotation marks —
                the same treatment the source gives it. */}
            <p className="ls-mg__definition">{mindgenie.definition}</p>

            <Link className="ls-mg__cta" to={mindgenie.ctaLink}>
              {mindgenie.ctaText}
              <ArrowRight />
            </Link>
          </Reveal>

          <Reveal className="ls-mg__visual" effect="fadeInRight">
            {/* The MindGENIE character, in place of the agent-orchestration
                diagram that was here. Decorative: the headline, the definition
                and the six agent cards below carry the meaning, and the
                picture restates none of it. */}
            <img
              className="ls-mg__portrait"
              src={mindgenie.coreImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </Reveal>
        </div>

        <ul className="ls-mg__agents">
          {agents.map((agent, i) => (
            <li key={agent.id}>
              <Reveal className="ls-mg__agent" effect="fadeInUp" delay={i * 70}>
                <div className="ls-mg__agenthead">
                  <span className="ls-mg__glyph">
                    <ContentIcon name={agent.glyph} />
                  </span>
                  <span className="ls-mg__role">{agent.role}</span>
                </div>
                <h3 className="ls-mg__agentname">{agent.name}</h3>
                <p className="ls-mg__agentbody">{agent.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="ls-mg__principle" effect="fadeInUp">
          <div>
            <p className="ls-mg__principletitle">{mindgenie.principle}</p>
            <p className="ls-mg__principlebody">{mindgenie.humanInTheLoop}</p>
          </div>
          <span className="ls-mg__principleglyph">
            <ContentIcon name="AgentGovernance" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
