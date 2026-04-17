"use client";

import { motion } from "framer-motion";

const capabilities = [
  "AI Systems",
  "Machine Learning",
  "Web Development",
  "Mobile Apps",
  "UX Design",
  "Product Strategy",
  "Cloud Infrastructure",
  "API Development",
  "Automation",
  "Digital Transformation",
  "SaaS Platforms",
  "E-commerce",
];

export default function SocialProof() {
  const doubled = [...capabilities, ...capabilities];

  return (
    <section className="py-16 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808] z-10 pointer-events-none" />

      {/* Marquee track */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 w-max"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="text-white/20 text-sm font-medium uppercase tracking-widest whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#7c5cfc]/30 text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
