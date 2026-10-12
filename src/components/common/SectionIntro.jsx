import Reveal from './Reveal';
import Html from './Html';

/**
 * The three-part opening every section in the pattern shares: a small
 * uppercase eyebrow, an oversized weight-400 heading, and a grey lead
 * paragraph. The reference opens all nine of its home-page bands this way, and
 * the repetition is the point — it is what gives the page its rhythm.
 *
 * `title` and `lead` go through `Html` because several content strings carry a
 * `<br>` to place a line break in the heading or an `&amp;` in the text.
 */
export default function SectionIntro({
  eyebrow,
  title,
  lead,
  center = false,
  titleSize = 'ls-h2',
  children,
}) {
  return (
    <Reveal className={center ? 'ls-intro ls-intro--center' : 'ls-intro'} effect="fadeInUp">
      {eyebrow && <span className="ls-eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className={titleSize}>
          <Html value={title} />
        </h2>
      )}
      {lead && (
        <p className="ls-lead">
          <Html value={lead} />
        </p>
      )}
      {children}
    </Reveal>
  );
}
