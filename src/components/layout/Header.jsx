import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, navigation } from '../../content/site';
import MobileNav from './MobileNav';
import { ChevronDown, Menu, ContentIcon } from '../common/icons';

/**
 * 88px tall, white, sticky, and flat until it has scrolled — at which point it
 * takes a 1px hairline rather than a shadow. That hairline is the only
 * elevation anywhere in this pattern.
 *
 * The reference's nav sits transparent over a white hero, which comes to the
 * same thing visually but means the header has no background to fall back on
 * once a coloured band scrolls under it. This one is opaque from the start.
 */
/**
 * How far down the page the bar may start hiding. Below this it is always
 * shown — hiding it in the first screen would make it flicker on the small
 * scrolls people make while reading the top of a page.
 */
const HIDE_BELOW = 160;

/**
 * Movement smaller than this is ignored when deciding direction. Trackpads and
 * momentum scrolling emit a lot of 1–2px jitter, and without a floor the bar
 * flickers between hidden and shown on a single gesture.
 */
const DIRECTION_THRESHOLD = 6;

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef(null);
  const lastY = useRef(0);

  /*
   * Hide on the way down, show on the way up.
   *
   * Direction is tracked in a ref rather than state: it changes on every
   * scroll event and nothing renders from it, so putting it in state would
   * re-render the whole header dozens of times a second for nothing.
   *
   * `lastY` only advances once a movement clears the threshold. Updating it on
   * every event instead would make each frame's delta ~1px, which never
   * clears the floor and the bar would never respond at all.
   */
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 8);

      // Near the top the bar is always visible, whichever way we are going.
      if (y <= HIDE_BELOW) {
        lastY.current = y;
        setHidden(false);
        return;
      }

      const delta = y - lastY.current;
      if (Math.abs(delta) < DIRECTION_THRESHOLD) return;

      lastY.current = y;
      setHidden(delta > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes, and so does a click anywhere outside the nav — without the
  // second one the only way to dismiss a dropdown opened by keyboard is to
  // activate something inside it.
  useEffect(() => {
    if (openMenu === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    const onPointerDown = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenMenu(null);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [openMenu]);

  return (
    <>
      {/*
        The bar never hides while a dropdown or the drawer is open. Sliding it
        away with its own menu hanging off it would take the panel with it, and
        the drawer's trigger lives in here.
      */}
      <header
        className="ls-header"
        data-stuck={stuck}
        data-hidden={hidden && openMenu === null && !drawerOpen}
      >
        {/* Fluid, matching the hero directly below it — a 1152px header over
            a full-bleed hero put the logo and the nav well inside the edges of
            the artwork they sit above. */}
        <div className="ls-container ls-container--fluid ls-header__inner">
          <Link className="ls-header__logo" to="/" aria-label={`${company.name} home`}>
            <img src={company.logoColor} alt={company.name} width="220" height="54" />
          </Link>

          <nav className="ls-nav" ref={navRef} aria-label="Main">
            {navigation.map((item) =>
              item.submenu ? (
                <div
                  className="ls-nav__item"
                  key={item.label}
                  data-open={openMenu === item.label}
                  // Hover is the reference's own affordance on desktop. The
                  // button below keeps it reachable without a pointer.
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="ls-nav__link"
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <span className="ls-nav__chevron">
                      <ChevronDown />
                    </span>
                  </button>

                  {openMenu === item.label && (
                    /*
                     * A horizontal row — one tile per sector, centred under
                     * the trigger.
                     *
                     * This is the third shape this panel has had, and the
                     * constraints that produced it are worth keeping:
                     *
                     * 1. The first version was two columns, with "Education"
                     *    appearing twice — once as a link, once as the
                     *    heading of the column holding its children.
                     * 2. The second was a single column with the six
                     *    platforms indented under Education. That nesting
                     *    was dropped on 2026-10-12: the platforms now live
                     *    on `/ed-tech`, so all five sectors are peers and a
                     *    row is the honest shape for them.
                     * 3. **The panel must start flush at `top: 100%`.** An
                     *    earlier version used `calc(100% + 8px)`, and that
                     *    8px sat outside the hover target — moving the
                     *    pointer down from the trigger left the item and
                     *    closed the panel before it could be reached. The
                     *    visible gap is transparent padding on this wrapper,
                     *    so the pointer never leaves.
                     */
                    <div className="ls-nav__panel ls-nav__panel--row">
                      <div className="ls-nav__panelcard">
                        {item.submenu.map((sub) => (
                          <Link
                            className="ls-nav__tile"
                            to={sub.link}
                            key={sub.label}
                            // Closed from the click that navigates, rather
                            // than from an effect watching the pathname.
                            // Navigating to the route you are already on
                            // does not change the pathname, so an effect
                            // would leave the panel hanging open over the
                            // page in exactly that case.
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="ls-nav__tileicon">
                              <ContentIcon name={sub.icon} />
                            </span>
                            <span className="ls-nav__tilelabel">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink className="ls-nav__link" to={item.link} key={item.label} end={item.link === '/'}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* The "Partner With Us" pill was removed here on 2026-10-12, with
              every other instance of that call to action. `.ls-header__cta`
              and the `cta` export both survive for whatever replaces it. */}

          <button
            type="button"
            className="ls-header__burger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      {drawerOpen && <MobileNav onClose={() => setDrawerOpen(false)} />}
    </>
  );
}
