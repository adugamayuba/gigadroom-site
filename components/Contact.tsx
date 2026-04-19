"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const serviceLabels: Record<string, string> = {
  ai: "AI Systems & Automation",
  digital: "Digital Presence & Infrastructure",
  design: "Product Design",
  dev: "App & Web Development",
  full: "End-to-End Product Delivery",
  strategy: "Growth & Digital Strategy",
};

const budgetLabels: Record<string, string> = {
  "1k-5k": "$1,000 – $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k-25k": "$10,000 – $25,000",
  "25k-50k": "$25,000 – $50,000",
  "50k-100k": "$50,000 – $100,000",
  "100k+": "$100,000+",
  unsure: "Not sure yet",
};

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [formStarted, setFormStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      track("form_start");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const serviceLabel = serviceLabels[form.service] || form.service || "Not specified";
    const budgetLabel = budgetLabels[form.budget] || form.budget || "Not specified";

    // Save lead to Firestore
    try {
      await addDoc(collection(db, "leads"), {
        name: form.name,
        email: form.email,
        company: form.company || null,
        service: serviceLabel,
        budget: budgetLabel,
        message: form.message,
        submittedAt: serverTimestamp(),
        source: "gigadroom.com",
      });
    } catch (err) {
      console.error("Firestore write failed:", err);
      // Don't block the user — still open email
    }

    track("form_submit", {
      service: serviceLabel,
      budget: budgetLabel,
      has_company: Boolean(form.company),
    });

    router.push("/done");
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

          {/* Right — Form (desktop) / WhatsApp card (mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* ── Mobile: WhatsApp CTA ── */}
            <div className="lg:hidden mb-6">
              <a
                href="https://wa.me/12763000906?text=Hi%20Gigadroom%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", { label: "WhatsApp Contact", location: "contact_mobile" })}
                className="flex items-center justify-between gap-4 w-full bg-[#25D366] hover:bg-[#1ebe5d] transition-colors rounded-2xl px-6 py-5"
              >
                <div className="text-left">
                  <p className="text-white font-bold text-base leading-tight">Chat with a Strategist</p>
                  <p className="text-white/80 text-sm mt-0.5">Typically replies within minutes</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1.5C6.6 1.5 1.5 6.6 1.5 13c0 2.1.56 4.06 1.54 5.75L1.5 24.5l5.9-1.5A11.43 11.43 0 0 0 13 24.5c6.4 0 11.5-5.1 11.5-11.5S19.4 1.5 13 1.5Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.4"/>
                    <path d="M9.2 8c-.28-.68-.95-.68-1.2 0l-.65 1.6c-.15.38 0 .87.28 1.13 1.33 1.72 2.93 3.32 4.65 4.65.26.2.75.43 1.13.28l1.6-.65c.68-.28.68-.95 0-1.2l-1.6-.65c-.28-.1-.65-.1-.9 0l-.65.65a7.24 7.24 0 0 1-2.19-2.19l.65-.65c.26-.26.26-.62 0-.9L9.2 8Z" fill="white"/>
                  </svg>
                </div>
              </a>

              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#E5E5E5]" />
                <span className="text-[#BBBBBB] text-xs font-medium">or fill in the form</span>
                <div className="flex-1 h-px bg-[#E5E5E5]" />
              </div>
            </div>

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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => {
                        setForm({ ...form, budget: e.target.value });
                        if (e.target.value) {
                          track("budget_selected", { budget: budgetLabels[e.target.value] || e.target.value });
                        }
                      }}
                      className="w-full bg-[#F7F7F5] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0F0F0F] text-sm focus:outline-none focus:border-[#0F0F0F] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a range...</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-25k">$10,000 – $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k-100k">$50,000 – $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
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
                  disabled={submitting}
                  className="w-full bg-[#0F0F0F] hover:bg-[#2a2a2a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 text-sm"
                >
                  {submitting ? "Sending…" : "Send"}
                </button>

                <p className="text-center text-xs text-[#AAAAAA]">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
