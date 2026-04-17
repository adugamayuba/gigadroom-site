"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We deeply understand your business, your users, your market, and your goals — building a clear roadmap before any tools are touched.",
    duration: "Week 1–2",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our designers and architects shape the experience and technical foundation: wireframes, UI design, system design, and technical specs.",
    duration: "Week 2–4",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Engineering begins with weekly sprints and continuous feedback loops. You see real progress every week, not every quarter.",
    duration: "Ongoing",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We help you launch with momentum, monitor performance, and iterate based on real data — not assumptions.",
    duration: "Post-launch",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            How We Work
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#0F0F0F]">
            A process built for speed
            <br />
            and clarity.
          </h2>
          <p className="text-[#6B6B6B] text-base mt-4 max-w-md mx-auto leading-relaxed">
            No black boxes. No surprises. Just a transparent, collaborative
            process that keeps you in control at every step.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Number */}
              <div className="text-[#E0E0E0] font-black text-6xl leading-none mb-5 tabular-nums select-none">
                {step.step}
              </div>

              {/* Duration */}
              <span className="text-[10px] font-bold text-[#888] tracking-[0.15em] uppercase block mb-3">
                {step.duration}
              </span>

              <h3 className="text-[#0F0F0F] font-bold text-lg mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl bg-[#0F0F0F] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
              Ready to start building?
            </h3>
            <p className="text-white/50 text-base">
              Book a free 30-minute discovery call. No commitment, no fluff.
            </p>
          </div>
          <a
            href="#contact"
            onClick={() => track("cta_click", { label: "Book a Free Call", location: "process_banner" })}
            className="flex-shrink-0 bg-white text-[#0F0F0F] font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 whitespace-nowrap"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
