import { whatWeDo } from '../../content/site';
import Reveal from '../common/Reveal';
import Html from '../common/Html';
import { ArrowLink } from '../common/Pill';
import { ContentIcon } from '../common/icons';

/**
 * "What We Do" — the knowledge-engineering section, built to the supplied
 * comp. Second on the home page, directly under the hero.
 *
 * Two columns: the argument on the left, three pillar cards on the right.
 *
 * ## The cascade
 *
 * The comp steps each card further in from the left while holding their right
 * edges together, so the stack reads as a descending staircase rather than a
 * list. That is done with `margin-left` on the 2nd and 3rd cards, not with a
 * grid — the cards have to keep their own heights, and the offsets have to
 * disappear cleanly below 992px, where the two columns stack and a staircase
 * would just look like a mistake.
 *
 * ## Where this follows the site rather than the comp
 *
 * - **No drop shadows.** The comp's cards carry a soft one; this pattern has
 *   none anywhere. They are white on the smoke band with a hairline ring,
 *   the same treatment the nav panel uses — which is also why this section
 *   must stay on a smoke band. On white the cards would vanish.
 * - **Weight 400 heading.** The comp's is light, which is the same intent.
 * - **Two brand colours only.** The comp's purple and cyan are already the
 *   palette, so nothing had to be substituted: purple for the eyebrow, the
 *   rule, the quote bar and the link; cyan only in the icon dots and the
 *   gradient under the photograph, neither of which is read.
 *
 * The image is a placeholder — see `whatWeDo.image` in `site.js`.
 */
export default function WhatWeDo() {
  return (
    <section className="ls-section ls-section--smoke ls-wwd">
      <div className="ls-container ls-wwd__grid">
        <Reveal className="ls-wwd__col" effect="fadeInUp">
          <p className="ls-wwd__eyebrow">
            {/* The short rule the comp sets before the label. */}
            <span className="ls-wwd__rule" aria-hidden="true" />
            <span className="ls-eyebrow">{whatWeDo.subTitle}</span>
          </p>

          <h2 className="ls-h2 ls-wwd__title">
            <Html value={whatWeDo.title} />
          </h2>

          <p className="ls-body ls-wwd__lead">{whatWeDo.lead}</p>

          {/*
            The pull-out. It restates the lead in tighter language — that
            repetition is in the comp, not an oversight.
          */}
          <blockquote className="ls-wwd__quote">{whatWeDo.quote}</blockquote>

          <div className="ls-wwd__media">
            {/* Decorative: the copy beside it carries the meaning. */}
            <img src={whatWeDo.image} alt="" aria-hidden="true" loading="lazy" />
          </div>

          <ArrowLink className="ls-wwd__link" to={whatWeDo.link}>
            {whatWeDo.linkText}
          </ArrowLink>
        </Reveal>

        <ul className="ls-wwd__cards">
          {whatWeDo.pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal className="ls-wwd__card" effect="fadeInUp" delay={i * 90}>
                <div className="ls-wwd__cardhead">
                  <h3 className="ls-wwd__cardtitle">{pillar.title}</h3>
                  <span className="ls-wwd__cardicon">
                    <ContentIcon name={pillar.icon} />
                  </span>
                </div>
                <p className="ls-body">{pillar.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
