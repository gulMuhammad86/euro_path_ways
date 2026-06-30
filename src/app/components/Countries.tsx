import { useState } from "react";
import { ArrowRight, GraduationCap, DollarSign, Clock } from "lucide-react";

const countries = [
  {
    name: "Germany",
    flag: "🇩🇪",
    anchor: "country-germany",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop&auto=format",
    universities: "300+ Universities",
    avgCost: "€0–€3,000/yr",
    processingTime: "7–8 months",
    highlights: [
      "Strong engineering and research ecosystem",
      "Low or no tuition at public universities",
      "18-month job seeker visa",
    ],
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    anchor: "country-italy",
    image: "https://images.unsplash.com/photo-1526481280694-3dc0f3b02f8b?w=1200&h=800&fit=crop&auto=format",
    universities: "90+ Universities",
    avgCost: "€0–€4,000/yr",
    processingTime: "4–8 weeks",
    highlights: [
      "World-renowned culinary, fashion, and design heritage",
      "Highly affordable public university fees compared to Western Europe",
      "Numerous English-taught programs in history, architecture, and medicine",
    ],
  },
  {
    name: "France",
    flag: "🇫🇷",
    anchor: "country-france",
    image: "https://images.unsplash.com/photo-1496309746310-61d5e2f5db11?w=1200&h=800&fit=crop&auto=format",
    universities: "70+ Public Universities (3,500+ total higher education institutions)",
    avgCost: "€170–€3,770/yr",
    processingTime: "2–4 weeks",
    highlights: [
      "World-class business schools and Grandes Écoles",
      "Generous government subsidies for student housing (CAF)",
      "12-month post-study job seeker visa (Autorisation Provisoire de Séjour)",
    ],
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    anchor: "country-hungary",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&h=800&fit=crop&auto=format",
    universities: "65+ Universities & Colleges",
    avgCost: "€2,500–€8,000/yr",
    processingTime: "4–8 weeks",
    highlights: [
      "Low cost of living compared to Western European countries",
      "Prestigious and globally recognized medical and dental programs",
      "Access to the Stipendium Hungaricum scholarship program",
    ],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    anchor: "country-uk",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&auto=format",
    universities: "130+ Universities",
    avgCost: "£12,000–£20,000/yr",
    processingTime: "8–10 weeks",
    highlights: [
      "Home to world-leading, globally prestigious academic institutions",
      "Shorter degree durations (typically 1-year Master's programs)",
      "1.5-year PSW pathway and Graduate Route visa options",
    ],
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    anchor: "country-turkey",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=380&fit=crop&auto=format",
    universities: "200+ Universities",
    avgCost: "$1,000–$5,000/yr",
    processingTime: "4–8 weeks",
    highlights: ["Bridge between Europe and Asia", "Very low student accommodation costs", "Modern campuses with strong research facilities"],
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    anchor: "country-sweden",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=800&fit=crop&auto=format",
    universities: "40+ Universities",
    avgCost: "Free for EU/EEA (€7,500–€19,000/yr for non-EU)",
    processingTime: "8–12 weeks",
    highlights: [
      "Focus on innovation, equality, and sustainability-driven education",
      "Top-tier English proficiency across the entire population",
      "12-month post-study work permit to search for employment",
    ],
  },
  {
    name: "Belgium",
    flag: "🇧🇪",
    anchor: "country-belgium",
    image: "https://images.unsplash.com/photo-1496588152823-e299b7dba0ae?w=1200&h=800&fit=crop&auto=format",
    universities: "10+ Major Universities (plus numerous specialized university colleges)",
    avgCost: "€1,000–€4,500/yr",
    processingTime: "4–8 weeks",
    highlights: [
      "Located at the political heart of Europe (Brussels houses the EU and NATO)",
      "Exceptional, high-quality multilingual and international network building",
      "12-month orientation year visa to find employment after graduation",
    ],
  },
  {
    name: "Finland",
    flag: "🇫🇮",
    anchor: "country-finland",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop&auto=format",
    universities: "40+ Universities and Universities of Applied Sciences (UAS)",
    avgCost: "Free for EU/EEA (€4,000–€18,000/yr for non-EU)",
    processingTime: "4–8 weeks",
    highlights: [
      "Consistently ranked the happiest country in the world with an unmatched quality of life",
      "Internationally lauded, student-centric, and low-stress educational model",
      "Generous 2-year post-study residence permit for job seekers and entrepreneurs",
    ],
  },
];

export function Countries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = countries[activeIndex];

  return (
    <section id="countries" className="py-24" style={{ background: "#f0f4fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
            We specialize in placements across Europe’s most popular study destinations. Click a country to explore.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {countries.map((c, i) => (
            <button
              key={i}
              id={c.anchor}
              onClick={() => {
                setActiveIndex(i);
                if (typeof window !== "undefined") {
                  window.history.replaceState(null, "", `#${c.anchor}`);
                }
              }}
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

        <div
          className="rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-xl"
          style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.08)" }}
        >
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
              <span className="text-4xl" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
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

          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <GraduationCap size={16} />, label: "Institutions", value: active.universities },
                { icon: <DollarSign size={16} />, label: "Avg. Tuition", value: active.avgCost },
                { icon: <Clock size={16} />, label: "Process Time", value: active.processingTime },
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
