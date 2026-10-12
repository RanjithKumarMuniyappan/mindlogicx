import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import Html from './Html';
import { ContentIcon, ArrowRight } from './icons';

/**
 * A card: mono index, optional glyph, weight-400 heading, grey copy.
 *
 * Flat by design — 8px radius, 40px of padding, and no border or shadow at
 * all. A card is told apart from the page by its background tint alone, which
 * is why `tint` is not optional on a grid: `.ls-card` defaults to the same
 * smoke grey as a `--smoke` band and would vanish into one. Callers get their
 * tint from `wash(i)` in `./washes`.
 *
 * Becomes a router `Link` when given `to`, which also turns on the hover lift
 * and the trailing arrow, so a card that navigates looks like it navigates.
 */
export default function Card({
  index,
  icon,
  title,
  desc,
  tint,
  to,
  delay = 0,
  children,
  className = '',
}) {
  const classes = [
    'ls-card',
    tint ? `ls-card--${tint}` : '',
    to ? 'ls-card--link' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const body = (
    <>
      {(index || icon) && (
        <div className="ls-card__head">
          {icon && (
            <span className="ls-card__icon">
              <ContentIcon name={icon} />
            </span>
          )}
          {index && <span className="ls-index">{index}</span>}
        </div>
      )}
      {title && (
        <h3 className="ls-h4 ls-card__title">
          <Html value={title} />
        </h3>
      )}
      {desc && (
        <p className="ls-body">
          <Html value={desc} />
        </p>
      )}
      {children}
      {to && (
        <span className="ls-arrowlink" aria-hidden="true">
          Learn more
          <ArrowRight />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Reveal effect="fadeInUp" delay={delay}>
        <Link className={classes} to={to}>
          {body}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal className={classes} effect="fadeInUp" delay={delay}>
      {body}
    </Reveal>
  );
}
