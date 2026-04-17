"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { track } from "@vercel/analytics";

const services = [
  {
    number: "01",
    title: "AI Systems & Automation",
    description:
      "We design and deploy intelligent AI systems that automate workflows, surface insights, and give your business an unfair advantage. From custom LLM integrations to full ML pipelines.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    alt: "AI systems visualization",
  },
  {
    number: "02",
    title: "Digital Presence & Infrastructure",
    description:
      "Your brand's digital foundation — from high-performance websites and SEO architecture to cloud infrastructure that scales with your growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    alt: "Digital infrastructure",
  },
  {
    number: "03",
    title: "Product Design",
    description:
      "Beautiful, conversion-optimised interfaces grounded in user research. We craft experiences that users love and that drive measurable outcomes.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700&q=80",
    alt: "Product design process",
  },
  {
    number: "04",
    title: "App & Web Development",
    description:
      "From MVP to enterprise-grade systems — we engineer robust web and mobile applications built for performance, security, and long-term scale.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
    alt: "App development",
  },
  {
    number: "05",
    title: "End-to-End Product Delivery",
    description:
      "Full-cycle product development: ideation, strategy, design, engineering, QA, launch, and iteration. One team, one vision, zero friction.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    alt: "Team collaboration",
  },
  {
    number: "06",
    title: "Growth & Digital Strategy",
    description:
      "We help businesses define their digital roadmap, identify growth levers, and execute with speed. Strategy grounded in data and designed to convert.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    alt: "Growth analytics",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#0F0F0F] leading-tight max-w-xl">
              Everything your business
              <br />
              needs to lead digitally.
            </h2>
            <p className="text-[#6B6B6B] max-w-sm text-base leading-relaxed lg:text-right">
              Strategy, design, and engineering under one roof — so
              nothing gets lost in translation.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => track("service_card_click", { service: service.title, number: service.number })}
              className="group border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:shadow-black/6 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#F0F0EE]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-xs font-bold text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-[#0F0F0F] font-bold text-lg mb-3 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
