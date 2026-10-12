import { useId, useState } from 'react';
import Reveal from './Reveal';
import Html from './Html';
import { Plus } from './icons';

/**
 * The reference's signature section, and the one piece of it worth copying
 * exactly: a column of numbered headings that expand in place, paired with a
 * panel on the other side that swaps to match whichever one is open and
 * sticks while the column is scrolled past it.
 *
 * Used twice — the three strategic pillars on the home page, and the ten sets
 * of operating rules on the About page. The second is why this component
 * exists: ten headings each with a short list underneath is exactly the shape
 * this section is drawn for, where the same content as flat prose is a wall.
 *
 * Three decisions worth knowing before editing:
 *
 * 1. **Panels are never unmounted.** They stay in the DOM and are collapsed
 *    with `grid-template-rows: 0fr`, so all ten sets of rules are in the HTML
 *    source and in the accessibility tree whether or not anyone opens them.
 *    Rendering only the open panel would keep nine of them away from crawlers
 *    and from anyone reading the page with assistive technology. The collapse
 *    is a visual affordance, not a content gate — which is also why the
 *    collapsed panels are not `aria-hidden`.
 *
 * 2. **One item is always open.** The side panel has nothing to show
 *    otherwise, and a blank half-width panel is worse than a redundant click
 *    doing nothing. Clicking the open heading leaves it open.
 *
 * 3. **The visual is rendered twice** — once in the sticky aside for desktop,
 *    once inside each panel for mobile, with `ls-responsive.css` choosing
 *    which is displayed. Below 992px the grid is a single column, so there is
 *    nothing for a sticky panel to stick beside; dropping it instead would
 *    lose the artwork on phones entirely.
 */
export default function InfoTabs({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <div className="ls-infotab">
      <Reveal className="ls-infotab__list" effect="fadeInUp">
        {items.map((item, i) => {
          const isOpen = i === open;
          const triggerId = `${base}-t${i}`;
          const panelId = `${base}-p${i}`;

          return (
            <div className="ls-infotab__item" key={item.title} data-open={isOpen}>
              <h3>
                <button
                  type="button"
                  id={triggerId}
                  className="ls-infotab__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(i)}
                >
                  <span className="ls-index">{item.index}</span>
                  <span className="ls-h4 ls-infotab__heading">
                    <Html value={item.title} />
                  </span>
                  <span className="ls-infotab__arrow">
                    <Plus />
                  </span>
                </button>
              </h3>

              <div className="ls-infotab__panel" id={panelId} role="region" aria-labelledby={triggerId}>
                <div>
                  <div className="ls-infotab__panel-inner">
                    {item.body}
                    {/* Mobile-only duplicate of the aside — see note 3. */}
                    {item.figure && (
                      <div className="ls-infotab__mobile-figure">{item.figure}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>

      <Reveal className="ls-infotab__aside" effect="fadeInRight">
        {/*
          All figures are layered and crossfaded with opacity rather than
          swapped, so switching items does not re-request an image that has
          already loaded and the transition has something to animate between.
        */}
        <div className="ls-infotab__figure">
          {items.map((item, i) => (
            <div key={item.title} data-active={i === open}>
              {item.figure}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
