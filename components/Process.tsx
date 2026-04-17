"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business, your users, your market, and your goals. We build a clear roadmap before touching any tools.",
    duration: "Week 1–2",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our designers and architects shape the experience and technical foundation — wireframes, UI design, system design, and technical specifications.",
    duration: "Week 2–4",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Engineering kicks off with weekly sprints and continuous feedback loops. You see progress every week, not every quarter.",
    duration: "Ongoing",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We don't just hand over a product — we help you launch with momentum, monitor performance, and iterate based on real data.",
    duration: "Post-launch",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c5cfc]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#7c5cfc] text-sm font-semibold tracking-widest uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            A process built for{" "}
            <span className="gradient-text">speed and clarity.</span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-lg mx-auto">
            No black boxes. No surprises. Just a transparent, collaborative
            process that keeps you in control.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#7c5cfc]/15 border border-[#7c5cfc]/30 flex items-center justify-center">
                    <span className="text-[#a78bfa] font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Duration badge */}
                <span className="text-[11px] font-semibold text-[#7c5cfc] tracking-wider uppercase mb-3">
                  {step.duration}
                </span>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl border border-white/8 bg-[#0f0f0f] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
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
            className="flex-shrink-0 bg-[#7c5cfc] hover:bg-[#6d4ee8] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#7c5cfc]/25"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
