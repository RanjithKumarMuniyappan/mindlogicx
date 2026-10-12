import Reveal from './Reveal';

/**
 * The two-up band: a picture on one side, copy on the other.
 *
 * `reverse` puts the media second on desktop. It stops applying below 992px,
 * where the grid is one column — see `ls-responsive.css`. Once there is a
 * single column, "media second" would separate a section's copy from its own
 * picture by the whole height of the copy, so the media always leads on
 * mobile.
 *
 * The entrance animations come in from opposite sides so the two halves read
 * as arriving together rather than one after the other.
 */
export default function FeatureLayout({ media, reverse = false, className = '', children }) {
  return (
    <div
      className={[
        'ls-feature',
        reverse && 'ls-feature--reverse',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Reveal
        className="ls-feature__media"
        effect={reverse ? 'fadeInRight' : 'fadeInLeft'}
      >
        {media}
      </Reveal>
      <Reveal
        className="ls-feature__body"
        effect={reverse ? 'fadeInLeft' : 'fadeInRight'}
      >
        {children}
      </Reveal>
    </div>
  );
}
