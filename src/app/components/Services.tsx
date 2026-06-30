import { FileText, BookOpen, Plane, MessageSquare, Search, CircleDollarSign } from "lucide-react";

const services = [
  {
    icon: <Search size={26} />,
    title: "University Selection",
    description:
      "We assess your academic profile and match you with universities where you have the strongest chance of admission and scholarship.",
    highlight: "Profile-based matching",
  },
  {
    icon: <FileText size={26} />,
    title: "Application Assistance",
    description:
      "End-to-end application support including SOP writing, recommendation letter guidance, and document preparation.",
    highlight: "SOP & documentation",
  },
  {
    icon: <CircleDollarSign size={26} />,
    title: "Sponsor Profile Evaluation",
    description:
      "Don't let unverified bank transactions ruin your dream. Let our experts audit and structure your financial file.",
    highlight: "Financial file review",
  },
  {
    icon: <Plane size={26} />,
    title: "Visa Processing",
    description:
      "Complete visa application management with document checklist, interview preparation, and embassy coordination.",
    highlight: "End-to-end visa support",
  },
  {
    icon: <MessageSquare size={26} />,
    title: "Interview Preparation",
    description:
      "Mock visa and admission interviews with detailed feedback so you walk in confident and well-prepared.",
    highlight: "1-on-1 coaching",
  },
  {
    icon: <BookOpen size={26} />,
    title: "Scholarship Guidance",
    description:
      "Identify and apply for scholarships, fellowships, and funding opportunities available specifically for Pakistani students.",
    highlight: "Funded opportunities",
  },
];

const valueProps = [
  {
    title: "Step-by-Step Guidance",
    description: "A clear path from profile evaluation to university selection and visa submission.",
  },
  {
    title: "Post-Paid Installments",
    description: "Flexible payment plans that are structured around completed milestones and work delivered.",
  },
  {
    title: "100% Process Transparency",
    description: "Stay informed at every stage with open communication and complete document tracking.",
  },
  {
    title: "24/7 Student Support",
    description: "Round-the-clock assistance for urgent questions, updates, and follow-ups.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{
              background: "rgba(10,37,88,0.07)",
              color: "#0a2558",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          >
            WHAT WE OFFER
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
            Complete Study Abroad Support
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#5a6a8a", lineHeight: 1.7 }}>
            From choosing the right university to landing at the airport, we guide every Pakistani student through each
            step of the international education journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{
                background: "white",
                border: "1.5px solid rgba(10,37,88,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(10,37,88,0.08), rgba(10,37,88,0.04))", color: "#0a2558" }}
              >
                {service.icon}
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "1.1rem" }}
              >
                {service.title}
              </h3>
              <p style={{ color: "#5a6a8a", lineHeight: 1.65, fontSize: "0.9rem" }}>{service.description}</p>
              <div
                className="mt-5 inline-flex items-center px-3 py-1 rounded-full text-xs"
                style={{ background: "rgba(201,168,76,0.12)", color: "#8a6b1a", fontWeight: 600 }}
              >
                {service.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {valueProps.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3
                className="mb-2"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "1rem" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#5a6a8a", lineHeight: 1.6, fontSize: "0.9rem" }}>{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #0a2558 0%, #1a3d80 100%)" }}
        >
          <div>
            <h3
              className="text-white mb-1"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.3rem" }}
            >
              Not sure where to start?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
              Book a free 30-minute consultation with one of our counselors.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
              color: "#0a2558",
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Book Free Session
          </a>
        </div>
      </div>
    </section>
  );
}
