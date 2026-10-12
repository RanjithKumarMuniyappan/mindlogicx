import { Link } from 'react-router-dom';
import { ArrowRight } from './icons';

/**
 * The pattern's one button shape: a 40px-radius pill at weight 500, with no
 * shadow and no border. Four variants cover the whole site —
 *
 *   solid  ink on white, the primary action
 *   light  white on a coloured or dark band
 *   tint   a low-alpha wash of the accent with the dark end of the ramp as
 *          the label; the reference's secondary action
 *   ghost  transparent with a hairline
 *
 * Renders whichever element the destination calls for rather than forcing an
 * anchor: a router `Link` for an in-app path, a plain `<a>` for `mailto:`,
 * `tel:` and anything off-site, and a real `<button>` when there is no
 * destination at all. The reference ships its "buttons" as styled `<div>`s and
 * `<a>`s with no href — keyboard-unreachable — which is one piece of it not
 * worth copying.
 */
export default function Pill({
  variant = 'solid',
  size,
  to,
  href,
  arrow = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'ls-pill',
    `ls-pill--${variant}`,
    size === 'lg' ? 'ls-pill--lg' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {children}
      {arrow && <ArrowRight />}
    </>
  );

  // An off-site, mail or tel destination, or an in-app path that needs a full
  // page load. Anything with a scheme or a leading // is left to the browser.
  if (href) {
    const external = /^(https?:|mailto:|tel:|\/\/)/.test(href);
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

/** The same destination logic, as a plain text link with a trailing arrow. */
export function ArrowLink({ to, href, children, className = '', ...rest }) {
  const classes = ['ls-arrowlink', className].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      <ArrowRight />
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:|\/\/)/.test(href);
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to || '#'} {...rest}>
      {content}
    </Link>
  );
}
