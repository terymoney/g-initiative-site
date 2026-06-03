import { ArrowRight, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Impact Areas", href: "/#impact-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#partners" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06100c]/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="/" aria-label="G Initiative home">
          <BrandLogo tone="light" size="nav" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.92rem] font-medium text-white/78 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/assets/g-initiative-portfolio-2026.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Portfolio
          </a>

          <a
            href="/#partners"
            className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white"
          >
            Partner With Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07120d]/95 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMenuOpen(false)}
                href={link.href}
                className="rounded-2xl bg-white/[0.04] px-4 py-3 text-white/85"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}