import Reveal from './Reveal';
import { LinkedIn } from './icons';

/**
 * A portrait, a name, and a title set in the mono face.
 *
 * Photographs are cropped square and anchored to the top rather than the
 * centre (`object-position: top center` in `ls.css`): the source portraits are
 * framed at different distances, and centring a square crop cuts the head off
 * the tighter ones.
 *
 * `linkedin` is optional and only one person in the content layer has one.
 */
export default function Person({ img, name, role, linkedin, delay = 0 }) {
  return (
    <Reveal className="ls-person" effect="fadeInUp" delay={delay}>
      <div className="ls-person__media">
        {/* The name sits directly below, so the photo is not described twice. */}
        <img src={img} alt="" aria-hidden="true" />
      </div>
      <h3 className="ls-person__name">{name}</h3>
      <p className="ls-person__role">{role}</p>
      {linkedin && (
        <a
          className="ls-person__link"
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${name} on LinkedIn`}
        >
          <LinkedIn size={16} />
          LinkedIn
        </a>
      )}
    </Reveal>
  );
}
