import { agents, mindgenie } from '../../content/site';

/**
 * The MindGENIE orchestration diagram.
 *
 * Ported from the Mindlogicx 2025 frontend
 * (`components/visuals/AgentOrchestration.tsx`). Six agent classes arranged
 * around one core: the dashed ring is the orchestration boundary, the spokes
 * are delegation. As the source puts it, it reads as an intelligence fabric,
 * which is the point — MindGENIE is a layer, not an assistant.
 *
 * Two differences from the original, both deliberate:
 *
 * 1. **No framer-motion.** The source animates the ring drawing itself and
 *    the nodes scaling in. This build has no animation library, so the
 *    diagram renders settled and the section's own `Reveal` handles the
 *    entrance. Nothing in the geometry changed.
 * 2. **The core gradient is this site's two brand colours** rather than the
 *    source's brand/accent pair.
 *
 * Hidden below 768px, exactly as in the source — the agent cards beside it
 * carry the same information in a layout built for narrow screens.
 */

const C = 280;
const R_RING = 188;
const R_CORE = 62;
const R_NODE = 40;

/** Starts at the top and goes clockwise. */
const nodeAt = (i, total) => {
  const a = (Math.PI * 2 * i) / total - Math.PI / 2;
  return { x: C + R_RING * Math.cos(a), y: C + R_RING * Math.sin(a), a };
};

const hexPoints = (cx, cy, r) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');

export default function AgentOrchestration() {
  const total = agents.length;

  return (
    <svg
      className="ls-orch"
      viewBox="0 0 560 560"
      role="img"
      aria-label={`MindGENIE orchestration: one intelligence core delegating to ${total} agent classes — ${agents
        .map((a) => a.name)
        .join(', ')}.`}
    >
      <defs>
        <linearGradient id="ls-orch-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-purple)" />
          <stop offset="100%" stopColor="var(--brand-cyan)" />
        </linearGradient>
        <radialGradient id="ls-orch-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--brand-cyan)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="ls-orch-clip">
          <polygon points={hexPoints(C, C, R_CORE - 6)} />
        </clipPath>
      </defs>

      <circle cx={C} cy={C} r={R_RING + 52} fill="url(#ls-orch-halo)" />

      {/* The orchestration boundary. */}
      <circle
        cx={C}
        cy={C}
        r={R_RING}
        fill="none"
        stroke="rgb(255 255 255 / 28%)"
        strokeWidth="1"
        strokeDasharray="3 7"
      />

      {/* Delegation spokes. */}
      <g fill="none" strokeLinecap="round">
        {agents.map((a, i) => {
          const n = nodeAt(i, total);
          const sx = C + R_CORE * Math.cos(n.a);
          const sy = C + R_CORE * Math.sin(n.a);
          const ex = C + (R_RING - R_NODE) * Math.cos(n.a);
          const ey = C + (R_RING - R_NODE) * Math.sin(n.a);
          return (
            <path
              key={a.id}
              d={`M${sx.toFixed(1)} ${sy.toFixed(1)} L${ex.toFixed(1)} ${ey.toFixed(1)}`}
              stroke="rgb(255 255 255 / 34%)"
              strokeWidth="1.5"
            />
          );
        })}
      </g>

      {/* Agent nodes. */}
      {agents.map((a, i) => {
        const n = nodeAt(i, total);
        return (
          <g key={a.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={R_NODE}
              fill="var(--white)"
              stroke="rgb(255 255 255 / 28%)"
              strokeWidth="1.2"
            />
            <circle cx={n.x} cy={n.y} r={R_NODE - 9} fill="var(--tint-purple-50)" />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fill="var(--accent-text)"
              fontSize="11"
              fontWeight="500"
            >
              {a.name.split(' ')[0]}
            </text>
            <text
              x={n.x}
              y={n.y + R_NODE + 20}
              textAnchor="middle"
              fill="var(--white)"
              fontSize="11"
              letterSpacing="0.06em"
            >
              {a.role}
            </text>
          </g>
        );
      })}

      {/* The core. */}
      <g>
        <polygon points={hexPoints(C, C, R_CORE)} fill="url(#ls-orch-core)" />
        <polygon points={hexPoints(C, C, R_CORE - 6)} fill="#ffffff" />
        <image
          href={mindgenie.coreImage}
          x={C - (R_CORE - 6)}
          y={C - (R_CORE - 6)}
          width={(R_CORE - 6) * 2}
          height={(R_CORE - 6) * 2}
          clipPath="url(#ls-orch-clip)"
          preserveAspectRatio="xMidYMid meet"
        />
        <polygon
          points={hexPoints(C, C, R_CORE - 6)}
          fill="none"
          stroke="var(--brand-cyan)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
