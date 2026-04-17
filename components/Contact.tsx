"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7c5cfc]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c5cfc] text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s build something
            <br />
            <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Tell us about your project and we&apos;ll get back to you within
            24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Direct Contact
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:hi@gigadroom.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#7c5cfc]/10 border border-[#7c5cfc]/20 flex items-center justify-center group-hover:bg-[#7c5cfc]/20 transition-all">
                    <Mail size={18} className="text-[#a78bfa]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#a78bfa] transition-colors">
                      hi@gigadroom.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+12763000906"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#7c5cfc]/10 border border-[#7c5cfc]/20 flex items-center justify-center group-hover:bg-[#7c5cfc]/20 transition-all">
                    <Phone size={18} className="text-[#a78bfa]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Phone / WhatsApp</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#a78bfa] transition-colors">
                      +1 (276) 300-0906
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-sm">Open for new projects</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                We typically respond within a few hours. For urgent
                inquiries, reach us via WhatsApp for a faster reply.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {[
                "Free discovery call",
                "No lock-in contracts",
                "Transparent pricing",
                "Weekly progress updates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#7c5cfc] flex-shrink-0" />
                  <span className="text-white/55 text-sm">{item}</span>
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
            <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#7c5cfc]/15 border border-[#7c5cfc]/30 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-[#a78bfa]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#141414] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#7c5cfc]/50 focus:bg-[#141414] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#141414] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#7c5cfc]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full bg-[#141414] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#7c5cfc]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#141414] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7c5cfc]/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#141414]">
                        Select a service...
                      </option>
                      <option value="ai" className="bg-[#141414]">AI Systems & Automation</option>
                      <option value="digital" className="bg-[#141414]">Digital Presence & Infrastructure</option>
                      <option value="design" className="bg-[#141414]">Product Design</option>
                      <option value="dev" className="bg-[#141414]">App & Web Development</option>
                      <option value="full" className="bg-[#141414]">End-to-End Product Delivery</option>
                      <option value="strategy" className="bg-[#141414]">Growth & Digital Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, goals, and timeline..."
                      className="w-full bg-[#141414] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#7c5cfc]/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#7c5cfc] hover:bg-[#6d4ee8] disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#7c5cfc]/25 group"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
