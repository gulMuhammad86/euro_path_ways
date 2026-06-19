import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Siddiqui",
    city: "Lahore",
    university: "University of Edinburgh, UK",
    program: "MSc Data Science",
    year: "2024",
    photo: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=120&h=120&fit=crop&auto=format",
    text: "EuroPathways transformed my dream into reality. I had applied on my own twice and was rejected. Their team revamped my SOP, guided me through the visa process step by step, and I received my CAS within 3 weeks. Highly recommend to every Pakistani student.",
    rating: 5,
  },
  {
    name: "Hamza Tariq",
    city: "Karachi",
    university: "University of Toronto, Canada",
    program: "MBA",
    year: "2023",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format",
    text: "I was confused between Canada and UK. The counselors at EuroPathways sat with me for two hours, understood my background, and helped me make the right choice. Got a 40% scholarship and my visa was approved in 5 weeks. The team is incredibly professional.",
    rating: 5,
  },
  {
    name: "Fatima Malik",
    city: "Islamabad",
    university: "Technical University of Munich, Germany",
    program: "MS Computer Engineering",
    year: "2024",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format",
    text: "Germany was my dream and everyone said it was too complicated. EuroPathways handled my blocked account setup, APS verification, and embassy appointment — all without stress. Now I'm studying here with almost zero tuition. Incredible service!",
    rating: 5,
  },
  {
    name: "Usman Ahmed",
    city: "Faisalabad",
    university: "University of Melbourne, Australia",
    program: "Bachelor of Engineering",
    year: "2023",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format",
    text: "EuroPathways helped me secure an excellent merit scholarship at Melbourne. My visa was approved in just 18 days. Their post-departure support was also amazing — they even helped me understand my rights as an international student in Australia.",
    rating: 5,
  },
  {
    name: "Sana Nawaz",
    city: "Multan",
    university: "Boston University, USA",
    program: "MS Public Health",
    year: "2024",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format",
    text: "The F-1 visa process for USA is intense, but EuroPathways made it manageable. They prepared me thoroughly for the interview — I was asked questions exactly as they predicted! Now at BU on a partial scholarship. Forever grateful to this team.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{ background: "rgba(10,37,88,0.07)", color: "#0a2558", fontWeight: 600, letterSpacing: "0.06em" }}
            >
              SUCCESS STORIES
            </span>
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 900,
                color: "#0a2558",
                lineHeight: 1.2,
              }}
            >
              Students Who Made It
            </h2>
          </div>
          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{ border: "1.5px solid rgba(10,37,88,0.15)", color: "#0a2558", background: "white" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "#0a2558", color: "white" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="rounded-2xl p-7 transition-all duration-300"
              style={{
                background: i === 0 ? "#0a2558" : "white",
                border: "1.5px solid",
                borderColor: i === 0 ? "#0a2558" : "rgba(10,37,88,0.08)",
                opacity: i === 2 ? 0.75 : 1,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                style={{ color: i === 0 ? "rgba(201,168,76,0.5)" : "rgba(10,37,88,0.12)", marginBottom: "1rem" }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="#c9a84c" strokeWidth={0} style={{ color: "#c9a84c" }} />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  color: i === 0 ? "rgba(255,255,255,0.82)" : "#374151",
                  lineHeight: 1.7,
                  fontSize: "0.88rem",
                  marginBottom: "1.5rem",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: `2px solid ${i === 0 ? "#c9a84c" : "rgba(10,37,88,0.12)"}` }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      color: i === 0 ? "white" : "#0a2558",
                      fontSize: "0.9rem",
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ color: i === 0 ? "rgba(255,255,255,0.6)" : "#5a6a8a", fontSize: "0.75rem" }}>
                    {t.university}
                  </p>
                  <p style={{ color: i === 0 ? "#c9a84c" : "#8a6b1a", fontSize: "0.72rem", fontWeight: 600 }}>
                    {t.program} · {t.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "#0a2558" : "rgba(10,37,88,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
