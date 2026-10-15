import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-20">
        <div>
          <LogoMark size="md" />
          <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-white/45">
            Rave. Culture. Community.
            <br />
            Become a colleague today.
          </p>
        </div>

        <div>
          <p className="mb-5 font-sans text-[11px] tracking-[0.3em] text-white/40 uppercase">
            Navigate
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-sans text-[11px] tracking-[0.3em] text-white/40 uppercase">
            Contact
          </p>
          <div className="space-y-3 font-sans text-sm text-white/65">
            <a
              href="mailto:info@theofficesoundz.com"
              className="transition-colors hover:text-white"
            >
              info@theofficesoundz.com
            </a>
            <p>Leeds</p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/theofficesoundz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/35 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
                </svg>
              </a>
              <span role="img" aria-label="SoundCloud" className="text-white/35">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.8 9.4a3.6 3.6 0 0 0-6.8-.9 2.9 2.9 0 0 0-3.2 2.8c0 .2 0 .4.1.6A2.6 2.6 0 0 0 7.4 17h9.2a3.2 3.2 0 0 0 .2-6.4z" />
                  <path d="M4.2 14.2v2.2M5.6 13.2v4.2M7 12.4V18" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span role="img" aria-label="YouTube" className="text-white/35">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.5 12.2s0-2.6-.3-3.8c-.2-.8-.8-1.4-1.6-1.6C19.2 6.4 12 6.4 12 6.4s-7.2 0-8.6.4c-.8.2-1.4.8-1.6 1.6-.3 1.2-.3 3.8-.3 3.8s0 2.6.3 3.8c.2.8.8 1.4 1.6 1.6 1.4.4 8.6.4 8.6.4s7.2 0 8.6-.4c.8-.2 1.4-.8 1.6-1.6.3-1.2.3-3.8.3-3.8zM9.9 15.1V9.3l5.2 2.9-5.2 2.9z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-6 font-sans text-[11px] leading-relaxed text-white/35 md:px-8">
          <p>
            The Office Soundz LTD is a limited liability company registered in
            England and Wales under Company number 16823860. Reg Offices. 25
            Lakehurst Road, Epsom, England, KT19 0EL
          </p>
        </div>
      </div>
    </footer>
  );
}
