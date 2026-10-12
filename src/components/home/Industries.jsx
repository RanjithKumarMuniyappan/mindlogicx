import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { industries } from '../../content/site';
import Reveal from '../common/Reveal';
import { ContentIcon, ArrowUpRight, ArrowLeft, ArrowRight } from '../common/icons';

import 'swiper/css';
import 'swiper/css/navigation';

/**
 * "Where We Apply It" — the sector carousel, built to a supplied comp.
 *
 * A heading block with a call to action on its right, then five photographic
 * cards. Three show at a time; the rest advance one at a time, right to left,
 * with prev/next controls.
 *
 * ## On Swiper
 *
 * This build deliberately avoided Swiper until now: every release through
 * 12.x carried a critical prototype-pollution advisory
 * (GHSA-hmx5-qpq5-p643), and the hero carousel was written by hand because of
 * it. That advisory does not affect **14.x** — `npm audit` reports zero
 * vulnerabilities with it installed — so the library is used here as
 * requested. The hero is still hand-rolled; it crossfades a full-screen
 * backdrop rather than sliding a track, which Swiper would not have made
 * simpler. **If Swiper is ever pinned back below 13, re-check that advisory.**
 *
 * `Navigation` is driven by this component's own buttons rather than Swiper's
 * default arrows, so they inherit the site's pill styling and sit in the
 * heading row where the comp puts them. `A11y` is on, which labels the slides
 * and the controls and keeps the whole thing operable from a keyboard.
 *
 * Autoplay pauses on hover and on keyboard focus — it does not stop for good,
 * because the controls are there to override it at any point. The track
 * `rewind`s rather than looping; see the prop below for why.
 *
 * ## The card: a framed card
 *
 * Third design, 2026-10-12. The shapes it has had, in order:
 *
 * 1. A full-bleed photograph with the copy overlaid on a scrim.
 * 2. A picture band flush to the card's top edge, a chip straddling the seam,
 *    copy on a solid body.
 * 3. **This one** — everything inset. The picture has a margin on all four
 *    sides, with a head row above it carrying the sector glyph on the left
 *    and a numbered index on the right, then the name and link below.
 *
 * Pulling the picture inside the card is the clearest silhouette change
 * available without altering what the card contains, and the numbered index
 * is the reference pattern's signature motif, which these cards had not used.
 *
 * Two properties carried over from (2) and worth keeping:
 *
 * - **No scrim.** Every photograph shows unfiltered at full contrast. Design
 *   (1) had to darken its lower half to 88% black to carry white type.
 * - **Contrast does not depend on the artwork.** Copy sits on the card, not
 *   the image, so the name measures **18.67:1** and the link **8.89:1**
 *   whatever photograph is dropped in. Design (1)'s floor had to be proved
 *   against a hypothetical pure-white image.
 *
 * The glyph's accent alternates cyan/purple by position, the rhythm the rest
 * of the page uses.
 *
 * ## Content gaps, both deliberate
 *
 * - **The cards have no description.** The comp has a paragraph on each; only
 *   the five names were supplied. `desc` renders when present.
 * - **"Explore Solutions" has no destination.** No route exists for it. It is
 *   a real `<button>` — focusable and announced — but does nothing yet.
 */
export default function Industries() {
  return (
    <section className="ls-section ls-section--white ls-ind">
      <div className="ls-container">
        {/*
          The title owns a full-width row of its own so it can set on one line;
          the lead and the controls share the row beneath it. Putting the title
          beside the controls is what forced it to wrap.
        */}
        <Reveal className="ls-ind__head" effect="fadeInUp">
          <p className="ls-wwd__eyebrow">
            <span className="ls-wwd__rule" aria-hidden="true" />
            <span className="ls-eyebrow">{industries.subTitle}</span>
          </p>

          <h2 className="ls-h2 ls-ind__title">{industries.title}</h2>

          <div className="ls-ind__meta">
            <p className="ls-body ls-ind__lead">{industries.lead}</p>

            <div className="ls-ind__controls">
              {/*
                Swiper's own arrows are replaced by these so they can carry the
                site's styling and sit where the comp puts them. The class names
                are what `navigation` is pointed at below.
              */}
              <button
                type="button"
                className="ls-ind__nav ls-ind-prev"
                aria-label="Previous sectors"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="ls-ind__nav ls-ind-next"
                aria-label="Next sectors"
              >
                <ArrowRight size={16} />
              </button>

              {/* No destination yet — see the note above. */}
              <button type="button" className="ls-pill ls-pill--ghost ls-ind__cta">
                {industries.ctaText}
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </Reveal>

        <Swiper
          className="ls-ind__swiper"
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={1.15}
          /*
           * `rewind`, not `loop`.
           *
           * Swiper's loop mode needs at least `slidesPerView * 2` slides — six
           * at three-up. There are five sectors, so loop degraded silently:
           * `loopedSlides` collapsed to 1, `activeIndex` and `realIndex` fell
           * out of step, "next" on the last card went nowhere and autoplay
           * stalled. `rewind` is Swiper's documented answer for a track too
           * short to loop: it advances one at a time and returns to the first
           * card after the last, with no duplicated slides in the DOM.
           *
           * A true continuous loop needs a sixth sector. If one is ever added,
           * swap this back to `loop`.
           */
          rewind
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{ prevEl: '.ls-ind-prev', nextEl: '.ls-ind-next' }}
          a11y={{
            containerMessage: `${industries.sectors.length} sectors`,
            prevSlideMessage: 'Previous sectors',
            nextSlideMessage: 'Next sectors',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.sectors.map((sector, i) => (
            <SwiperSlide key={sector.slug}>
              <Link
                className={`ls-ind__card ls-ind__card--${i % 2 === 1 ? 'purple' : 'cyan'}`}
                to={sector.link}
              >
                {/* `__cardhead`, not `__head` — the latter is already the
                    section's own heading block further up this file. */}
                <span className="ls-ind__cardhead">
                  <span className="ls-ind__icon">
                    <ContentIcon name={sector.icon} />
                  </span>
                  <span className="ls-index ls-ind__index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>

                <span className="ls-ind__figure">
                  {/* Decorative: the title below names the sector. */}
                  <img
                    className="ls-ind__bg"
                    src={sector.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </span>

                <span className="ls-ind__body">
                  <span className="ls-ind__name">{sector.title}</span>
                  {sector.desc && <span className="ls-ind__desc">{sector.desc}</span>}
                  <span className="ls-ind__go">
                    Explore {sector.title}
                    <ArrowUpRight size={14} />
                  </span>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
