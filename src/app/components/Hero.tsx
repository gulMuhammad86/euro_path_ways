import { ArrowRight, CheckCircle, Users, Award, Globe } from "lucide-react";

const stats = [
  { value: "5,000+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "15+", label: "Countries Covered" },
  { value: "12 Yrs", label: "Experience" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "64px" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?w=1600&h=900&fit=crop&auto=format"
          alt="University graduates celebrating"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(10,37,88,0.92) 0%, rgba(10,37,88,0.80) 50%, rgba(10,37,88,0.60) 100%)",
          }}
        />
        {/* Gold accent shape */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
          style={{
            background: "linear-gradient(180deg, #c9a84c 0%, transparent 100%)",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6"
            style={{ background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.4)", color: "#e8c96a" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Pakistan's Most Trusted Visa Consultancy
          </div>

          <h1
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Your Dream Abroad
            <br />
            <span style={{ color: "#c9a84c" }}>Starts Right Here</span>
          </h1>

          <p
            className="mb-8 max-w-lg"
            style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.75 }}
          >
            EuroPathways helps Pakistani students secure admissions and visas to top universities across UK, USA, Canada,
            Australia, and Europe. Expert guidance — from application to landing.
          </p>

          {/* Checkpoints */}
          <div className="flex flex-col gap-2.5 mb-10">
            {["Free initial consultation", "100% transparent process", "Dedicated case manager for every student"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={17} style={{ color: "#c9a84c", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.92rem" }}>{item}</span>
                </div>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90 hover:translate-y-[-1px] shadow-lg"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                color: "#0a2558",
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 8px 30px rgba(201,168,76,0.35)",
              }}
            >
              Get Free Consultation <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "white", fontWeight: 500 }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="grid grid-cols-2 gap-4 p-8 rounded-2xl max-w-sm w-full"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#c9a84c",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", marginTop: "0.35rem" }}>
                  {stat.label}
                </span>
              </div>
            ))}
            {/* Badges row */}
            <div
              className="col-span-2 flex items-center justify-center gap-3 pt-4 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { icon: <Users size={14} />, label: "Expert Team" },
                { icon: <Award size={14} />, label: "Certified" },
                { icon: <Globe size={14} />, label: "Global Network" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem" }}>
                  <span style={{ color: "#c9a84c" }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span style={{ color: "white", fontSize: "0.7rem", letterSpacing: "0.1em" }}>SCROLL</span>
        <div className="w-px h-8 bg-white opacity-40" />
      </div>
    </section>
  );
}
