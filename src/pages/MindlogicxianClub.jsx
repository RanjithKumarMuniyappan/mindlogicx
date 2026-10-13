import { useState } from 'react';
import { mindlogicxianClubPage as club } from '../content/pages/mindlogicxian-club';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Person from '../components/common/Person';
import Lightbox from '../components/common/Lightbox';
import { ChevronDown } from '../components/common/icons';

/**
 * `/mindlogicxian-club` — ported 2026-10-13 from
 * https://www.mindlogicx.com/mindlogicxian_club/ and the 2025 frontend's
 * `src/components/MindlogicxianClub/`. Copy is **verbatim**, including the
 * source's own typos ("trofy", "kabbadi", "Independance") and its decorative
 * Unicode.
 *
 * Reached from the "Explore the Club" button on `/careers`.
 *
 * ## The title is this project's, because the source has none
 *
 * The live page's banner renders a **single full stop** — `pageTitle="."` —
 * with the real title sitting commented out one line above it. "Mindlogicxian
 * Club" is taken from the commented-out line and the footer link rather than
 * reproducing the placeholder.
 *
 * ⚠️ **Singular vs plural is inconsistent in the source** and is left that
 * way: the body copy and headings say "Mindlogicxians Club", the menu and this
 * route say "Mindlogicxian Club". One of them should win before launch.
 *
 * ## The portraits
 *
 * The governing board's images are stylised, AI-generated superhero renders —
 * that is the source's own art direction, not an interpretation. They are
 * carried as found. They are also 2:3 full-body compositions, so this page
 * overrides the roster's usual square crop (see `.ls-club__board` in
 * `ls.css`); cropping them square cuts each person off at the chest.
 *
 * **The source gives the four board groups no visible headings** — every
 * `heading` is null, and the grouping survives only in the designations
 * ("Secretary - Cultural", "Secretary - Food Committee"). They are therefore
 * rendered as one continuous roster. Inventing group labels would be writing
 * organisational structure that the client never published.
 *
 * ## ⚠️ Real people, unverified details
 *
 * Sixteen named employees with job titles. Several things need a human check
 * before this is public:
 *
 * - **Priyanka and "CJ Priyanka" share one portrait file** — one of them is
 *   almost certainly showing the wrong face.
 * - Portrait filenames disagree with displayed names for Poovendhan, Kritika,
 *   Arvind and Shrinivas; five people are listed by a single name only.
 * - Four more members (Anjali, Riya Rai, Zabiulla A, Pranay Kumar) are
 *   commented out in the source. They are **not** rendered here, and their
 *   portraits were not copied — reinstating them is a content decision.
 *
 * ## The gallery
 *
 * 628 photographs across 7 years and 28 categories, served from Mindlogicx's
 * own S3 bucket as hard-coded URLs — there is no API and no CMS behind it, and
 * the source array is literally named `MOCK_GALLERY_DATA`.
 *
 * Only the 28 cover images load with the page; a category's photographs are
 * mounted when it is opened. Loading all 628 up front would be roughly 600
 * requests to a third-party host before anyone scrolled.
 *
 * ⚠️ **The captions are unreliable** and are reproduced as written: all 64 of
 * the 2018 images are captioned "Christmas celebration", and the 2025 yoga
 * category is titled "Sports Activities &amp; Competitions". Several captions
 * name individual employees. There is also a 2009–2024 gap in the years.
 *
 * Opening a category reveals its photographs in the page; clicking one opens
 * the full-screen viewer (`Lightbox`), which pages through **that category**
 * and zooms. The source's own `aria-*` labels are reused from the content
 * module's `ui` block rather than invented here.
 *
 * Not carried from the source's viewer: fullscreen and slideshow autoplay.
 * Those labels are still in `ui` if either is wanted later.
 */

function Gallery({ section }) {
  /* One open category at a time, keyed `year:index`. Closed is the default:
     the covers are the index, and the photographs are the detail. */
  const [open, setOpen] = useState(null);

  /*
   * The viewer. Holds the *category's* image list rather than one photograph,
   * so its prev/next walk that category and stop at its edges — paging across
   * a year boundary into a different event would be disorienting, and the
   * counter ("3 / 24") would stop meaning anything.
   *
   * `null` while closed, so the dialog is unmounted and its scroll lock and
   * key handlers unwind with it.
   */
  const [viewer, setViewer] = useState(null);

  /* The source's own lightbox labels, carried through — see the content
     module's `ui` block. */
  const ui = section.ui ?? {};

  return (
    <>
      {section.years.map((group) => {
        const total = group.subStacks.reduce((n, s) => n + s.images.length, 0);

        return (
          <div className="ls-gal__year" key={group.year}>
            <Reveal className="ls-gal__yearhead" effect="fadeInUp">
              <h3 className="ls-gal__yearnum">{group.year}</h3>
              <span className="ls-gal__yearcount">
                {total} {total === 1 ? 'photo' : 'photos'}
              </span>
            </Reveal>

            <ul className="ls-gal__stacks">
              {group.subStacks.map((stack, i) => {
                const key = `${group.year}:${i}`;
                const isOpen = open === key;
                const panelId = `gal-${group.year}-${i}`;
                const cover = stack.images[0];

                return (
                  <li key={key}>
                    <Reveal effect="fadeInUp" delay={(i % 3) * 70}>
                      <button
                        className="ls-gal__stack"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : key)}
                      >
                        <span className="ls-media ls-media--4x3">
                          {/* The title sits directly below. */}
                          <img src={cover.src} alt="" aria-hidden="true" loading="lazy" />
                        </span>
                        <span className="ls-gal__stacktitle">{stack.title}</span>
                        <span className="ls-gal__stackmeta">
                          {stack.images.length}{' '}
                          {stack.images.length === 1 ? 'photo' : 'photos'}
                          <ChevronDown className="ls-gal__chev" size={14} />
                        </span>
                      </button>
                    </Reveal>

                    {/* Mounted only while open — see the note above. */}
                    {isOpen && (
                      <ul className="ls-gal__photos" id={panelId}>
                        {stack.images.map((img, n) => (
                          <li key={img.id}>
                            <figure className="ls-gal__photo">
                              {/* Opens the viewer at this photograph. A real
                                  button, so it is reachable by keyboard — the
                                  viewer then owns the keyboard until it is
                                  closed, and hands focus back here. */}
                              <button
                                className="ls-gal__photobtn"
                                type="button"
                                onClick={() => setViewer({ images: stack.images, start: n })}
                                aria-label={`${img.title || 'Photograph'} — view larger`}
                              >
                                <span className="ls-media ls-media--4x3">
                                  <img src={img.src} alt={img.alt} loading="lazy" />
                                </span>
                              </button>
                              {img.title && <figcaption>{img.title}</figcaption>}
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {viewer && (
        <Lightbox
          images={viewer.images}
          startIndex={viewer.start}
          labels={{
            dialog: section.heading,
            close: ui.ariaCloseImage,
            prev: ui.ariaPrevImage,
            next: ui.ariaNextImage,
            zoomIn: ui.ariaZoomIn,
            zoomOut: ui.ariaZoomOut,
          }}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}

export default function MindlogicxianClub() {
  const s = Object.fromEntries(club.sections.map((x) => [x.id, x]));
  const welcome = s.welcome;
  const who = s['who-we-are'];
  const objectives = s.objectives;
  const board = s['governing-board'];
  const activities = s['club-activities'];
  const gallery = s['memories-gallery'];

  /* The first line of "Who We Are" is a strapline, not a paragraph. */
  const [whoLead, ...whoBody] = who.body;

  return (
    <>
      <PageHero title={club.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            media={
              <img
                className="ls-club__logo"
                src={welcome.logoImage}
                alt="The Mindlogicxians Club emblem"
              />
            }
          >
            <h2 className="ls-h2">{welcome.heading}</h2>
            {welcome.strapline.map((line) => (
              <p className="ls-club__strapline" key={line}>
                {line}
              </p>
            ))}
            {welcome.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      {/*
        No heading: "Who We Are" is commented out in the source. The strapline
        carries the band instead, so nothing is invented to fill the gap.
      */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img src={who.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{whoLead}</h2>
            {whoBody.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            media={
              <span className="ls-media ls-media--4x3">
                <img src={objectives.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            {/* "Objectives:" — the trailing colon is the source's. */}
            <h2 className="ls-h2 ls-h2--sm">{objectives.heading}</h2>
            <ul className="ls-bullets">
              {objectives.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FeatureLayout>
        </div>
      </section>

      {/* One roster, not four — the source labels no groups. See above. */}
      <section className="ls-section ls-section--smoke ls-club__board">
        <div className="ls-container">
          <SectionIntro title={board.heading} center />
          <ul className="ls-roster ls-mt-md">
            {board.groups.flatMap((g) => g.members).map((member, i) => (
              <li key={`${member.name}-${member.designation}`}>
                <Person
                  img={member.image}
                  name={member.name}
                  role={member.designation}
                  delay={(i % 3) * 70}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={activities.heading} lead={activities.subheading} center />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {activities.items.map((item, i) => (
              <li key={item.category}>
                {/* The source wraps each of these in a "View Details" link to
                    `/portfolio/portfolio-details/` — a leftover template route
                    that has no club content behind it. Not carried. */}
                <Reveal className="ls-mediacard" effect="fadeInUp" delay={(i % 3) * 70}>
                  <span className="ls-media ls-media--4x3">
                    <img src={item.image} alt="" aria-hidden="true" loading="lazy" />
                  </span>
                  <span className="ls-club__cat">{item.category}</span>
                  <p className="ls-club__actdesc">{item.title}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={gallery.heading} center />
          <div className="ls-mt-md">
            <Gallery section={gallery} />
          </div>
        </div>
      </section>
    </>
  );
}
