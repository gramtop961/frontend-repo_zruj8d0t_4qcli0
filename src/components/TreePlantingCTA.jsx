import { motion } from 'framer-motion';
import { TreePine, Leaf } from 'lucide-react';

function PlanterSVG() {
  return (
    <svg viewBox="0 0 600 220" className="w-full h-[220px]" aria-label="Employees planting trees">
      <defs>
        <linearGradient id="soil" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#7C2D12" />
        </linearGradient>
      </defs>
      {/* ground */}
      <rect x="0" y="160" width="600" height="60" fill="url(#soil)" />

      {/* sapling with growth animation */}
      <motion.g initial={{ scaleY: 0.6 }} animate={{ scaleY: [0.6, 1, 0.95, 1] }} transition={{ duration: 2.4, repeat: Infinity }} style={{ transformOrigin: '120px 150px' }}>
        <rect x="118" y="152" width="4" height="16" fill="#78350F" />
        <motion.path d="M120 152 C110 140, 105 140, 100 145" stroke="#16A34A" strokeWidth="3" fill="none"
          animate={{ d: [
            'M120 152 C110 140, 105 140, 100 145',
            'M120 152 C112 138, 107 138, 102 144',
            'M120 152 C110 140, 105 140, 100 145'
          ] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.path d="M120 152 C130 140, 135 140, 140 145" stroke="#22C55E" strokeWidth="3" fill="none"
          animate={{ d: [
            'M120 152 C130 140, 135 140, 140 145',
            'M120 152 C128 138, 133 138, 138 144',
            'M120 152 C130 140, 135 140, 140 145'
          ] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
      </motion.g>

      {/* employee with shovel */}
      <g transform="translate(260,0)">
        <circle cx="0" cy="110" r="10" fill="#713F12" />
        <rect x="-8" y="120" width="16" height="28" rx="4" fill="#A16207" />
        {/* arms */}
        <motion.line x1="-8" y1="130" x2="-24" y2="150" stroke="#713F12" strokeWidth="4"
          animate={{ rotate: [10, -5, 10] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ transformOrigin: '-8px 130px' }}
        />
        <motion.line x1="8" y1="130" x2="24" y2="150" stroke="#713F12" strokeWidth="4"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ transformOrigin: '8px 130px' }}
        />
        {/* shovel */}
        <rect x="20" y="120" width="4" height="48" rx="2" fill="#A3A3A3" />
        <path d="M18 168 L30 168 L24 180 Z" fill="#6B7280" />
      </g>

      {/* second employee kneeling */}
      <g transform="translate(420,0)">
        <circle cx="0" cy="110" r="10" fill="#713F12" />
        <rect x="-10" y="120" width="20" height="20" rx="6" fill="#B45309" />
        <motion.path d="M-10 140 Q0 152 12 150" stroke="#713F12" strokeWidth="6" fill="none"
          animate={{ d: ['M-10 140 Q0 152 12 150', 'M-12 138 Q0 154 14 152', 'M-10 140 Q0 152 12 150'] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </g>

      {/* decorative leaves */}
      <motion.g initial={{ opacity: 0.7 }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>
        <Leaf x="500" y="60" className="w-4 h-4 text-amber-700" />
      </motion.g>
    </svg>
  );
}

export default function TreePlantingCTA() {
  return (
    <section className="relative py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Help us plant 5,000 native trees</h2>
            <p className="mt-3 text-amber-800/80">Join our weekend planting teams, learn proper techniques, and watch the forest grow stronger every season.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-amber-800 text-amber-50 px-5 py-3 shadow-lg hover:bg-amber-900 transition">
                <TreePine className="w-4 h-4" /> Sign up to volunteer
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-900 px-5 py-3 ring-1 ring-amber-300 hover:bg-amber-50 transition">
                Learn more
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-xl">
            <PlanterSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
