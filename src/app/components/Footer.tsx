import { Facebook, Instagram } from "lucide-react";
import logoImage from "../../assets/europatways logo.jpeg";

const links = {
  Services: [
    { label: "University Selection", href: "#services" },
    { label: "Visa Processing", href: "#services" },
    { label: "Scholarships", href: "#services" },
    { label: "Sponsor Profile Evaluation", href: "#services" },
    { label: "Interview Prep", href: "#services" },
  ],
  Countries: [
    { label: "Germany", href: "#country-germany" },
    { label: "Italy", href: "#country-italy" },
    { label: "France", href: "#country-france" },
    { label: "Hungary", href: "#country-hungary" },
    { label: "United Kingdom", href: "#country-uk" },
    { label: "Turkey", href: "#country-turkey" },
    { label: "Sweden", href: "#country-sweden" },
    { label: "Belgium", href: "#country-belgium" },
    { label: "Finland", href: "#country-finland" },
  ],
  Company: [
    { label: "About Us", href: "#home" },
    { label: "Our Team", href: "#contact" },
    { label: "Careers", href: "#contact" },
    { label: "Media Coverage", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Student Blog", href: "#blog" },
    { label: "Visa Guides", href: "#services" },
    { label: "Scholarship Database", href: "#services" },
    { label: "Country Profiles", href: "#countries" },
    { label: "FAQs", href: "#contact" },
  ],
};

const socials = [
  { icon: <Facebook size={17} />, label: "Facebook", href: "https://www.facebook.com/share/17fKGLUWdw/" },
  { icon: <Instagram size={17} />, label: "Instagram", href: "https://www.instagram.com/euro_pathways1?igsh=enlscjJ0YXFmZTZt" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060e20" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/20">
                <img src={logoImage} alt="Euro Pathways Logo" className="w-full h-full object-cover" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.2rem", fontWeight: 800 }}
              >
                Euro<span style={{ color: "#c9a84c" }}>Pathways</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "220px" }}>
              Trusted guidance for European student visas, university admissions, and financial preparation.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  color: "white",
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            {["AIRC Member", "British Council Partner", "ICEF Certified", "HEC Recognized"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "rgba(201,168,76,0.7)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
            © 2025 EuroPathways Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
