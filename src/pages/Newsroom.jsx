import { footer } from '../content/site';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import Reveal from '../components/common/Reveal';
import { ArrowUpRight } from '../components/common/icons';

/**
 * `/news-room` — built 2026-10-13. It was already linked from the footer and
 * resolved to `Placeholder`.
 *
 * ## ⚠️ The whole page is scaffolding
 *
 * Four groups — Awards, MOUs, Events, In the News — and **none of them has
 * real entries**. Awards and MOUs are claims about things the company has
 * won and signed; press coverage is a claim that someone published
 * something. Writing any of it would be inventing a record, so each group
 * renders an explicit "to be supplied" state instead.
 *
 * The three events the client named — the Indonesia event, the SMC signup,
 * and ten years of back catalogue — appear as titled cards marked
 * `placeholder: true`, so the page shows the shape it will take without
 * putting words in anyone's mouth about what happened at them.
 *
 * ## Filling it in
 *
 * Push entries onto a group's `items` array in `footer.newsroomPage`. An
 * entry is `{ title, date, summary, image, link }` — only `title` is
 * required, and the card renders whichever of the rest are present. Dropping
 * `placeholder: true` from an event turns it from a stub into a real card.
 *
 * A group with no items keeps its heading and blurb: an empty Awards section
 * that says so is more honest than one quietly missing from the page, and it
 * is a visible reminder that something is still owed.
 */
function EntryCard({ entry }) {
  const card = (
    <>
      {entry.image && (
        <span className="ls-news__figure">
          <img src={entry.image} alt="" aria-hidden="true" loading="lazy" />
        </span>
      )}

      <span className="ls-news__body">
        {entry.date && <span className="ls-news__date">{entry.date}</span>}
        <span className="ls-news__title">{entry.title}</span>
        {entry.summary && <span className="ls-news__summary">{entry.summary}</span>}

        {entry.placeholder && (
          <span className="ls-news__pending">Details to follow</span>
        )}

        {entry.link && (
          <span className="ls-news__go">
            Read more
            <ArrowUpRight size={14} />
          </span>
        )}
      </span>
    </>
  );

  /* Only linked once there is somewhere to go. A card that looks clickable
     and is not is worse than one that plainly is not yet. */
  return entry.link ? (
    <a className="ls-news__card ls-news__card--link" href={entry.link}>
      {card}
    </a>
  ) : (
    <div className="ls-news__card">{card}</div>
  );
}

export default function Newsroom() {
  const page = footer.newsroomPage;

  return (
    <>
      <PageHero title={page.title} tone="plain" />

      {page.groups.map((group, i) => (
        <section
          className={`ls-section ls-section--${i % 2 === 1 ? 'smoke' : 'white'}`}
          id={group.id}
          key={group.id}
        >
          <div className="ls-container">
            <SectionIntro title={group.title} lead={group.blurb} />

            {group.items.length > 0 ? (
              <ul className="ls-news__grid">
                {group.items.map((entry, n) => (
                  <li key={entry.title}>
                    <Reveal effect="fadeInUp" delay={(n % 3) * 70}>
                      <EntryCard entry={entry} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : (
              /* Deliberately visible. See the note at the top of this file. */
              <Reveal className="ls-news__empty" effect="fadeInUp">
                Content to be supplied.
              </Reveal>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
