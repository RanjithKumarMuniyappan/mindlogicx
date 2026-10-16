import ErrorBoundary from '../components/common/ErrorBoundary';
import Intro from '../components/about/Intro';
import Ethics from '../components/about/Ethics';
import Leadership from '../components/about/Leadership';
// import AdvisoryBoard from '../components/about/AdvisoryBoard';
import StandFor from '../components/about/StandFor';
import Philosophy from '../components/about/Philosophy';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Dei from '../components/about/Dei';

/**
 * Section order matches the previous Mindlogicx About page:
 *   intro → ethics & values → leadership → advisory board
 *         → what we stand for → philosophy → why choose us
 *         → diversity, equity & inclusion
 *
 * The hero is a plain accent band carrying only the `<h1>` (2026-10-12).
 * `intro.lead` now appears once, as the statement in `Intro`'s left column.
 *
 * **Advisory Board came back on 2026-10-12.** It was dropped on an earlier
 * build, but its content and the three advisor portraits were kept, so the
 * section was restored with the original members rather than as an empty
 * placeholder. Bands below it all flip as a result: adding a section here
 * inverts everything after it.
 *
 * The closing "What Are You Looking For?" CTA stays dropped — that call to
 * action was "Partner With Us", removed throughout on the same day. Its
 * content is still in `about.js` as `cta`.
 */
const SECTIONS = [
  ['Intro', Intro],
  ['Ethics', Ethics],
  ['Leadership', Leadership],
  /*
   * Advisory Board — commented out 2026-10-14 at the client's request.
   * `about/AdvisoryBoard.jsx`, `advisoryBoard` in `about.js` and the three
   * advisor portraits all stand; restoring it is uncommenting the import and
   * this line.
   *
   * ⚠️ **Removing it flipped every band below.** It was `--white` between two
   * `--smoke` bands, so without it Leadership and StandFor were both smoke and
   * ran together as one block. StandFor → white, Philosophy → smoke,
   * WhyChooseUs → white, Dei → smoke. Put Advisory Board back and all four
   * have to flip again.
   */
  // ['AdvisoryBoard', AdvisoryBoard],
  ['StandFor', StandFor],
  ['Philosophy', Philosophy],
  ['WhyChooseUs', WhyChooseUs],
  ['Dei', Dei],
];

export default function About() {
  return (
    <>
      {/*
        No page title band. Removed 2026-10-15 at the client's request — the
        page opened on the words "About Us" and then immediately said "Who We
        Are?" below them, which was the same statement twice.

        **`Intro`'s "Who We Are?" is the page's `h1` now.** Deleting the title
        outright would have left the page with no `h1` at all: no document
        outline for a screen reader, and nothing for a search result or a link
        preview to use as the page name. `banner.title` and `banner.bgImg` are
        still in `about.js`, unrendered.
      */}
      {SECTIONS.map(([name, Section]) => (
        <ErrorBoundary key={name} name={name}>
          <Section />
        </ErrorBoundary>
      ))}
    </>
  );
}
