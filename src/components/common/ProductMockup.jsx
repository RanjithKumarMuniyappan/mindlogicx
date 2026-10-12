/**
 * A stand-in for the product screenshots in the split-layout platforms
 * section, until the real ones arrive.
 *
 * Drawn rather than generated. Three reasons it is an SVG and not a bitmap:
 *
 *   1. It cannot be mistaken for a real screenshot. Each one is obviously a
 *      diagram — the same decision `TintPanel.jsx` records for the ethics
 *      accordion. Nothing here depicts an actual Mindlogicx interface, and no
 *      number, label or chart in it means anything.
 *   2. It takes its colour from the product it belongs to, so the five read as
 *      a set without five separate image files.
 *   3. It weighs nothing and needs no network request.
 *
 * **Swapping in the real images:** replace the `<ProductMockup>` element in
 * `PlatformsAlt.jsx` with an `<img>`. The wrapper around it already supplies
 * the frame, the aspect ratio and the tinted backdrop, so nothing else has to
 * change.
 *
 * Five variants, one per product, chosen so the row does not read as the same
 * picture five times: a dashboard, a course list, a people board, a marking
 * view and a document timeline.
 */

/* Shared geometry. The viewBox is the frame; the window sits inside it with a
   margin so the tinted backdrop shows around the edges. */
const VB = { w: 220, h: 160 };

/** The app window every variant is drawn inside. */
function Window({ children }) {
  return (
    <>
      <rect x="18" y="14" width="184" height="132" rx="9" fill="white" />
      <rect
        x="18"
        y="14"
        width="184"
        height="132"
        rx="9"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
      />
      {/* Title bar */}
      <path
        d="M18 23a9 9 0 0 1 9-9h166a9 9 0 0 1 9 9v6H18v-6Z"
        fill="currentColor"
        fillOpacity="0.07"
      />
      <circle cx="28" cy="21.5" r="2.2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="36" cy="21.5" r="2.2" fill="currentColor" fillOpacity="0.2" />
      <circle cx="44" cy="21.5" r="2.2" fill="currentColor" fillOpacity="0.2" />
      {children}
    </>
  );
}

/** A rounded bar, the unit most of these are built from. */
function Bar({ x, y, w, h = 5, o = 0.18, r = 2.5 }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill="currentColor" fillOpacity={o} />;
}

/* 0 — dashboard: sidebar, two stat tiles, a bar chart. */
function Dashboard() {
  const bars = [14, 22, 17, 28, 24, 34];
  return (
    <Window>
      <rect x="18" y="29" width="42" height="117" fill="currentColor" fillOpacity="0.05" />
      {[0, 1, 2, 3].map((i) => (
        <Bar key={i} x={25} y={39 + i * 12} w={28} o={i === 0 ? 0.45 : 0.16} />
      ))}
      <rect x="68" y="38" width="58" height="30" rx="5" fill="currentColor" fillOpacity="0.09" />
      <rect x="134" y="38" width="58" height="30" rx="5" fill="currentColor" fillOpacity="0.09" />
      <Bar x={74} y={46} w={26} h={7} o={0.5} />
      <Bar x={140} y={46} w={20} h={7} o={0.5} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={70 + i * 21}
          y={132 - h}
          width={13}
          height={h}
          rx="3"
          fill="currentColor"
          fillOpacity={0.25 + i * 0.1}
        />
      ))}
    </Window>
  );
}

/* 1 — course list: stacked rows each with a thumbnail and a progress track. */
function Courses() {
  return (
    <Window>
      <Bar x={28} y={38} w={54} h={7} o={0.4} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="28" y={54 + i * 29} width="26" height="20" rx="4" fill="currentColor" fillOpacity="0.14" />
          <Bar x={62} y={57 + i * 29} w={76} o={0.26} />
          <Bar x={62} y={66 + i * 29} w={48} o={0.12} />
          <rect x="150" y={62 + i * 29} width="42" height="4" rx="2" fill="currentColor" fillOpacity="0.1" />
          <rect
            x="150"
            y={62 + i * 29}
            width={[30, 18, 36][i]}
            height="4"
            rx="2"
            fill="currentColor"
            fillOpacity="0.55"
          />
        </g>
      ))}
    </Window>
  );
}

/* 2 — people board: avatars over a small performance ring. */
function People() {
  return (
    <Window>
      <Bar x={28} y={38} w={48} h={7} o={0.4} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={36} cy={62 + i * 20} r="7" fill="currentColor" fillOpacity="0.22" />
          <Bar x={50} y={59 + i * 20} w={52 - i * 6} o={0.22} />
        </g>
      ))}
      <circle cx="162" cy="78" r="25" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="7" />
      <circle
        cx="162"
        cy="78"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="110 157"
        transform="rotate(-90 162 78)"
      />
    </Window>
  );
}

/* 3 — marking view: a script with annotation ticks down the margin. */
function Marking() {
  return (
    <Window>
      <rect x="28" y="38" width="104" height="98" rx="5" fill="currentColor" fillOpacity="0.05" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Bar key={i} x={36} y={48 + i * 15} w={i % 2 ? 72 : 86} h={4} o={0.2} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={150} cy={52 + i * 26} r="7" fill="currentColor" fillOpacity="0.5" />
          <Bar x={163} y={49 + i * 26} w={28} o={0.2} />
          <Bar x={163} y={57 + i * 26} w={18} h={3} o={0.12} />
        </g>
      ))}
    </Window>
  );
}

/* 4 — submission timeline: numbered steps down a connecting rail. */
function Timeline() {
  return (
    <Window>
      <Bar x={28} y={38} w={62} h={7} o={0.4} />
      <line x1="38" y1="60" x2="38" y2="128" stroke="currentColor" strokeOpacity="0.14" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="38" cy={62 + i * 22} r="6" fill="currentColor" fillOpacity={i === 0 ? 0.65 : 0.16} />
          <Bar x={54} y={59 + i * 22} w={90 - i * 12} o={i === 0 ? 0.32 : 0.16} />
        </g>
      ))}
    </Window>
  );
}

const VARIANTS = [Dashboard, Courses, People, Marking, Timeline];

/**
 * The drawing takes no colour prop. Every shape inside is `currentColor` at a
 * low opacity, and `color` is set once in `ls.css` to the purple that reads
 * on a light background.
 *
 * It used to take the product's own accent, which broke when the palette came
 * down to two: on a cyan product that drew cyan line art on a cyan-tinted
 * backdrop — 2.34:1, and fainter still at the low opacities most of these
 * shapes use. Purple holds against either tint (~8:1). `TintPanel` is drawn
 * the same way, for the same reason.
 *
 * The product's own colour still shows, in the backdrop tint behind this and
 * in the round button below it.
 */
export default function ProductMockup({ variant = 0 }) {
  const Art = VARIANTS[variant % VARIANTS.length];
  return (
    <svg
      className="ls-mockup"
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      role="presentation"
      aria-hidden="true"
    >
      <Art />
    </svg>
  );
}
