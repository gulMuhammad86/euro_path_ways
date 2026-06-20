import { ArrowRight, Calendar, Clock, X } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    tag: "UK Visa",
    title: "UK Student Visa 2025: Complete Guide for Pakistani Applicants",
    excerpt:
      "Everything you need to know about the UK Student visa (formerly Tier 4) — CAS letters, financial requirements, and the biometric appointment process.",
    content: "The UK Student Visa (Tier 4) is the pathway for international students wanting to study in the United Kingdom. This comprehensive guide covers all essential aspects you need to know.\n\nKey Requirements:\n• CAS Letter from your UK institution\n• Proof of financial means (typically £20,000-£50,000 depending on course)\n• English language proficiency (IELTS 6.0+)\n• Valid passport\n\nThe Application Process:\n1. Receive your CAS letter from your chosen UK university\n2. Complete the online visa application\n3. Pay the visa fee (£719 for 2025)\n4. Attend biometric appointment at a Visa Application Centre\n5. Provide supporting documents\n\nProcessing Time: Usually 3 weeks for standard processing, or 1 week for priority.\n\nFinancial Requirements: You must prove you have funds to cover tuition fees plus living expenses. The required amount varies by location but is typically £1,000-£2,000 per month.",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584392480919-651bda3987a7?w=500&h=300&fit=crop&auto=format",
    color: "#1a3d80",
  },
  {
    id: 2,
    tag: "Scholarships",
    title: "Top 10 Fully Funded Scholarships for Pakistani Students in 2025",
    excerpt:
      "A curated list of the most competitive and accessible scholarships available to Pakistani students — from Chevening to DAAD to Fulbright and beyond.",
    content: "Finding the right scholarship can be the key to pursuing your dream education abroad. Here are the top 10 fully funded scholarships available for Pakistani students:\n\n1. Chevening Scholarship (UK) - Covers tuition and living expenses\n2. DAAD Scholarships (Germany) - Fully funded for Masters and PhD\n3. Fulbright Scholarship (USA) - Prestigious US government program\n4. ADB Scholarship (Asian Development Bank) - For postgraduate studies\n5. Turkish Government Scholarships - Comprehensive coverage\n6. China Scholarship Council - Various programs\n7. Canadian Government Scholarships - Multiple opportunities\n8. Erasmus Mundus Scholarships - European programs\n9. MEXT Scholarship (Japan) - Excellent for STEM fields\n10. OKP Scholarship (Turkey) - Government funded\n\nApplication Tips:\n• Start early - most deadlines are 6-12 months before program start\n• Maintain a strong GPA (3.5+)\n• Write compelling essays\n• Get strong recommendation letters\n• Prepare for interviews\n\nSuccess Rate: Competitive scholarships have 1-10% acceptance rates. Apply to multiple opportunities to increase your chances.",
    date: "May 14, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1627556704283-452301a45fd0?w=500&h=300&fit=crop&auto=format",
    color: "#0f5132",
  },
  {
    id: 3,
    tag: "Canada",
    title: "Canada Study Permit vs. Student Direct Stream: Which One to Choose?",
    excerpt:
      "Confused between the regular study permit and SDS? We break down the eligibility criteria, processing times, and key differences so you can decide.",
    content: "Canada offers two main pathways for international students. Understanding the differences is crucial for choosing the right option.\n\nRegular Study Permit:\n✓ Open to all students\n✓ No income requirement restrictions\n✓ Processing time: 4-12 weeks\n✗ Longer processing period\n✗ More documentation required\n\nStudent Direct Stream (SDS):\n✓ Faster processing: 2 weeks\n✓ Simplified requirements\n✗ Higher upfront investment needed ($20,000 CAD)\n✗ Limited to eligible countries\n\nFinancial Requirements:\nRegular: GIC (Guaranteed Investment Certificate) not required but helpful\nSDS: Requires GIC ($20,000) + proof of funds for living expenses\n\nEligibility:\n• Must have admission letter from DLI-approved institution\n• English/French proficiency (CLB 6+)\n• Medical exam if applicable\n• Police certificate for some countries\n\nProcessing:\nSDS is specifically designed for faster processing and is ideal if you have sufficient funds upfront. Regular permit is better if you need more time to arrange finances.",
    date: "April 30, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1745558852855-9f9e34017226?w=500&h=300&fit=crop&auto=format",
    color: "#8b2020",
  },
  {
    id: 4,
    tag: "IELTS Tips",
    title: "How to Score 7+ in IELTS: Strategies That Actually Work",
    excerpt:
      "Our experienced IELTS trainers share time-tested techniques for each module — Reading, Listening, Writing, and Speaking — to push your score above 7.",
    content: "Achieving a 7+ in IELTS (equivalent to C1 level) requires strategic preparation and consistent practice. Here are proven techniques:\n\nListening (Target: 8+):\n• Take notes while listening - write keywords\n• Practice with BBC Learning, TED talks\n• Focus on synonyms and paraphrasing\n• Do 1 practice test daily\n\nReading (Target: 7.5+):\n• Skim and scan technique - don't read every word\n• Understand question types (True/False/Not Given)\n• Build vocabulary (Academic word list)\n• Practice speed reading with Guardian articles\n\nWriting (Target: 7+):\n• Task 1: Clear descriptions with comparisons\n• Task 2: Well-structured essays with examples\n• Use transition words and linking phrases\n• Get feedback on your practice essays\n• Study model answers\n\nSpeaking (Target: 7+):\n• Practice fluency over accuracy\n• Record yourself and listen\n• Join speaking groups online (iTalki, ConversationExchange)\n• Prepare for common topics but speak naturally\n• Practice thinking on your feet\n\nGeneral Strategy:\n• Take 1 full practice test per week\n• Review mistakes thoroughly\n• Study 2-3 months for improvement\n• Use official Cambridge IELTS books\n• Consider a tutor for personalized guidance\n\nKey Success Factor: Consistency over intensity. 1 hour daily is better than 5 hours once a week.",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=500&h=300&fit=crop&auto=format",
    color: "#5a1a1a",
  },
];

export function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const openBlog = (id: number) => {
    setSelectedBlog(id);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  const currentBlog = blogs.find((blog) => blog.id === selectedBlog);
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
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.07)" }}
              onClick={() => openBlog(blog.id)}
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
                  className="mt-4 flex items-center gap-1 text-xs group-hover:gap-2 transition-all cursor-pointer"
                  style={{ color: "#c9a84c", fontWeight: 700 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openBlog(blog.id);
                  }}
                >
                  Read more <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && currentBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeBlog}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b flex items-center justify-between p-6">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                  style={{ background: currentBlog.color, color: "white", fontWeight: 600 }}
                >
                  {currentBlog.tag}
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "#0a2558", fontFamily: "'Nunito', sans-serif" }}
                >
                  {currentBlog.title}
                </h2>
              </div>
              <button
                onClick={closeBlog}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Image */}
            <img src={currentBlog.image} alt={currentBlog.title} className="w-full h-64 object-cover" />

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center gap-6 mb-6" style={{ color: "#5a6a8a", fontSize: "0.9rem" }}>
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {currentBlog.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {currentBlog.readTime}
                </span>
              </div>

              <div
                className="prose prose-sm max-w-none"
                style={{ color: "#3a3f5c", lineHeight: 1.8, fontSize: "1rem" }}
              >
                {currentBlog.content.split("\n").map((paragraph, idx) => {
                  if (paragraph.trim() === "") return <div key={idx} className="h-2" />;
                  if (paragraph.match(/^[0-9]/)) {
                    return (
                      <div key={idx} className="ml-4 mb-2 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                        {paragraph}
                      </div>
                    );
                  }
                  if (paragraph.match(/^[✓✗•]/)) {
                    return (
                      <div key={idx} className="ml-4 mb-2 p-2">
                        {paragraph}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
