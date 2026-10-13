import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import Reveal from './Reveal';

/**
 * A long-form document page: Privacy Policy, Terms & Conditions, and anything
 * else that is mostly headings and paragraphs.
 *
 * It takes the structured shape the content modules in `content/pages/` use —
 * `{ title, intro[], sections[{ heading, level, blocks[] }] }` — rather than a
 * blob of HTML. That keeps the legal text as data: searchable, diffable, and
 * impossible to break with a stray tag.
 *
 * ## ⚠️ These run at the full page measure, by request
 *
 * `--measure` is 1480px, which puts roughly **190 characters on a line** —
 * against the 60–80 that is comfortable to read. A long measure makes the eye
 * lose its place on the return sweep, and that costs most in exactly this
 * kind of dense, unbroken legal text.
 *
 * It was capped at 68ch until 2026-10-13. If the lines ever read as too long,
 * `max-width` on `.ls-prose` is the single line to restore.
 *
 * ## Heading levels come from the source
 *
 * `level` is 3 or 4, matching the `<h3>`/`<h4>` the original page used, so the
 * document outline survives the port. They are rendered as real `h3`/`h4`
 * elements — not styled divs — because for a policy document the outline *is*
 * the navigation for anyone using a screen reader.
 */
function Block({ block }) {
  /* Only `p` and `ul` appear in the ported documents — there is deliberately
     no ordered-list branch, since numbered markers were removed site-wide. Add
     one here if a future document genuinely needs numbered clauses. */
  if (block.type === 'ul') {
    return (
      <ul className="ls-prose__list">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ul>
    );
  }

  /*
   * A paragraph may carry one link, in either of two forms:
   *
   *   `to`   — an internal route, rendered as a router `Link`
   *   `href` — anything else (`mailto:`, an external site), rendered as `<a>`
   *
   * **Both are needed and the distinction is load-bearing.** The first
   * version read only `to`; the Terms page's `mailto:info@mindlogicx.com`
   * therefore reached `<Link to={undefined}>`, which React Router resolves to
   * the *current* path — so the email address silently became a link back to
   * Terms & Conditions. An external href must never go through `Link`.
   *
   * The phrase is matched once and falls back to plain text if it is not
   * found, so a typo in `link.text` degrades to the paragraph as written
   * rather than throwing.
   */
  if (block.link) {
    const at = block.text.indexOf(block.link.text);
    if (at !== -1) {
      const before = block.text.slice(0, at);
      const after = block.text.slice(at + block.link.text.length);
      const label = block.link.text;

      return (
        <p>
          {before}
          {block.link.to ? (
            <Link className="ls-prose__link" to={block.link.to}>
              {label}
            </Link>
          ) : (
            <a className="ls-prose__link" href={block.link.href}>
              {label}
            </a>
          )}
          {after}
        </p>
      );
    }
  }

  return <p>{block.text}</p>;
}

export default function ProsePage({ doc }) {
  return (
    <>
      {/* `tight`: the document starts immediately under the heading, so the
          usual gap below a page title is closed here. */}
      <PageHero title={doc.title} tone="plain" tight />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <Reveal className="ls-prose" effect="fadeInUp">
            {doc.intro?.map((paragraph) => (
              <p className="ls-prose__intro" key={paragraph.slice(0, 48)}>
                {paragraph}
              </p>
            ))}

            {doc.sections?.map((section) => {
              const Heading = section.level === 3 ? 'h3' : 'h4';
              return (
                <section className="ls-prose__section" key={section.heading}>
                  <Heading
                    className={
                      section.level === 3 ? 'ls-prose__h3' : 'ls-prose__h4'
                    }
                  >
                    {section.heading}
                  </Heading>
                  {section.blocks?.map((block, i) => (
                    <Block block={block} key={`${section.heading}-${i}`} />
                  ))}
                </section>
              );
            })}
          </Reveal>
        </div>
      </section>
    </>
  );
}
