import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { company, navigation } from '../../content/site';
import { ChevronDown, Close } from '../common/icons';

/**
 * Full-screen drawer, shown below 992px. The previous build drove this with
 * jQuery; here it is a mounted component and some state.
 *
 * Only mounted while open, so the body scroll lock can live in a plain effect
 * and unwind on unmount — no need to track whether a hidden drawer is holding
 * the lock. `Header` does the mounting.
 */
export default function MobileNav({ onClose }) {
  const [openGroup, setOpenGroup] = useState(null);
  // The third level — which sector inside the open group has its platform
  // list showing. Separate state because both can be open at once.
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    // The drawer scrolls itself; the page behind it must not.
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="ls-drawer" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="ls-drawer__top">
        {/* Same size as the header's, so opening the drawer does not appear
            to resize the brand mark. */}
        <img src={company.logoColor} alt={company.name} width="220" height="54" />
        <button type="button" className="ls-drawer__close" aria-label="Close menu" onClick={onClose}>
          <Close />
        </button>
      </div>

      <nav className="ls-drawer__list" aria-label="Main">
        {navigation.map((item) =>
          item.submenu ? (
            <div key={item.label}>
              <button
                type="button"
                className="ls-drawer__link"
                aria-expanded={openGroup === item.label}
                onClick={() =>
                  setOpenGroup((current) => (current === item.label ? null : item.label))
                }
              >
                {item.label}
                <ChevronDown size={16} />
              </button>

              {openGroup === item.label && (
                <div className="ls-drawer__sub">
                  {item.submenu.map((sub) =>
                    /*
                     * The second level. Every sector is a plain link now:
                     * the third level under Education was dropped on
                     * 2026-10-12 and those platforms live on `/ed-tech`.
                     *
                     * The nested-accordion branch below is kept because
                     * nothing about it is Education-specific — if any sector
                     * gains children again, the drawer already handles them.
                     * Nothing in `navigation` reaches it today.
                     */
                    sub.submenu ? (
                      <div key={sub.label}>
                        <button
                          type="button"
                          className="ls-drawer__sublink"
                          aria-expanded={openSub === sub.label}
                          onClick={() =>
                            setOpenSub((current) => (current === sub.label ? null : sub.label))
                          }
                        >
                          {sub.label}
                          <ChevronDown size={14} />
                        </button>

                        {openSub === sub.label && (
                          <div className="ls-drawer__leaves">
                            {/* The sector itself, so opening its list does not
                                hide the way to its own page. */}
                            <Link to={sub.link} onClick={onClose}>
                              All {sub.label}
                            </Link>
                            {sub.submenu.map((leaf) => (
                              <Link to={leaf.link} key={leaf.label} onClick={onClose}>
                                {leaf.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link to={sub.link} key={sub.label} onClick={onClose}>
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
            <Link className="ls-drawer__link" to={item.link} key={item.label} onClick={onClose}>
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* The drawer's "Partner With Us" pill was removed here on 2026-10-12
          along with every other instance. `.ls-drawer__foot` is dropped with
          it rather than left as an empty padded block — restore both together
          if a replacement call to action arrives. */}
    </div>
  );
}
