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
            {/* Replace with brand statement */}
            Music. Nights. Culture. A space reserved for your story.
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
            <p>{/* email */}hello@theoffice.example</p>
            <p>{/* city */}Your City</p>
            <div className="flex gap-4 pt-2">
              <span className="text-white/35">IG</span>
              <span className="text-white/35">X</span>
              <span className="text-white/35">YT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-5 py-6 font-sans text-[11px] tracking-[0.18em] text-white/35 uppercase md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} The Office</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
