import ErrorBoundary from '../components/common/ErrorBoundary';
import PageHero from '../components/common/PageHero';
import { banner } from '../content/about';
import Intro from '../components/about/Intro';
import Ethics from '../components/about/Ethics';
import Leadership from '../components/about/Leadership';
import AdvisoryBoard from '../components/about/AdvisoryBoard';
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
  ['AdvisoryBoard', AdvisoryBoard],
  ['StandFor', StandFor],
  ['Philosophy', Philosophy],
  ['WhyChooseUs', WhyChooseUs],
  ['Dei', Dei],
];

export default function About() {
  return (
    <>
      {/*
        A plain accent band with the title and nothing else, by request
        (2026-10-12). It previously carried the eyebrow, `intro.lead` and
        `banner.bgImg`.

        Dropping the lead here costs nothing: the redesigned `Intro` below
        renders `intro.lead` as its left-hand statement, so the sentence is
        still on the page — and it is no longer printed twice 400px apart.
        `banner.bgImg` is now unrendered; it is still in `about.js`.
      */}
      <PageHero title={banner.title} tone="plain" />
      {SECTIONS.map(([name, Section]) => (
        <ErrorBoundary key={name} name={name}>
          <Section />
        </ErrorBoundary>
      ))}
    </>
  );
}
