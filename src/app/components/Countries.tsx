import { useState } from "react";
import { ArrowRight, GraduationCap, DollarSign, Clock } from "lucide-react";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1751577490122-19455c5d39e2?w=600&h=380&fit=crop&auto=format",
    universities: "130+ Universities",
    avgCost: "£12,000–£38,000/yr",
    processingTime: "3–6 weeks",
    highlights: ["Post-Study Work Visa (2yrs)", "World-class research", "Cultural diversity"],
    color: "#1a3d80",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1671513307798-efdaabb1580f?w=600&h=380&fit=crop&auto=format",
    universities: "100+ Institutions",
    avgCost: "CAD 15,000–45,000/yr",
    processingTime: "4–8 weeks",
    highlights: ["PR pathway after graduation", "High quality of life", "Part-time work allowed"],
    color: "#8b2020",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=380&fit=crop&auto=format",
    universities: "43+ Universities",
    avgCost: "AUD 20,000–45,000/yr",
    processingTime: "2–4 weeks",
    highlights: ["Post-study work rights (up to 6yrs)", "Scholarships available", "Safe, welcoming cities"],
    color: "#0f5132",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1641160616553-a9d21a846e49?w=600&h=380&fit=crop&auto=format",
    universities: "4,000+ Institutions",
    avgCost: "$20,000–$55,000/yr",
    processingTime: "2–5 months",
    highlights: ["OPT work authorization (3yrs STEM)", "Ivy League access", "Largest research funding"],
    color: "#1a3d80",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1552035496-08efc7baf40e?w=600&h=380&fit=crop&auto=format",
    universities: "300+ Universities",
    avgCost: "Low/No tuition (€0–3,000/yr)",
    processingTime: "6–12 weeks",
    highlights: ["Near-free tuition (public unis)", "Strong engineering programs", "18-month job seeker visa"],
    color: "#5a1a1a",
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    image: "https://images.unsplash.com/photo-1584392480919-651bda3987a7?w=600&h=380&fit=crop&auto=format",
    universities: "8 Top Universities",
    avgCost: "€10,000–€25,000/yr",
    processingTime: "3–6 weeks",
    highlights: ["English-speaking EU country", "Stay-Back visa (2 years)", "Tech hub of Europe"],
    color: "#0f5132",
  },
];

export function Countries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = countries[activeIndex];

  return (
    <section id="countries" className="py-24" style={{ background: "#f0f4fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "rgba(10,37,88,0.07)", color: "#0a2558", fontWeight: 600, letterSpacing: "0.06em" }}
          >
            STUDY DESTINATIONS
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 900,
              color: "#0a2558",
              lineHeight: 1.2,
            }}
          >
            Where Will You Study?
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#5a6a8a", lineHeight: 1.7 }}>
            We specialize in placements across the world's top study destinations. Click a country to explore.
          </p>
        </div>

        {/* Country tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {countries.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: i === activeIndex ? "#0a2558" : "white",
                color: i === activeIndex ? "white" : "#0a2558",
                border: "1.5px solid",
                borderColor: i === activeIndex ? "#0a2558" : "rgba(10,37,88,0.15)",
                fontWeight: i === activeIndex ? 700 : 400,
              }}
            >
              <span>{c.flag}</span>
              {c.name}
            </button>
          ))}
        </div>

        {/* Feature card */}
        <div
          className="rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-xl"
          style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.08)" }}
        >
          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-64 overflow-hidden">
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,37,88,0.55) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-5 left-5">
              <span
                className="text-4xl"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              >
                {active.flag}
              </span>
              <p
                className="text-white mt-1"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.4rem" }}
              >
                {active.name}
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <GraduationCap size={16} />, label: "Institutions", value: active.universities },
                { icon: <DollarSign size={16} />, label: "Avg. Tuition", value: active.avgCost },
                { icon: <Clock size={16} />, label: "Visa Time", value: active.processingTime },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl" style={{ background: "#f0f4fb" }}>
                  <span style={{ color: "#c9a84c" }}>{stat.icon}</span>
                  <p className="mt-1" style={{ fontSize: "0.68rem", color: "#5a6a8a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontWeight: 700, color: "#0a2558", fontSize: "0.8rem", marginTop: "2px" }}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <h4
              className="mb-3"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "0.95rem" }}
            >
              Why Study in {active.name}?
            </h4>
            <ul className="flex flex-col gap-2.5 mb-8">
              {active.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#8a6b1a", fontWeight: 700 }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#374151", fontSize: "0.9rem" }}>{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm self-start hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #0a2558, #1a3d80)",
                color: "white",
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Apply for {active.name} <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
