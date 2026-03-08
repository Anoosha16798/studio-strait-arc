/**
 * Blueprint SVG matching reference: transparent background so it merges
 * with the page gradient. No yellowish/cream fill – section background shows through.
 */
import { motion } from 'framer-motion';

const stroke = 'rgba(30,30,30,0.92)';
const strokeLight = 'rgba(30,30,30,0.75)';
const fillBrown = '#7a3d1a';
const blueDetail = 'rgba(91, 143, 185, 0.85)';

// Hexagon points (flat top)
function hexagon(cx, cy, r) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    points.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return points.join(' ');
}

export default function BlueprintIllustration({ className = '' }) {
  const cx = 200;
  const cy = 185;
  const R = 88;
  const rInner = 42;

  return (
    <svg
      viewBox="0 0 680 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* No background rect – transparent so page gradient shows through */}

      {/* ----- LEFT: Geometric structure + scaffolding + labels ----- */}
      <g transform="translate(20, 50)">
        {/* Main geodesic-style structure */}
        <motion.polygon
          points={hexagon(cx, cy, R)}
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />
        <motion.polygon
          points={hexagon(cx, cy, rInner)}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="4 3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        {/* Interior Cross-Section - Detail A (light blue) */}
        <g transform="translate(172, 157)">
          <motion.rect
            x="0"
            y="0"
            width="56"
            height="56"
            fill="none"
            stroke={blueDetail}
            strokeWidth="1"
            strokeDasharray="3 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.path
            d="M28 8 L28 48 M8 28 L48 28 M18 18 L38 38 M38 18 L18 38"
            fill="none"
            stroke={blueDetail}
            strokeWidth="1.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.circle
            cx="28"
            cy="28"
            r="3"
            fill="none"
            stroke={blueDetail}
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.65 }}
          />
        </g>
        <text x={cx - R - 8} y={cy - 50} fontSize="8" fill={strokeLight} fontFamily="system-ui,sans-serif">Interior Cross-Section - Detail A</text>

        {/* Scaffolding */}
        <rect x={cx + R - 20} y={cy - 15} width="6" height="95" fill="none" stroke={stroke} strokeWidth="1.5" />
        <rect x={cx + R - 24} y={cy - 20} width="14" height="6" fill="none" stroke={stroke} strokeWidth="1.5" />
        <text x={cx + R + 5} y={cy + 95} fontSize="8" fill={strokeLight}>DRYWALL DETAIL BEAM</text>

        {/* Figure with measure tape – top (constructing: bobbing + tape extends down) */}
        <motion.g
          transform="translate(200, 62)"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="25" x2="0" y2="0" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="-4" r="5" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="25" x2="-12" y2="40" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="25" x2="12" y2="40" stroke={stroke} strokeWidth="1.8" />
          <motion.path
            d="M0 28 L0 75"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            initial={{ pathLength: 0.3 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.6 }}
          />
          <line x1="0" y1="25" x2="-4" y2="52" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="25" x2="4" y2="52" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
        <text x={cx - 35} y={cy - R - 5} fontSize="7" fill={strokeLight}>MEASURE TAPE</text>

        {/* Figure on scaffolding – TAPE J.C.D.V. (constructing: sway + reach) */}
        <motion.g
          transform="translate(277, 130)"
          animate={{ x: [0, 3, 0], y: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="28" x2="0" y2="5" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="2" r="4" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="28" x2="-10" y2="42" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="28" x2="10" y2="42" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="28" x2="-3" y2="50" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="28" x2="3" y2="50" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
        <text x={cx + R + 2} y={cy - 58} fontSize="7" fill={strokeLight}>TAPE J.C.D.V.</text>

        {/* Figure bottom-left with level (constructing: rocking while holding level) */}
        <motion.g
          transform="translate(72, 200)"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="35" x2="0" y2="8" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="5" r="4" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="35" x2="-14" y2="50" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="35" x2="14" y2="50" stroke={stroke} strokeWidth="1.8" />
          <line x1="-25" y1="22" x2="25" y2="22" stroke={stroke} strokeWidth="1.5" />
          <line x1="0" y1="35" x2="-4" y2="58" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="35" x2="4" y2="58" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
      </g>

      {/* ----- CENTER: Studio Strait Arc text ----- */}
      <g transform="translate(0, 50)">
        <motion.text x="340" y="75" textAnchor="middle" fill={stroke} fontSize="18" fontWeight="700" fontFamily="system-ui,sans-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>Studio</motion.text>
        <motion.text x="340" y="105" textAnchor="middle" fill={stroke} fontSize="22" fontWeight="700" fontFamily="system-ui,sans-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>Strait Arc</motion.text>
      </g>

      {/* ----- CENTER: Wheelbarrow + figure (constructing: pushing, wheels roll) ----- */}
      <motion.g
        transform="translate(260, 255)"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M0 38 Q22 18 48 22 L65 35 L65 44 L48 40 L12 44 Z" fill={fillBrown} stroke={stroke} strokeWidth="1.2" />
        <circle cx="15" cy="44" r="6" fill="none" stroke={stroke} strokeWidth="1.5" />
        <motion.g style={{ transformOrigin: '15px 44px' }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <line x1="15" y1="44" x2="15" y2="38" stroke={stroke} strokeWidth="1.2" />
          <line x1="15" y1="44" x2="21" y2="44" stroke={stroke} strokeWidth="1.2" />
        </motion.g>
        <circle cx="58" cy="44" r="6" fill="none" stroke={stroke} strokeWidth="1.5" />
        <motion.g style={{ transformOrigin: '58px 44px' }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <line x1="58" y1="44" x2="58" y2="38" stroke={stroke} strokeWidth="1.2" />
          <line x1="58" y1="44" x2="64" y2="44" stroke={stroke} strokeWidth="1.2" />
        </motion.g>
        <g>
          <line x1="82" y1="28" x2="82" y2="5" stroke={stroke} strokeWidth="1.8" />
          <circle cx="82" cy="2" r="5" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="82" y1="28" x2="68" y2="42" stroke={stroke} strokeWidth="1.8" />
          <line x1="82" y1="28" x2="94" y2="40" stroke={stroke} strokeWidth="1.8" />
          <line x1="82" y1="28" x2="80" y2="48" stroke={stroke} strokeWidth="1.8" />
          <line x1="82" y1="28" x2="84" y2="48" stroke={stroke} strokeWidth="1.8" />
        </g>
      </motion.g>

      {/* ----- FRAME CONNECTION ----- */}
      <g transform="translate(355, 300)">
        <motion.rect x="0" y="0" width="38" height="24" fill={fillBrown} stroke={stroke} strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <motion.rect x="10" y="14" width="38" height="24" fill={fillBrown} stroke={stroke} strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} />
        <text x="56" y="32" fontSize="9" fill={strokeLight} fontFamily="system-ui,sans-serif">FRAME CONNECTION</text>
      </g>

      {/* ----- RIGHT: LOGO DETAIL - FINAL (transparent fill so background shows through) ----- */}
      <g transform="translate(450, 70)">
        <motion.rect
          x="0"
          y="0"
          width="200"
          height="260"
          rx="4"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
        <motion.text x="100" y="22" textAnchor="middle" fill={stroke} fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>LOGO DETAIL - FINAL</motion.text>
        <motion.path d="M100 55 L125 75 L125 115 L100 135 L75 115 L75 75 Z" fill="none" stroke={stroke} strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />
        <motion.path d="M100 75 L115 85 L115 105 L100 115 L85 105 L85 85 Z" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} />
        <motion.circle cx="100" cy="185" r="35" fill="none" stroke={stroke} strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.8 }} />
        <motion.path d="M88 168 L100 158 L112 168 L112 202 L100 212 L88 202 Z" fill="none" stroke={stroke} strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.9 }} />

        {/* Figure pointing at document (constructing: pointing arm in/out) */}
        <motion.g
          transform="translate(220, 90)"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="45" x2="0" y2="18" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="15" r="5" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="-12" y2="58" stroke={stroke} strokeWidth="1.8" />
          <motion.path
            d="M0 45 L -22 72"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            animate={{ pathLength: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <line x1="0" y1="45" x2="12" y2="58" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="-3" y2="72" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="3" y2="72" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
        {/* Figure holding brown piece (constructing: lifting piece to show) */}
        <motion.g
          transform="translate(255, 75)"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="42" x2="0" y2="15" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="12" r="5" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="42" x2="-11" y2="55" stroke={stroke} strokeWidth="1.8" />
          <rect x="6" y="2" width="16" height="14" fill={fillBrown} stroke={stroke} strokeWidth="1" />
          <line x1="0" y1="42" x2="10" y2="56" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="42" x2="-2" y2="68" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="42" x2="2" y2="68" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
        {/* Figure observing (constructing: subtle nod) */}
        <motion.g
          transform="translate(218, 200)"
          animate={{ y: [0, 2, 0], opacity: [1, 0.85, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="45" x2="0" y2="18" stroke={stroke} strokeWidth="1.8" />
          <circle cx="0" cy="15" r="5" fill="none" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="-12" y2="60" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="12" y2="60" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="-3" y2="70" stroke={stroke} strokeWidth="1.8" />
          <line x1="0" y1="45" x2="3" y2="70" stroke={stroke} strokeWidth="1.8" />
        </motion.g>
      </g>

      {/* Sparkle */}
      <motion.path d="M655 400 L657 406 L663 408 L657 410 L655 416 L653 410 L647 408 L653 406 Z" fill="none" stroke={strokeLight} strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
    </svg>
  );
}
