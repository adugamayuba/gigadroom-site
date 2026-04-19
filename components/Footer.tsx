"use client";

import Logo from "./Logo";

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
    <footer className="bg-[#0F0F0F] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo inverted />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-7">
              The consulting and delivery arm of Softdroom Holdings. We
              build AI systems, digital products, and everything in between
              for businesses ready to lead.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hi@gigadroom.com"
                className="block text-white/40 hover:text-white text-sm transition-colors"
              >
                hi@gigadroom.com
              </a>
              <a
                href="tel:+13856990702"
                className="block text-white/40 hover:text-white text-sm transition-colors"
              >
                +1 (385) 699-0702
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.15em] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/45 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {year} Gigadroom. A Softdroom Holdings Company. All rights reserved.
          </p>
          <a
            href="https://www.softdroom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white/50 text-xs transition-colors"
          >
            softdroom.com &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
