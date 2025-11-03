import { motion } from 'framer-motion';
import { Phone, Leaf, Map } from 'lucide-react';

function PhoneCard({ title, description, accent = 'from-amber-400 to-orange-500', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl bg-white ring-1 ring-amber-200 p-5 shadow-md"
    >
      <div className={`absolute -inset-x-2 -top-2 h-2 rounded-t-2xl bg-gradient-to-r ${accent}`} />
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-200">
          <Phone className="w-5 h-5 text-amber-800" />
        </div>
        <div>
          <h3 className="font-semibold text-amber-900">{title}</h3>
          <p className="text-sm text-amber-800/80">{description}</p>
        </div>
      </div>

      {/* 2D phone mock with animated tap */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <motion.div className="mx-auto h-40 w-24 rounded-2xl bg-neutral-900 p-2 relative overflow-hidden">
            <div className="h-full w-full rounded-xl bg-neutral-800/80" />
            <motion.span
              className="absolute left-5 top-8 h-3 w-3 rounded-full bg-amber-400"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.span
              className="absolute right-4 bottom-6 h-2 w-8 rounded bg-amber-300/60"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          </motion.div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-900"><Leaf className="w-4 h-4" /> Identify trees and leaves</div>
          <div className="flex items-center gap-2 text-amber-900"><Map className="w-4 h-4" /> Offline-friendly trail maps</div>
          <div className="flex items-center gap-2 text-amber-900"><Leaf className="w-4 h-4" /> Track wildlife sightings</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchShowcase() {
  return (
    <section id="research" className="relative py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Research the forest as you walk</h2>
          <p className="mt-2 text-amber-800/80">Use your phone to learn about species, habitats, and restoration in real-time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PhoneCard
            title="Scan & Learn"
            description="Point your camera at leaves and mushrooms to get instant IDs."
            accent="from-amber-400 to-orange-500"
            delay={0}
          />
          <PhoneCard
            title="Guided Trails"
            description="Audio stories and map pins guide you to the sanctuary's hidden spots."
            accent="from-orange-500 to-rose-400"
            delay={0.1}
          />
          <PhoneCard
            title="Community Science"
            description="Log observations and help researchers monitor forest health."
            accent="from-amber-500 to-lime-500"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
