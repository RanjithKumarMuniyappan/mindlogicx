import { Link } from 'react-router-dom';
import { mindgenie, agents } from '../../content/site';
import Reveal from '../common/Reveal';
import AgentOrchestration from '../common/AgentOrchestration';
import { ContentIcon, ArrowRight } from '../common/icons';

/**
 * "How We Make It Intelligent" — the MindGENIE section.
 *
 * Reproduced from the Mindlogicx 2025 frontend
 * (`components/sections/MindGenie.tsx`), structure for structure: a two-up
 * head with the orchestration diagram beside the argument, the six agent
 * classes below it, and the human-in-the-loop principle closing the section.
 *
 * It is the only dark band in the page body, which is how the source has it —
 * there, the only fully inverse section on the page.
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
 * The diagram is hidden below 768px, as in the source — the agent cards carry
 * the same information in a layout built for narrow screens.
 */
export default function MindGenie() {
  return (
    <section className="ls-section ls-section--ink ls-mg">
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
            <AgentOrchestration />
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
