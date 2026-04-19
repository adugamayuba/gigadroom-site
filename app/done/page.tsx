import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Message Received — Gigadroom",
  description: "We've received your message and will be in touch within 24 hours.",
};

export default function DonePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <header className="px-6 py-6">
        <Logo />
      </header>

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          {/* Check icon */}
          <div className="w-16 h-16 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-8">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 14.5L11.5 20L22 9"
                stroke="#16A34A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[10px] text-[#888] font-semibold tracking-[0.15em] uppercase mb-4">
            Message Received
          </p>
          <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold tracking-tight text-[#0F0F0F] mb-4 leading-tight">
            We&apos;ve got your message.
          </h1>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-10">
            Thanks for reaching out. Your details have been received and a member
            of the Gigadroom team will be in touch within{" "}
            <strong className="text-[#0F0F0F]">24 hours</strong>. For anything
            urgent, reach us directly below.
          </p>

          {/* Direct contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="mailto:hi@gigadroom.com"
              className="flex items-center gap-2 border border-[#E5E5E5] rounded-xl px-5 py-3 text-sm font-medium text-[#0F0F0F] hover:bg-[#F7F7F5] transition-colors w-full sm:w-auto justify-center"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="#0F0F0F" strokeWidth="1.25"/>
                <path d="M1 4.5L7.5 9L14 4.5" stroke="#0F0F0F" strokeWidth="1.25" strokeLinecap="round"/>
              </svg>
              hi@gigadroom.com
            </a>
            <a
              href="https://wa.me/13856990702"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#E5E5E5] rounded-xl px-5 py-3 text-sm font-medium text-[#0F0F0F] hover:bg-[#F7F7F5] transition-colors w-full sm:w-auto justify-center"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1C3.91 1 1 3.91 1 7.5c0 1.17.31 2.27.85 3.22L1 14l3.37-.83A6.47 6.47 0 0 0 7.5 14C11.09 14 14 11.09 14 7.5S11.09 1 7.5 1Z" stroke="#0F0F0F" strokeWidth="1.25" strokeLinejoin="round"/>
                <path d="M5.5 5.75c.1.5.4 1.5 1.25 2.25S8.5 9.4 9 9.5" stroke="#0F0F0F" strokeWidth="1.25" strokeLinecap="round"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* What happens next */}
          <div className="border border-[#E5E5E5] rounded-2xl p-6 text-left bg-[#F7F7F5] mb-8">
            <p className="text-[10px] text-[#888] font-semibold tracking-[0.15em] uppercase mb-4">
              What happens next
            </p>
            <ol className="space-y-3">
              {[
                "Our team reviews your project details",
                "We reach out within 24 hours",
                "We schedule a free discovery call",
                "We scope the project and get to work",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#0F0F0F] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[#6B6B6B] text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F0F0F] text-sm font-medium hover:opacity-60 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Gigadroom
          </Link>
        </div>
      </div>

      {/* Footer strip */}
      <footer className="px-6 py-6 text-center">
        <p className="text-[#CCCCCC] text-xs">
          © {new Date().getFullYear()} Gigadroom. A Softdroom Holdings Company.
        </p>
      </footer>
    </main>
  );
}
