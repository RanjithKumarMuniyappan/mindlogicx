import { privacyPolicy } from '../content/pages/legal';
import ProsePage from '../components/common/ProsePage';

/**
 * `/privacy-policy` — ported 2026-10-13 from the 2025 frontend's
 * `components/PrivacyPolicy/PrivacyPolicyContent.tsx`.
 *
 * The text is **verbatim**, including its ALL-CAPS headings and its
 * inconsistencies. See the header comment in `content/pages/legal.js` for the
 * full list of what was carried across unchanged and why.
 *
 * Two things the client needs to resolve before this is published — neither
 * is a porting artefact, both are in the original document:
 *
 * 1. **"THE PRIVACY POLICY STATEMENT IS EFFECTIVE FROM AUG 2020"** is a
 *    heading with no body text beneath it, and that date is now stale.
 * 2. **The document simply stops** after "INFORMATION SECURITY & ACCURACY".
 *    There is no data-retention, user-rights or grievance-contact section —
 *    which a privacy policy claiming to follow ISO/IEC 29100 would normally
 *    carry, and which several jurisdictions require.
 *
 * Neither was invented around: the page renders exactly what exists.
 */
export default function PrivacyPolicy() {
  return <ProsePage doc={privacyPolicy} />;
}
