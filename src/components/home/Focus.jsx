import { services } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import InfoTabs from '../common/InfoTabs';

/**
 * The three strategic pillars, in the reference's numbered-accordion section.
 *
 * Three items is the smallest this section works at — below that the sticky
 * panel has nothing to stick through — but it is the right shape for content
 * where each item is a heading plus a single paragraph, and it keeps the home
 * page from being nine card grids in a row.
 *
 * Panel artwork is `mlx/about/stand-1..3.webp`, which went unused on the
 * previous two builds. `services.items[].img` is skipped: those point at the
 * Zefxa template's raster icons, which were not carried over, and the glyphs
 * in `icons.jsx` cover the same ground as vector.
 */
export default function Focus() {
  const panels = [
    '/assets/images/mlx/about/stand-1.webp',
    '/assets/images/mlx/about/stand-2.webp',
    '/assets/images/mlx/about/stand-3.webp',
  ];

  const items = services.items.map((item, i) => ({
    // Zero-padded, which is how the reference numbers a short list.
    index: String(i + 1).padStart(2, '0'),
    title: item.title,
    body: <p className="ls-body">{item.desc}</p>,
    figure: (
      <div className="ls-media">
        <img src={panels[i]} alt="" aria-hidden="true" />
      </div>
    ),
  }));

  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <SectionIntro eyebrow={services.subTitle} title={services.title} />
        <InfoTabs items={items} />
      </div>
    </section>
  );
}
