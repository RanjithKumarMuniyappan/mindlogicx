import { termsAndConditions } from '../content/pages/legal';
import ProsePage from '../components/common/ProsePage';

/**
 * `/terms-and-conditions` — ported 2026-10-13 from the 2025 frontend's
 * `components/TermsAndConditions/TermsAndConditionsContent.tsx`.
 *
 * The text is **verbatim**. See the header comment in
 * `content/pages/legal.js` for everything carried across unchanged.
 *
 * Two things for the client to confirm before publishing, both inherited
 * from the original:
 *
 * 1. **The trademark list** (IntelliEXAMS, VEDAS, VedasLIVE, GradFirst,
 *    JobReady4U, all ®-marked) needs a currency check — registrations lapse,
 *    and this page asserts them.
 * 2. **`info@mindlogicx.com`** is published here as the address for
 *    intellectual-property notices.
 *
 * The original linked the words "Privacy Policy" to `href="#"`, a dead
 * placeholder. That link is **not reproduced** — the text stays, but it is no
 * longer a link to nowhere, and `/privacy-policy` now exists for it to point
 * at if the client wants it live.
 */
export default function TermsAndConditions() {
  return <ProsePage doc={termsAndConditions} />;
}
