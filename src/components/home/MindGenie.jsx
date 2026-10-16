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
 * ## The visual — restructured 2026-10-16
 *
 * The artwork changed shape. It began as the agent-orchestration diagram
 * (`AgentOrchestration.jsx`, still in the tree, imported by nothing), became
 * the square MindGENIE character, and is now a **landscape "Powered by
 * MindGENIE" lockup** — character plus wordmark, 486×240 with transparency.
 *
 * A wide mark in a square right-hand column is the wrong shape for it and
 * kept it small, so it now **opens the section at full width** and the copy
 * runs two-up beneath it. That also suits what the mark says: "Powered by
 * MindGENIE" is an opening statement, not a side illustration.
 *
 * ⚠️ **The file is only 486px wide.** It is displayed at up to 560px, which
 * is already a slight upscale, and on a 2× screen it is effectively soft
 * above ~243 CSS px. It cannot be made meaningfully bigger without a larger
 * export — that is a property of the file, not of this layout.
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
        {/*
          The lockup opens the section rather than sitting beside the copy.

          It is a landscape "Powered by MindGENIE" mark — character plus
          wordmark — so a square slot in a right-hand column was the wrong
          shape for it and kept it small. Leading with it lets it run to its
          full native width, and "Powered by MindGENIE" reads as the section's
          opening statement, which is what the artwork says.

          Decorative: the eyebrow, headline and definition below carry the
          meaning, and the mark's own wordmark is repeated in the copy.
        */}
        <Reveal className="ls-mg__lockup" effect="fadeInUp">
          <img src={mindgenie.coreImage} alt="" aria-hidden="true" />
        </Reveal>

        <div className="ls-mg__head">
          <Reveal className="ls-mg__intro" effect="fadeInUp">
            <p className="ls-wwd__eyebrow">
              <span className="ls-wwd__rule ls-mg__rule" aria-hidden="true" />
              <span className="ls-eyebrow">{mindgenie.eyebrow}</span>
            </p>

            <h2 className="ls-h2 ls-mg__title">{mindgenie.headline}</h2>
          </Reveal>

          <Reveal className="ls-mg__intro" effect="fadeInUp" delay={120}>
            <p className="ls-lead ls-mg__body">{mindgenie.body}</p>

            {/* The definition, marked by a rule rather than quotation marks —
                the same treatment the source gives it. */}
            <p className="ls-mg__definition">{mindgenie.definition}</p>

            <Link className="ls-mg__cta" to={mindgenie.ctaLink}>
              {mindgenie.ctaText}
              <ArrowRight />
            </Link>
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
