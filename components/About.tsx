"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    title: "Strategy First",
    description:
      "Every engagement starts with understanding your business model, audience, and growth goals before a single line of code is written.",
  },
  {
    title: "AI at the Core",
    description:
      "We embed intelligent systems into everything we build — not as an afterthought, but as a foundational layer that compounds over time.",
  },
  {
    title: "Built to Convert",
    description:
      "Design, copy, and architecture are calibrated to one outcome: turning visitors into customers and users into advocates.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="Gigadroom team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white border border-[#E5E5E5] rounded-2xl p-5 shadow-lg max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-[#6B6B6B]">Taking new projects</span>
              </div>
              <p className="text-[#0F0F0F] font-semibold text-sm leading-snug">
                Softdroom Holdings
                <br />
                Consulting Arm
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              About Us
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight text-[#0F0F0F] mb-6">
              We don&apos;t just
              <br />
              consult. We build.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-5">
              Gigadroom is the consulting and delivery arm of Softdroom
              Holdings. We work with startups and established businesses
              to turn ambitious ideas into real, revenue-generating digital
              products and systems.
            </p>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-10">
              Whether you need AI integrated into your operations, your first
              product built from scratch, or a complete overhaul of your
              digital presence — we handle the full journey, from first
              conversation to live deployment.
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="mt-[6px] w-[3px] flex-shrink-0 rounded-full bg-[#0F0F0F]" />
                  <div>
                    <h4 className="text-[#0F0F0F] font-semibold text-sm mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.softdroom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-1 text-sm text-[#888] hover:text-[#0F0F0F] transition-colors border-b border-[#DDD] pb-0.5 hover:border-[#0F0F0F]"
            >
              Part of Softdroom Holdings &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
