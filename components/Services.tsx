"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Palette, Code2, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    number: "01",
    title: "AI Systems & Automation",
    description:
      "We design and deploy intelligent AI systems that automate workflows, surface insights, and give your business an unfair advantage. From custom LLM integrations to full ML pipelines.",
    tags: ["AI Strategy", "Custom LLMs", "Automation", "Data Pipelines"],
    featured: true,
  },
  {
    icon: Globe,
    number: "02",
    title: "Digital Presence & Infrastructure",
    description:
      "Your brand's digital foundation — from high-performance websites and SEO architecture to cloud infrastructure that scales with your growth.",
    tags: ["Web Development", "SEO", "Cloud Infra", "Performance"],
    featured: false,
  },
  {
    icon: Palette,
    number: "03",
    title: "Product Design",
    description:
      "Beautiful, conversion-optimised interfaces grounded in user research. We craft experiences that users love and that drive measurable outcomes.",
    tags: ["UX Research", "UI Design", "Prototyping", "Design Systems"],
    featured: false,
  },
  {
    icon: Code2,
    number: "04",
    title: "App & Web Development",
    description:
      "From MVP to enterprise-grade systems — we engineer robust web and mobile applications built for performance, security, and long-term scale.",
    tags: ["React / Next.js", "Mobile Apps", "APIs", "Databases"],
    featured: false,
  },
  {
    icon: Layers,
    number: "05",
    title: "End-to-End Product Delivery",
    description:
      "Full-cycle product development: ideation, strategy, design, engineering, QA, launch, and iteration. One team, one vision, zero friction.",
    tags: ["Ideation", "Roadmapping", "Build", "Launch"],
    featured: false,
  },
  {
    icon: Zap,
    number: "06",
    title: "Growth & Digital Strategy",
    description:
      "We help businesses define their digital roadmap, identify growth levers, and execute with speed. Strategy that's grounded in data and designed to convert.",
    tags: ["Strategy", "Analytics", "Conversion", "Growth"],
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c5cfc] text-sm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              Everything your business
              <br />
              needs to{" "}
              <span className="gradient-text">lead digitally.</span>
            </h2>
            <p className="text-white/50 max-w-sm text-base leading-relaxed lg:text-right">
              We bring together strategy, design, and engineering
              under one roof — so nothing gets lost in translation.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className={`group relative p-8 bg-[#080808] hover:bg-[#0d0d0d] transition-all duration-300 cursor-default ${
                  service.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#7c5cfc]/10 border border-[#7c5cfc]/20 flex items-center justify-center group-hover:bg-[#7c5cfc]/20 group-hover:border-[#7c5cfc]/40 transition-all duration-300">
                    <Icon size={20} className="text-[#a78bfa]" />
                  </div>
                  <span className="text-white/15 font-bold text-3xl tabular-nums group-hover:text-white/25 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-white/50 group-hover:border-white/12 group-hover:text-white/60 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c5cfc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
