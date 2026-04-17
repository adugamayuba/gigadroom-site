"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "AI System",
    title: "Intelligent Customer Support Automation",
    description:
      "End-to-end AI support system reducing ticket resolution time by 70% for a SaaS company.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=700&q=80",
    tags: ["AI", "Automation", "SaaS"],
  },
  {
    category: "Digital Product",
    title: "B2B Platform Redesign & Development",
    description:
      "From legacy system to a modern, performant web platform — shipped in 10 weeks.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
    tags: ["Next.js", "Design", "Platform"],
  },
  {
    category: "Mobile App",
    title: "Consumer Fintech Mobile Application",
    description:
      "Full-cycle product design and development for a payment app. Launched on iOS and Android.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=700&q=80",
    tags: ["Mobile", "Fintech", "Design"],
  },
];

export default function Showcase() {
  return (
    <section className="py-28 px-6 bg-[#F7F7F5]">
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
            <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Our Work
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#0F0F0F] leading-tight">
              Built with purpose,
              <br />
              shipped with pride.
            </h2>
          </div>
          <p className="text-[#888] text-sm max-w-xs leading-relaxed md:text-right">
            A selection of projects we&apos;ve delivered across industries
            and disciplines.
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
              className="group rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white hover:shadow-xl hover:shadow-black/6 transition-all duration-400"
            >
              <div className="relative h-56 overflow-hidden bg-[#EFEFED]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-[#0F0F0F] font-bold text-base mb-2 leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#F0F0EE] text-[#555] border border-[#E5E5E5]"
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
