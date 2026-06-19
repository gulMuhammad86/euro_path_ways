import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    tag: "UK Visa",
    title: "UK Student Visa 2025: Complete Guide for Pakistani Applicants",
    excerpt:
      "Everything you need to know about the UK Student visa (formerly Tier 4) — CAS letters, financial requirements, and the biometric appointment process.",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584392480919-651bda3987a7?w=500&h=300&fit=crop&auto=format",
    color: "#1a3d80",
  },
  {
    tag: "Scholarships",
    title: "Top 10 Fully Funded Scholarships for Pakistani Students in 2025",
    excerpt:
      "A curated list of the most competitive and accessible scholarships available to Pakistani students — from Chevening to DAAD to Fulbright and beyond.",
    date: "May 14, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1627556704283-452301a45fd0?w=500&h=300&fit=crop&auto=format",
    color: "#0f5132",
  },
  {
    tag: "Canada",
    title: "Canada Study Permit vs. Student Direct Stream: Which One to Choose?",
    excerpt:
      "Confused between the regular study permit and SDS? We break down the eligibility criteria, processing times, and key differences so you can decide.",
    date: "April 30, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1745558852855-9f9e34017226?w=500&h=300&fit=crop&auto=format",
    color: "#8b2020",
  },
  {
    tag: "IELTS Tips",
    title: "How to Score 7+ in IELTS: Strategies That Actually Work",
    excerpt:
      "Our experienced IELTS trainers share time-tested techniques for each module — Reading, Listening, Writing, and Speaking — to push your score above 7.",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=500&h=300&fit=crop&auto=format",
    color: "#5a1a1a",
  },
];

export function Blogs() {
  return (
    <section id="blog" className="py-24" style={{ background: "#f0f4fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{ background: "rgba(10,37,88,0.07)", color: "#0a2558", fontWeight: 600, letterSpacing: "0.06em" }}
            >
              KNOWLEDGE HUB
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
              Latest from Our Experts
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
            style={{ color: "#0a2558", fontWeight: 600 }}
          >
            View all articles <ArrowRight size={15} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.07)" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs text-white"
                  style={{ background: blog.color, fontWeight: 600 }}
                >
                  {blog.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3" style={{ color: "#5a6a8a", fontSize: "0.72rem" }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {blog.readTime}
                  </span>
                </div>
                <h3
                  className="mb-2 group-hover:text-blue-900 transition-colors"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    color: "#0a2558",
                    fontSize: "0.95rem",
                    lineHeight: 1.35,
                  }}
                >
                  {blog.title}
                </h3>
                <p style={{ color: "#5a6a8a", fontSize: "0.82rem", lineHeight: 1.6 }}>{blog.excerpt}</p>
                <div
                  className="mt-4 flex items-center gap-1 text-xs group-hover:gap-2 transition-all"
                  style={{ color: "#c9a84c", fontWeight: 700 }}
                >
                  Read more <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
