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
    <section className="py-12 overflow-hidden border-y border-[#E5E5E5] bg-white relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-10 w-max"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <span className="text-[#BBBBBB] text-sm font-medium tracking-[0.1em] uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#DDDDDD] text-sm">·</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
