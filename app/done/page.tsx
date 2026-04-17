import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Message Sent — Gigadroom",
  description: "Thanks for reaching out. We'll be in touch within 24 hours.",
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
            Email Client Opened
          </p>
          <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold tracking-tight text-[#0F0F0F] mb-4 leading-tight">
            You&apos;re one step away.
          </h1>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-2">
            Your email client should have opened with all your details pre-filled.
            Just hit <strong className="text-[#0F0F0F]">Send</strong> and we&apos;ll get
            back to you within 24 hours.
          </p>
          <p className="text-[#AAAAAA] text-sm mb-10">
            Didn&apos;t open?{" "}
            <a
              href="mailto:hi@gigadroom.com"
              className="text-[#0F0F0F] underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Email us directly
            </a>{" "}
            or reach us on{" "}
            <a
              href="https://wa.me/12763000906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F0F0F] underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              WhatsApp
            </a>
            .
          </p>

          {/* What happens next */}
          <div className="border border-[#E5E5E5] rounded-2xl p-6 text-left bg-[#F7F7F5] mb-8">
            <p className="text-[10px] text-[#888] font-semibold tracking-[0.15em] uppercase mb-4">
              What happens next
            </p>
            <ol className="space-y-3">
              {[
                "We review your project details",
                "We reply within 24 hours",
                "We schedule a free discovery call",
                "We build something great together",
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
