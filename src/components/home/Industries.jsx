import { useEffect, useRef } from 'react';
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
 * ## Autoplay waits for the reader (2026-10-16)
 *
 * It used to start the moment the page loaded, so on a long home page the
 * carousel had usually rewound to the first card again before anyone scrolled
 * far enough to see it — the movement was spent on an empty screen.
 *
 * Swiper is now told to autoplay, and that autoplay is **stopped immediately
 * on init**; an `IntersectionObserver` starts it when the section is actually
 * in view, then disconnects. Stopping at init rather than omitting the config
 * matters: `swiper.autoplay` only exists when the Autoplay module has
 * something to configure, so omitting it would leave nothing to start later.
 *
 * The threshold is 0.35 — about a third of the band on screen — so it begins
 * when the cards are genuinely visible rather than as the first pixel crosses
 * the fold.
 *
 * **It never starts under `prefers-reduced-motion`.** A carousel that
 * advances on its own is exactly what WCAG 2.2.2 is about; the prev/next
 * controls still work, so nothing is unreachable.
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
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          swiperRef.current?.autoplay?.start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ls-section ls-section--white ls-ind" ref={sectionRef}>
      <div className="ls-container">
        {/*
          Heading, then the lead on its own full-width row — both set on a
          single line. The controls moved below the carousel on 2026-10-12,
          which is also what freed the lead to run full width.
        */}
        <Reveal className="ls-ind__head" effect="fadeInUp">
          <p className="ls-wwd__eyebrow">
            <span className="ls-wwd__rule" aria-hidden="true" />
            <span className="ls-eyebrow">{industries.subTitle}</span>
          </p>

          <h2 className="ls-h2 ls-ind__title">{industries.title}</h2>

          <p className="ls-body ls-ind__lead">{industries.lead}</p>
        </Reveal>

        <Swiper
          className="ls-ind__swiper"
          modules={[Autoplay, Navigation, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            /* Configured above, but held until the reader arrives — see the
               note at the top of this file. */
            swiper.autoplay?.stop();
          }}
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
                    section's own heading block further up this file.

                    The numbered index that sat opposite the glyph was removed
                    on 2026-10-12 with every other one on the site, so this row
                    now holds the glyph alone. */}
                <span className="ls-ind__cardhead">
                  <span className="ls-ind__icon">
                    <ContentIcon name={sector.icon} />
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

        {/*
          The prev/next controls, below the carousel since 2026-10-12.
          Swiper's own arrows are replaced by these so they carry the site's
          styling; the class names are what `navigation` above is pointed at,
          and it resolves them by selector, so moving them in the DOM needs no
          change to the Swiper config.

          They stay *after* the track in source order, which is also the right
          reading order — you reach the controls having passed what they
          control.
        */}
        <div className="ls-ind__controls">
          <button type="button" className="ls-ind__nav ls-ind-prev" aria-label="Previous sectors">
            <ArrowLeft size={16} />
          </button>
          <button type="button" className="ls-ind__nav ls-ind-next" aria-label="Next sectors">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
