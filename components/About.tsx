"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      "Design, copy, and architecture are all calibrated to one outcome: turning visitors into customers and users into advocates.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c5cfc]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0f0f0f] border border-white/8">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-white/60">
                    Currently taking on new projects
                  </span>
                </div>
                <p className="text-white font-semibold text-sm">
                  Softdroom Holdings Consulting Arm
                </p>
              </motion.div>
            </div>

            {/* Decorative grid card */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#7c5cfc]/10 rounded-2xl border border-[#7c5cfc]/20 flex items-center justify-center -z-10">
              <div className="w-16 h-16 bg-[#7c5cfc]/20 rounded-xl" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#7c5cfc] text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              We don&apos;t just
              <br />
              consult.{" "}
              <span className="gradient-text">We build.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Gigadroom is the consulting and delivery arm of Softdroom
              Holdings. We work with startups and established businesses
              to turn ambitious ideas into real, revenue-generating digital
              products and systems.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Whether you need to integrate AI into your operations, build
              your first product from scratch, or overhaul your digital
              presence — we handle the full journey, from first conversation
              to live deployment.
            </p>

            {/* Pillars */}
            <div className="space-y-5">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-[#7c5cfc] to-transparent" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Softdroom link */}
            <motion.a
              href="https://www.softdroom.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Part of Softdroom Holdings
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
