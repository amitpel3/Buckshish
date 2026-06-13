/**
 * Dense, randomly scattered eight-point-star lattice in logo golds.
 * Seeded PRNG keeps server/client renders identical (no hydration mismatch).
 */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(420);

const STARS = Array.from({ length: 520 }, () => ({
  x: rand() * 1600,
  y: rand() * 2000,
  size: 8 + rand() * 34,
  rot: rand() * 90,
  opacity: 0.035 + rand() * 0.09,
  filled: rand() > 0.85,
}));

export default function PatternBackground() {
  return (
    <svg
      className="fixed inset-0 -z-10 h-full w-full"
      viewBox="0 0 1600 2000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {STARS.map((s, i) => (
        <g
          key={i}
          transform={`translate(${s.x} ${s.y}) rotate(${s.rot}) scale(${
            s.size / 20
          })`}
          stroke="#c89b3c"
          strokeOpacity={s.opacity}
          fill={s.filled ? "#c89b3c" : "none"}
          fillOpacity={s.filled ? s.opacity * 0.6 : 0}
        >
          <rect x="-10" y="-10" width="20" height="20" />
          <rect x="-10" y="-10" width="20" height="20" transform="rotate(45)" />
        </g>
      ))}
    </svg>
  );
}
