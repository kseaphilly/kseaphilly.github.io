// KSEA Philadelphia — chapter marks built on the official seal.
// Heritage seal is canonical; modern chapter marks add Bio × AI focus.

const SEAL_NAVY = '#2E3A94';
const SEAL_LIGHT = '#6B7AC9';
const CREAM = '#F4EBD9';
const BRICK = '#B0413E';
const INK = '#121212';
const BIO_GREEN = '#2A6F5B';

// ── Heritage mark: official seal image
function SealImage({ size = 200, style = {} }) {
  return (
    <img
      src="assets/ksea-philly-seal.png"
      alt="KSEA Philadelphia seal"
      style={{ height: size, width: 'auto', display: 'block', ...style }}
    />
  );
}

// Seal image cropped to just the circular emblem
function SealEmblem({ size = 200, style = {} }) {
  return (
    <img
      src="assets/ksea-philly-seal-emblem.png"
      alt="KSEA seal"
      style={{ width: size, height: size, display: 'block', ...style }}
    />
  );
}

// ───────────────────────────────────────────────
// Concept 01 — Heritage lockup
// Official seal + "KSEA Philadelphia" wordmark, cleaned & set in Space Grotesk
// ───────────────────────────────────────────────
function LogoHeritage({ size = 420, bg = CREAM }) {
  return (
    <div style={{
      width: size, height: size, background: bg,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: size * 0.08, boxSizing: 'border-box',
    }}>
      <SealImage size={size * 0.45} />
      <div style={{
        marginTop: size * 0.06, textAlign: 'center',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: size * 0.11, color: SEAL_NAVY, lineHeight: 1,
        letterSpacing: -size * 0.001,
      }}>
        KSEA Philadelphia
      </div>
      <div style={{
        marginTop: size * 0.018,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: size * 0.032, color: SEAL_NAVY, opacity: 0.75,
        letterSpacing: size * 0.008, textTransform: 'uppercase',
      }}>
        재미한인과학기술자협회 · Est. 1971
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────
// Concept 02 — Helix chapter mark (Bio focus)
// Pairs a modern DNA double-helix glyph with the seal as a chapter sub-identity
// ───────────────────────────────────────────────
function LogoHelix({ size = 420, bg = CREAM, fg = SEAL_NAVY, accent = BIO_GREEN }) {
  return (
    <div style={{
      width: size, height: size, background: bg,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: size * 0.08, boxSizing: 'border-box',
    }}>
      <svg viewBox="0 0 220 140" width={size * 0.7} height={size * 0.4}>
        {/* two helix strands */}
        <path d="M 10 20 C 60 20, 60 120, 110 120 C 160 120, 160 20, 210 20" fill="none" stroke={fg} strokeWidth="4" strokeLinecap="round" />
        <path d="M 10 120 C 60 120, 60 20, 110 20 C 160 20, 160 120, 210 120" fill="none" stroke={fg} strokeWidth="4" strokeLinecap="round" />
        {/* rungs */}
        {[30, 55, 85, 110, 135, 165, 190].map((x, i) => {
          // approximate y on each strand — symmetrical
          const t = (x - 10) / 200;
          const s = Math.sin(t * Math.PI * 2);
          const y1 = 70 - 50 * s;
          const y2 = 70 + 50 * s;
          return <line key={i} x1={x} y1={y1} x2={x} y2={y2} stroke={i % 2 === 0 ? accent : BRICK} strokeWidth="3" />;
        })}
      </svg>
      <div style={{
        marginTop: size * 0.05, textAlign: 'center',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: size * 0.105, color: fg, lineHeight: 1,
        letterSpacing: -size * 0.002,
      }}>
        KSEA · Philadelphia
      </div>
      <div style={{
        marginTop: size * 0.02,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: size * 0.028, color: fg, opacity: 0.7,
        letterSpacing: size * 0.01, textTransform: 'uppercase',
      }}>
        Bio · Bio-Engineering · AI
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────
// Concept 03 — Neural / AI × Bio node mark
// Molecular geometry meets a neural graph — the chapter's research identity
// ───────────────────────────────────────────────
function LogoNeural({ size = 420, bg = SEAL_NAVY, fg = CREAM, accent = '#FFB4A8' }) {
  // hexagonal benzene-ring with extra 'neural' edges
  const cx = 100, cy = 100, r = 56;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  // cross connections (neural graph)
  const edges = [[0, 2], [2, 4], [4, 0], [1, 3], [3, 5], [5, 1]];

  return (
    <div style={{
      width: size, height: size, background: bg,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: size * 0.08, boxSizing: 'border-box',
    }}>
      <svg viewBox="0 0 200 200" width={size * 0.55} height={size * 0.55}>
        {/* inner cross edges */}
        {edges.map(([a, b], i) => (
          <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]}
            stroke={fg} strokeWidth="1.5" opacity="0.45" />
        ))}
        {/* ring */}
        <polygon
          points={pts.map(p => p.join(',')).join(' ')}
          fill="none" stroke={fg} strokeWidth="3"
        />
        {/* nodes */}
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={i % 2 === 0 ? 8 : 6}
            fill={i === 0 ? accent : fg} />
        ))}
        {/* central neuron */}
        <circle cx={cx} cy={cy} r="5" fill={accent} />
      </svg>
      <div style={{
        marginTop: size * 0.05, textAlign: 'center',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: size * 0.1, color: fg, lineHeight: 1,
        letterSpacing: -size * 0.002,
      }}>
        KSEA PHILLY
      </div>
      <div style={{
        marginTop: size * 0.02,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: size * 0.028, color: fg, opacity: 0.8,
        letterSpacing: size * 0.012, textTransform: 'uppercase',
      }}>
        AI × BIO · chapter mark
      </div>
    </div>
  );
}

// Small mark-only variants for the canvas
function MarkHelix({ size = 200, bg = CREAM, fg = SEAL_NAVY, accent = BIO_GREEN }) {
  return (
    <div style={{ width: size, height: size, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 220 140" width={size * 0.8} height={size * 0.5}>
        <path d="M 10 20 C 60 20, 60 120, 110 120 C 160 120, 160 20, 210 20" fill="none" stroke={fg} strokeWidth="5" strokeLinecap="round" />
        <path d="M 10 120 C 60 120, 60 20, 110 20 C 160 20, 160 120, 210 120" fill="none" stroke={fg} strokeWidth="5" strokeLinecap="round" />
        {[30, 55, 85, 110, 135, 165, 190].map((x, i) => {
          const t = (x - 10) / 200;
          const s = Math.sin(t * Math.PI * 2);
          return <line key={i} x1={x} y1={70 - 50 * s} x2={x} y2={70 + 50 * s} stroke={i % 2 === 0 ? accent : BRICK} strokeWidth="3.5" />;
        })}
      </svg>
    </div>
  );
}

function MarkNeural({ size = 200, bg = CREAM, fg = SEAL_NAVY, accent = BRICK }) {
  const cx = 100, cy = 100, r = 56;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const edges = [[0, 2], [2, 4], [4, 0], [1, 3], [3, 5], [5, 1]];
  return (
    <div style={{ width: size, height: size, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 200 200" width={size * 0.7} height={size * 0.7}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={fg} strokeWidth="2" opacity="0.45" />
        ))}
        <polygon points={pts.map(p => p.join(',')).join(' ')} fill="none" stroke={fg} strokeWidth="3.5" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={i % 2 === 0 ? 9 : 7} fill={i === 0 ? accent : fg} />
        ))}
        <circle cx={cx} cy={cy} r="6" fill={accent} />
      </svg>
    </div>
  );
}

Object.assign(window, {
  LogoHeritage, LogoHelix, LogoNeural,
  SealImage, SealEmblem, MarkHelix, MarkNeural,
  SEAL_NAVY, SEAL_LIGHT, CREAM, BRICK, INK, BIO_GREEN,
});
