"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const serviceLabels: Record<string, string> = {
  ai: "AI Systems & Automation",
  digital: "Digital Presence & Infrastructure",
  design: "Product Design",
  dev: "App & Web Development",
  full: "End-to-End Product Delivery",
  strategy: "Growth & Digital Strategy",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [formStarted, setFormStarted] = useState(false);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      track("form_start");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabel = serviceLabels[form.service] || form.service || "Not specified";

    track("form_submit", {
      service: serviceLabel,
      has_company: Boolean(form.company),
    });

    const subject = encodeURIComponent(
      `Project Inquiry${form.company ? ` — ${form.company}` : ""}${form.name ? ` (${form.name})` : ""}`
    );

    const body = encodeURIComponent(
      `Hi Gigadroom,\n\nHere are my project details:\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\nService Interest: ${serviceLabel}\n\nProject Overview:\n${form.message}\n\n---\nSent via gigadroom.com`
    );

    window.location.href = `mailto:hi@gigadroom.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            Get in Touch
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#0F0F0F] mb-4">
            Let&apos;s build something
            <br />
            extraordinary.
          </h2>
          <p className="text-[#6B6B6B] text-base max-w-sm mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-[#0F0F0F] font-bold text-lg mb-6">
                Direct Contact
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] text-[#888] font-semibold tracking-[0.15em] uppercase mb-1">
                    Email
                  </p>
                    <a
                  href="mailto:hi@gigadroom.com"
                  onClick={() => track("contact_click", { method: "email", location: "contact_section" })}
                  className="text-[#0F0F0F] font-medium text-base hover:opacity-60 transition-opacity"
                >
                  hi@gigadroom.com
                </a>
                </div>
                <div>
                  <p className="text-[10px] text-[#888] font-semibold tracking-[0.15em] uppercase mb-1">
                    Phone / WhatsApp
                  </p>
                    <a
                    href="tel:+12763000906"
                    onClick={() => track("contact_click", { method: "phone", location: "contact_section" })}
                    className="text-[#0F0F0F] font-medium text-base hover:opacity-60 transition-opacity"
                  >
                    +1 (276) 300-0906
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-[#F7F7F5]">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[#6B6B6B] text-sm">Open for new projects</span>
              </div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                We typically respond within a few hours. For urgent
                inquiries, reach us on WhatsApp for a faster reply.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Free discovery call",
                "No lock-in contracts",
                "Transparent pricing",
                "Weekly progress updates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#0F0F0F] text-base font-light">—</span>
                  <span className="text-[#6B6B6B] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="border border-[#E5E5E5] rounded-2xl p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] text-[#888] font-semibold mb-2 uppercase tracking-[0.12em]">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onFocus={handleFormStart}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#0F0F0F] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#888] font-semibold mb-2 uppercase tracking-[0.12em]">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#0F0F0F] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#888] font-semibold mb-2 uppercase tracking-[0.12em]">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#0F0F0F] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#888] font-semibold mb-2 uppercase tracking-[0.12em]">
                    Service Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => {
                      setForm({ ...form, service: e.target.value });
                      if (e.target.value) {
                        track("service_selected", { service: serviceLabels[e.target.value] || e.target.value });
                      }
                    }}
                    className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm focus:outline-none focus:border-[#0F0F0F] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="ai">AI Systems & Automation</option>
                    <option value="digital">Digital Presence & Infrastructure</option>
                    <option value="design">Product Design</option>
                    <option value="dev">App & Web Development</option>
                    <option value="full">End-to-End Product Delivery</option>
                    <option value="strategy">Growth & Digital Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#888] font-semibold mb-2 uppercase tracking-[0.12em]">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, and timeline..."
                    className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#0F0F0F] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F0F0F] hover:bg-[#2a2a2a] text-white font-semibold py-4 rounded-xl transition-all duration-200 text-sm"
                >
                  Send via Email
                </button>

                <p className="text-center text-xs text-[#AAAAAA]">
                  Clicking send will open your email client with all details pre-filled.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
