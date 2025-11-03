import { motion } from 'framer-motion';

function Person({ delay = 0 }) {
  return (
    <motion.g
      initial={{ x: -120, y: 0 }}
      animate={{ x: [ -120, 1480 ], y: [0, -2, 0] }}
      transition={{ duration: 18, delay, repeat: Infinity, ease: 'linear' }}
    >
      {/* Body */}
      <motion.circle cx="0" cy="-32" r="8" fill="#78350F" />
      <motion.rect x="-6" y="-28" width="12" height="24" rx="4" fill="#92400E" />
      {/* Phone */}
      <motion.rect x="4" y="-16" width="8" height="12" rx="2" fill="#111827" />
      {/* Legs */}
      <motion.line x1="-3" y1="-4" x2="-6" y2="10" stroke="#78350F" strokeWidth="3"
        animate={{ rotate: [10, -15, 10] }} origin="-3 -4" transition={{ duration: 0.8, repeat: Infinity }} />
      <motion.line x1="3" y1="-4" x2="6" y2="10" stroke="#78350F" strokeWidth="3"
        animate={{ rotate: [-10, 15, -10] }} origin="3 -4" transition={{ duration: 0.8, repeat: Infinity }} />
    </motion.g>
  );
}

function Tree({ x, scale = 1 }) {
  return (
    <g transform={`translate(${x},0) scale(${scale})`}>
      <rect x="-6" y="40" width="12" height="24" rx="2" fill="#78350F" />
      <circle cx="0" cy="40" r="18" fill="#16A34A" opacity="0.8" />
      <circle cx="-10" cy="30" r="16" fill="#15803D" opacity="0.8" />
      <circle cx="10" cy="28" r="16" fill="#22C55E" opacity="0.8" />
    </g>
  );
}

export default function ForestWalkScene() {
  return (
    <section id="walk" className="relative bg-gradient-to-t from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Stroll the golden path</h2>
          <p className="mt-2 text-amber-800/80">2D motion graphics of visitors wandering through autumn woods.</p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-xl">
          <svg viewBox="0 0 1440 260" className="w-full h-[260px]" aria-label="Animated forest walk">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFEDD5" />
                <stop offset="100%" stopColor="#FEF3C7" />
              </linearGradient>
              <linearGradient id="trail" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B45309" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="1440" height="260" fill="url(#sky)" />

            {/* Hills */}
            <path d="M0,180 C320,140 480,220 800,180 C1040,150 1200,210 1440,180 L1440,260 L0,260 Z" fill="#FDE68A" />
            <path d="M0,190 C300,150 520,210 820,190 C1100,170 1240,210 1440,200 L1440,260 L0,260 Z" fill="#F59E0B33" />

            {/* Trees back row (slow parallax) */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.g key={i} initial={{ x: 0 }} animate={{ x: [-20, 20, -20] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}>
                <Tree x={i * 150 + 30} scale={1} />
              </motion.g>
            ))}

            {/* Trail */}
            <path d="M0,210 C320,200 480,240 800,220 C1080,200 1240,230 1440,225 L1440,260 L0,260 Z" fill="url(#trail)" />

            {/* Walkers */}
            <Person delay={0} />
            <Person delay={4} />
            <Person delay={8} />
          </svg>
        </div>
      </div>
    </section>
  );
}
