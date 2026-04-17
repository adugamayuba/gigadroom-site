"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const links = {
  Services: [
    "AI Systems",
    "Digital Presence",
    "Product Design",
    "App Development",
    "End-to-End Delivery",
    "Growth Strategy",
  ],
  Company: ["About", "How We Work", "Our Work", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c5cfc] to-[#a78bfa] flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Gigadroom
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              The consulting and delivery arm of Softdroom Holdings. We build
              AI systems, digital products, and everything in between for
              businesses ready to lead.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hi@gigadroom.com"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
              >
                <Mail size={14} />
                hi@gigadroom.com
              </a>
              <a
                href="tel:+12763000906"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} />
                +1 (276) 300-0906
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Gigadroom. A Softdroom Holdings Company. All rights reserved.
          </p>
          <a
            href="https://www.softdroom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/25 hover:text-white/50 text-xs transition-colors"
          >
            Softdroom Holdings
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
