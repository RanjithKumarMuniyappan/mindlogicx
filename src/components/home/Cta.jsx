import { cta } from '../../content/site';
import Reveal from '../common/Reveal';
import Pill from '../common/Pill';

/**
 * The closing band: solid accent, one line of display type, one pill.
 *
 * Inset inside the container with a 12px radius rather than running
 * edge-to-edge, so it reads as a card on the page the way the reference's
 * closing bands do, and the white footer below it is not fighting a
 * full-bleed colour.
 *
 * The band behind it is set by the section above rather than chosen here —
 * the MindGENIE band above is ink, so this is white. It has flipped several
 * times as sections were added to and removed from the page and inverted
 * everything below them; check it against `pages/Home.jsx` before changing
 * it. Two bands of the same colour meeting would stack their padding into a
 * dead gap with the cyan card as the only marker of where one section ended.
 */
export default function Cta() {
  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <Reveal className="ls-cta" effect="fadeInUp">
          <h2 className="ls-h2">{cta.content}</h2>
          {/* `solid` (purple) rather than `light`: the band behind it is now
              cyan, and a white pill on cyan is a 2.53:1 edge. Purple on cyan
              is 3.51:1 as a shape, with its white label at 8.89:1. */}
          <Pill variant="solid" size="lg" to={cta.btnLink} arrow>
            {cta.btnText}
          </Pill>
        </Reveal>
      </div>
    </section>
  );
}
