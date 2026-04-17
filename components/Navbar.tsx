"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";
import Logo from "./Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Hero is ~100vh tall, switch to dark text after hero
      setHeroVisible(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInverted = heroVisible && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <Logo inverted={isInverted} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => track("nav_click", { label: link.label })}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isInverted
                    ? "text-white/70 hover:text-white"
                    : "text-[#555] hover:text-[#0F0F0F]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:hi@gigadroom.com"
              onClick={() => track("contact_click", { method: "email", location: "navbar" })}
              className={`text-sm transition-colors ${
                isInverted ? "text-white/60 hover:text-white" : "text-[#888] hover:text-[#0F0F0F]"
              }`}
            >
              hi@gigadroom.com
            </a>
            <a
              href="#contact"
              onClick={() => track("cta_click", { label: "Get Started", location: "navbar" })}
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                isInverted
                  ? "bg-white text-[#0F0F0F] hover:bg-white/90"
                  : "bg-[#0F0F0F] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] transition-all duration-300 ${isInverted ? "bg-white" : "bg-[#0F0F0F]"} ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] transition-all duration-300 ${isInverted ? "bg-white" : "bg-[#0F0F0F]"} ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] transition-all duration-300 ${isInverted ? "bg-white" : "bg-[#0F0F0F]"} ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-white border-b border-[#E5E5E5] md:hidden shadow-sm"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMobileOpen(false); track("nav_click", { label: link.label, device: "mobile" }); }}
                  className="text-[#0F0F0F] font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => { setMobileOpen(false); track("cta_click", { label: "Get Started", location: "navbar_mobile" }); }}
                className="mt-2 text-center bg-[#0F0F0F] text-white font-semibold px-5 py-3 rounded-full"
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
