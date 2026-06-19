import { GraduationCap, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const links = {
  Services: ["University Selection", "Visa Processing", "Scholarships", "Test Preparation", "Interview Prep"],
  Countries: ["United Kingdom", "Canada", "Australia", "United States", "Germany", "Ireland"],
  Company: ["About Us", "Our Team", "Careers", "Media Coverage", "Contact"],
  Resources: ["Student Blog", "Visa Guides", "Scholarship Database", "Country Profiles", "FAQs"],
};

const socials = [
  { icon: <Facebook size={17} />, label: "Facebook" },
  { icon: <Instagram size={17} />, label: "Instagram" },
  { icon: <Youtube size={17} />, label: "YouTube" },
  { icon: <Linkedin size={17} />, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060e20" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96a)" }}
              >
                <GraduationCap size={20} color="#0a2558" strokeWidth={2.5} />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.2rem", fontWeight: 800 }}
              >
                Euro<span style={{ color: "#c9a84c" }}>Pathways</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "220px" }}>
              Pakistan's leading study abroad consultancy. Helping students reach their potential since 2012.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
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
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
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
