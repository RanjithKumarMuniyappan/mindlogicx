/**
 * ⚠️ **NEITHER DRAWING IS RENDERED ANY MORE.** On 2026-10-17 the client
 * supplied photographs for both hero slots — `/assets/images/intelliosm/
 * intro.webp` and `/assets/images/partner/intro.webp` — and the pages use
 * those. Nothing imports this module.
 *
 * It is kept rather than deleted for two reasons. It records *why* a drawing
 * stood in each slot, which is the argument below and still applies if either
 * photograph has to come off; and the IntelliOSM one is the only artwork on
 * this site that states the AI/human colour split the workflow diagram
 * depends on, so it is a useful reference for anyone editing `.ls-osm__flow`.
 *
 * Restoring either is a two-line change: import it and put it back in the
 * `media` prop, inside `.ls-osm__artframe` / `.ls-ptr__artframe`, both of
 * which are still in `ls.css`.
 *
 * ---
 *
 * The two drawings the IntelliOSM and Partner pages needed and the asset
 * folder did not have.
 *
 * ## Why these are drawn and not photographs or generated bitmaps
 *
 * The IntelliOSM deck asks for "a product interface with answer script,
 * recommended marks, evaluator comments and approval controls" and, in its
 * recommendations, for "product-centric interface visuals rather than generic
 * AI illustrations".
 *
 * A **photorealistic mockup would be a lie**: IntelliOSM's MVP is targeted for
 * 15 November 2026 and the deck says outright that "MVP feature availability
 * requires Product Engineering sign-off". Any screen rendered here would
 * depict controls, numbers and layout that nobody has approved, on a page that
 * a visitor reads as a description of a real product.
 *
 * So these are **obviously diagrams** — flat, line-art, in the site palette,
 * with no legible text and no numbers that mean anything. They carry the
 * *shape* of the deck's request (a script, marks in the margin, a comment, an
 * approve control) without claiming to show software. This is the same
 * decision `TintPanel.jsx` and `ProductMockup.jsx` already record.
 *
 * Both are `aria-hidden` and purely decorative: every idea in them is also
 * written out in the copy beside them.
 *
 * ## Colour
 *
 * Shapes are `currentColor` at low opacity, so the drawing takes the colour of
 * whatever band it sits in, with two exceptions that are the whole point of
 * the IntelliOSM one:
 *
 *   - the **AI recommendation** chip is `--accent-fill` (cyan)
 *   - the **human approval** control is `--brand-purple`
 *
 * The deck asks to "distinguish AI marking visually from evaluator approval",
 * and the workflow diagram further down the page uses exactly the same two
 * colours for exactly the same split. Changing one without the other breaks
 * the only visual grammar this page has.
 */

/* ── Shared units ───────────────────────────────────────────────────────── */

/** A rounded bar: the stand-in for a line of handwriting or a label. */
function Bar({ x, y, w, h = 5, o = 0.18, r = 2.5, fill = 'currentColor' }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} fillOpacity={o} />;
}

/**
 * The marking workspace.
 *
 * Left: an answer script, ruled with bars, one passage picked out. Right: the
 * evaluator's rail — a cyan AI-recommended mark, a comment, and a purple
 * approve control at the bottom. The two columns are the page's argument in
 * one picture: the machine proposes on one side, the person decides on the
 * other.
 */
export function MarkingArt({ className = '' }) {
  return (
    <svg
      className={['ls-osm__art', className].filter(Boolean).join(' ')}
      viewBox="0 0 320 236"
      role="presentation"
      aria-hidden="true"
    >
      {/* Window */}
      <rect x="10" y="10" width="300" height="216" rx="12" fill="var(--white)" />
      <rect
        x="10"
        y="10"
        width="300"
        height="216"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
      />
      <path d="M10 22a12 12 0 0 1 12-12h276a12 12 0 0 1 12 12v12H10V22Z" fill="currentColor" fillOpacity="0.06" />
      <circle cx="24" cy="22" r="2.6" fill="currentColor" fillOpacity="0.28" />
      <circle cx="33" cy="22" r="2.6" fill="currentColor" fillOpacity="0.18" />
      <circle cx="42" cy="22" r="2.6" fill="currentColor" fillOpacity="0.18" />
      <Bar x={60} y={19} w={70} h={6} o={0.2} />

      {/* ── The answer script ── */}
      <rect x="24" y="48" width="162" height="162" rx="8" fill="currentColor" fillOpacity="0.045" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Bar key={i} x={36} y={62 + i * 18} w={i % 3 === 2 ? 96 : 138} h={5} o={0.16} />
      ))}
      {/* The passage under evaluation, underscored rather than highlighted:
          a fill behind text is the one thing here that could be mistaken for
          a real selection state. */}
      <Bar x={36} y={98} w={138} h={5} o={0.34} />
      <Bar x={36} y={116} w={138} h={5} o={0.34} />
      <rect x="36" y="128" width="138" height="2" rx="1" fill="var(--accent-fill)" fillOpacity="0.55" />

      {/* ── The evaluator's rail ── */}

      {/* AI recommendation — cyan. */}
      <rect x="202" y="48" width="94" height="52" rx="8" fill="var(--accent-fill)" fillOpacity="0.1" />
      <rect
        x="202"
        y="48"
        width="94"
        height="52"
        rx="8"
        fill="none"
        stroke="var(--accent-fill)"
        strokeOpacity="0.45"
      />
      <circle cx="216" cy="63" r="5" fill="var(--accent-fill)" fillOpacity="0.8" />
      <Bar x={227} y={59} w={44} h={6} o={0.5} fill="var(--accent-fill)" />
      {/* The recommended mark, as a shape. No digits — a number here would be
          read as a real score out of a real total. */}
      <rect x="214" y="76" width="30" height="14" rx="7" fill="var(--accent-fill)" fillOpacity="0.75" />
      <Bar x={252} y={80} w={32} h={6} o={0.28} fill="var(--accent-fill)" />

      {/* Evaluator comment. */}
      <rect x="202" y="112" width="94" height="48" rx="8" fill="currentColor" fillOpacity="0.055" />
      <Bar x={214} y={124} w={54} h={5} o={0.26} />
      <Bar x={214} y={136} w={70} h={4} o={0.15} />
      <Bar x={214} y={146} w={48} h={4} o={0.15} />

      {/* Approval control — purple. The tick is the only glyph in the drawing
          that states something, and what it states is that a person signed. */}
      <rect x="202" y="172" width="94" height="38" rx="19" fill="var(--brand-purple)" fillOpacity="0.12" />
      <rect
        x="202"
        y="172"
        width="94"
        height="38"
        rx="19"
        fill="none"
        stroke="var(--brand-purple)"
        strokeOpacity="0.45"
      />
      <path
        d="m219 191 5 5 9-10"
        fill="none"
        stroke="var(--brand-purple)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Bar x={241} y={188} w={42} h={6} o={0.55} fill="var(--brand-purple)" />
    </svg>
  );
}

/**
 * The partner drawing: one engineering core, several routes to market.
 *
 * The Partner deck asks for "global business collaboration and commercial
 * growth" and warns, in the same table, that the language must stay "free
 * from unsupported claims". A stock photograph of handshakes would be neither
 * global nor Mindlogicx's, and an upward revenue curve would be a performance
 * claim nobody has made — the deck's own copy is careful to say
 * "opportunities" throughout, never results.
 *
 * So the drawing states the structure instead: a purple core (the OEM) with
 * cyan nodes around it (partners) on a ring, each connected back. Nothing in
 * it asserts a number.
 */
export function PartnerArt({ className = '' }) {
  /* Six nodes on a circle. Laid out by angle rather than by hand so the ring
     stays even if the count changes. Starts at -90° so a node sits at top. */
  const CX = 160;
  const CY = 130;
  const R = 86;
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const angle = (-90 + i * 60) * (Math.PI / 180);
    return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle), i };
  });

  return (
    <svg
      className={['ls-ptr__art', className].filter(Boolean).join(' ')}
      viewBox="0 0 320 260"
      role="presentation"
      aria-hidden="true"
    >
      {/* The orbit. */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx={CX} cy={CY} r={R + 26} fill="none" stroke="currentColor" strokeOpacity="0.07" />

      {/* Spokes, drawn before the nodes so they tuck underneath. */}
      {nodes.map((n) => (
        <line
          key={`spoke-${n.i}`}
          x1={CX}
          y1={CY}
          x2={n.x}
          y2={n.y}
          stroke="var(--accent-fill)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}

      {/* Partner nodes. */}
      {nodes.map((n) => (
        <g key={`node-${n.i}`}>
          <circle cx={n.x} cy={n.y} r="20" fill="var(--white)" />
          <circle cx={n.x} cy={n.y} r="20" fill="var(--accent-fill)" fillOpacity="0.14" />
          <circle
            cx={n.x}
            cy={n.y}
            r="20"
            fill="none"
            stroke="var(--accent-fill)"
            strokeOpacity="0.5"
          />
          <circle cx={n.x} cy={n.y} r="7" fill="var(--accent-fill)" fillOpacity="0.75" />
        </g>
      ))}

      {/* The OEM core. Purple, because on this site purple is the thing that
          holds and cyan is the thing that spreads. */}
      <circle cx={CX} cy={CY} r="40" fill="var(--white)" />
      <circle cx={CX} cy={CY} r="40" fill="var(--brand-purple)" fillOpacity="0.1" />
      <circle cx={CX} cy={CY} r="40" fill="none" stroke="var(--brand-purple)" strokeOpacity="0.45" />
      {/* A small stack: product on product on product. */}
      <rect x={CX - 21} y={CY - 17} width="42" height="10" rx="5" fill="var(--brand-purple)" fillOpacity="0.8" />
      <rect x={CX - 21} y={CY - 4} width="42" height="10" rx="5" fill="var(--brand-purple)" fillOpacity="0.55" />
      <rect x={CX - 21} y={CY + 9} width="42" height="10" rx="5" fill="var(--brand-purple)" fillOpacity="0.3" />
    </svg>
  );
}
