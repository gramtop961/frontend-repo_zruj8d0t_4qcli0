import { motion } from 'framer-motion';
import { Leaf, Map, Phone, TreePine } from 'lucide-react';

export default function HeroBanner() {
  const leaves = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 6,
    scale: 0.6 + Math.random() * 0.8,
  }));

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-amber-100 via-orange-100 to-amber-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl" />
        <div className="absolute top-10 left-20 h-48 w-48 rounded-full bg-yellow-200/40 blur-2xl" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{ y: -80, x: `${leaf.x}%`, rotate: 0, opacity: 0 }}
            animate={{
              y: '100vh',
              x: [`${leaf.x}%`, `${leaf.x + (Math.random() * 10 - 5)}%`],
              rotate: [0, 45, -15, 60],
              opacity: [0, 1, 1, 0.8],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute text-amber-700/80"
            style={{ scale: leaf.scale }}
          >
            <Leaf className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-amber-200/70 px-4 py-1 text-amber-900 ring-1 ring-amber-400/50"
        >
          <TreePine className="w-4 h-4" />
          <span className="text-xs font-medium tracking-wide">Willow Grove Nature Sanctuary</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-amber-900"
        >
          Wander through autumn. Care for tomorrow.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-amber-800/80 text-lg"
        >
          Explore golden trails, learn about native species, and join our community planting days to restore the forest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#walk"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-800 text-amber-50 px-5 py-3 shadow-lg shadow-amber-900/10 hover:bg-amber-900 transition"
          >
            <Map className="w-4 h-4" />
            Trail Walk
          </a>
          <a
            href="#research"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-900 px-5 py-3 ring-1 ring-amber-300 hover:bg-amber-50 transition"
          >
            <Phone className="w-4 h-4" />
            Research on the go
          </a>
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden>
        <path d="M0,120 C240,60 360,180 600,120 C900,30 1030,150 1440,80 L1440,200 L0,200 Z" fill="#F59E0B22" />
        <path d="M0,140 C240,80 360,200 600,140 C900,50 1030,170 1440,100 L1440,200 L0,200 Z" fill="#D9770622" />
      </svg>
    </section>
  );
}
