"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { track } from "@vercel/analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Modern workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlay for premium dark feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-[#0a0a1a]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-[-0.03em] leading-[1.0] text-white mb-6"
        >
          From Idea
          <br />
          to Reality.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-white/65 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          We build AI systems, digital infrastructure, and end-to-end
          products for ambitious businesses — from strategy and design
          to development and launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Desktop: Start a Project */}
          <a
            href="#contact"
            onClick={() => track("cta_click", { label: "Start a Project", location: "hero" })}
            className="hidden sm:inline-flex bg-white text-[#0F0F0F] font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 text-base"
          >
            Start a Project
          </a>

          {/* Mobile: WhatsApp CTA */}
          <a
            href="https://wa.me/13856990702?text=Hi%20Gigadroom%2C%20I%27d%20like%20to%20chat%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_click", { label: "WhatsApp Hero", location: "hero_mobile" })}
            className="sm:hidden inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1ebe5d] transition-all duration-200 text-base w-full justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1C5.03 1 1 5.03 1 10c0 1.56.41 3.03 1.13 4.3L1 19l4.82-1.11A9 9 0 0 0 10 19c4.97 0 9-4.03 9-9s-4.03-9-9-9Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.2"/>
              <path d="M7.2 6.5c-.2-.5-.7-.5-.9 0l-.5 1.2c-.1.3 0 .7.2.9 1 1.3 2.2 2.5 3.5 3.5.3.2.6.3.9.2l1.2-.5c.5-.2.5-.7 0-.9L10.4 10c-.2-.1-.5-.1-.7 0l-.5.5a5.6 5.6 0 0 1-1.7-1.7l.5-.5c.2-.2.2-.5 0-.7L7.2 6.5Z" fill="white"/>
            </svg>
            Chat with a Strategist
          </a>

          <a
            href="#services"
            onClick={() => track("cta_click", { label: "Explore Services", location: "hero" })}
            className="text-white/80 hover:text-white font-medium px-8 py-4 rounded-full border border-white/25 hover:border-white/50 transition-all duration-200 text-base w-full sm:w-auto text-center"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-3 gap-4">
          {[
            { value: "End-to-End", label: "Full service delivery" },
            { value: "AI-First", label: "Every solution we build" },
            { value: "Global", label: "Clients & delivery" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-white font-bold text-lg md:text-xl">{stat.value}</div>
              <div className="text-white/45 text-xs md:text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
