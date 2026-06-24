import { ArrowRight, Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Impact Areas", href: "/#impact-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#partners" },
];

type SiteHeaderProps = {
  adaptive?: boolean;
};

export function SiteHeader({ adaptive = true }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkSection, setDarkSection] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!adaptive) return;

    let frame = 0;

    const updateTheme = () => {
      frame = 0;
      const headerBottom =
        headerRef.current?.getBoundingClientRect().bottom ?? 80;
      const sampleY = Math.min(window.innerHeight - 1, headerBottom + 2);
      const elements = document.elementsFromPoint(
        window.innerWidth / 2,
        sampleY,
      );

      const themedSection = elements
        .map((element) => element.closest<HTMLElement>("[data-header-theme]"))
        .find(Boolean);

      if (themedSection) {
        setDarkSection(themedSection.dataset.headerTheme === "dark");
        return;
      }

      const contentSection = elements
        .map((element) => element.closest<HTMLElement>("section, main"))
        .find(
          (element) =>
            Boolean(element) && !element?.contains(headerRef.current),
        );

      if (!contentSection) return;

      const color = window.getComputedStyle(contentSection).color;
      const channels = color.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);

      if (!channels || channels.length < 3) return;

      const [red, green, blue] = channels;
      const luminance =
        (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

      setDarkSection(luminance > 0.55);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTheme);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [adaptive]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-colors duration-300 ${
        darkSection
          ? "border-white/10 bg-[#06100c]/72"
          : "border-[#13271b]/10 bg-[#f7fbf6]/82 shadow-[0_8px_30px_rgba(8,27,34,0.06)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="/" aria-label="G Initiative home">
          <BrandLogo tone={darkSection ? "light" : "dark"} size="nav" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[0.92rem] font-medium transition-colors ${
                darkSection
                  ? "text-[#f7fbf6]/80 hover:text-white"
                  : "text-[#13271b]/80 hover:text-[#07120d]"
              }`}
              style={{ color: darkSection ? "#f7fbf6" : "#13271b" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/assets/g-initiative-portfolio-2026.pdf"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
              darkSection
                ? "border-white/15 text-[#f7fbf6]/85 hover:border-white/35 hover:bg-white/10"
                : "border-[#13271b]/15 text-[#13271b]/85 hover:border-[#13271b]/35 hover:bg-[#13271b]/5"
            }`}
            style={{ color: darkSection ? "#f7fbf6" : "#13271b" }}
          >
            <Download className="h-4 w-4" /> Portfolio
          </a>

          <a
            href="/#partners"
            className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white"
            style={{ color: "#ffffff" }}
          >
            Partner With Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
            darkSection
              ? "border-white/15 bg-white/5 text-white"
              : "border-[#13271b]/15 bg-[#13271b]/5 text-[#13271b]"
          }`}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`border-t px-5 py-5 lg:hidden ${
            darkSection
              ? "border-white/10 bg-[#07120d]/95"
              : "border-[#13271b]/10 bg-[#f7fbf6]/95"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMenuOpen(false)}
                href={link.href}
                className={`rounded-2xl px-4 py-3 ${
                  darkSection
                    ? "bg-white/[0.04] text-white/85"
                    : "bg-[#13271b]/5 text-[#13271b]/85"
                }`}
                style={{ color: darkSection ? "#f7fbf6" : "#13271b" }}
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
