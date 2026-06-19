import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Countries", href: "#countries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20), { passive: true });
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10, 37, 88, 0.97)" : "rgba(10, 37, 88, 0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 24px rgba(10,37,88,0.18)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96a)" }}
          >
            <GraduationCap size={20} color="#0a2558" strokeWidth={2.5} />
          </div>
          <span
            className="text-white tracking-tight"
            style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.2rem", fontWeight: 800 }}
          >
            Euro<span style={{ color: "#c9a84c" }}>Pathways</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm transition-colors duration-200"
                style={{
                  color: isActive ? "#c9a84c" : "rgba(255,255,255,0.82)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ background: "#c9a84c" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
            color: "#0a2558",
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Free Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(10,37,88,0.98)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-sm text-center"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                color: "#0a2558",
                fontWeight: 700,
              }}
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
