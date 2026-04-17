"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "AI System",
    title: "Intelligent Customer Support Automation",
    description:
      "End-to-end AI support system reducing ticket resolution time by 70% for a SaaS company.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tags: ["AI", "Automation", "SaaS"],
  },
  {
    category: "Digital Product",
    title: "B2B Platform Redesign & Development",
    description:
      "From legacy system to a modern, performant web platform — shipped in 10 weeks.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    tags: ["Next.js", "Design", "Platform"],
  },
  {
    category: "Mobile App",
    title: "Consumer Fintech Mobile Application",
    description:
      "Full-cycle product design and development for a payment app. Launched on iOS and Android.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",
    tags: ["Mobile", "Fintech", "Design"],
  },
];

export default function Showcase() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#7c5cfc] text-sm font-semibold tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Built with purpose,
              <br />
              <span className="gradient-text">shipped with pride.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
            A selection of projects we&apos;ve delivered across industries and
            disciplines.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f0f0f] card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
                <span className="absolute top-4 left-4 text-xs font-semibold text-[#a78bfa] bg-[#7c5cfc]/15 border border-[#7c5cfc]/25 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-base mb-2 leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
