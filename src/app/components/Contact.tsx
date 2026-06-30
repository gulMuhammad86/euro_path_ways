import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactDirectory = [
  {
    name: "Osama bin Shafique",
    role: "General Manager",
    phone: "+92 339 9660033",
    email: "Osamashafique915@gmail.com",
  },
  {
    name: "Sara Arshad",
    role: "Managing Director",
    phone: "+92 339 9665525",
    email: "s.arshad07860@gmail.com",
  },
  {
    name: "Asma Hira",
    role: "Assistant Director",
    phone: "+92 318 5363041",
    email: "saraasma184@gmail.com",
  },
  {
    name: "Mishal Shabana",
    role: "HR Manager",
    phone: "+966 58 327 8431",
    email: "mishimalik852@gmail.com",
  },
  {
    name: "Haleema Sadia",
    role: "Head of Marketing",
    phone: "+92 318 5923384",
    email: "samanofficial181@gmail.com",
  },
];

const destinations = ["Germany", "Italy", "France", "Hungary", "UK", "Turkey", "Sweden", "Belgium", "Finland"];
const WEB3FORMS_ACCESS_KEY = "f208cca3-d7a6-4347-b8fd-c2c4e53d0c72";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    education: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields (Name, Phone, Email)");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("destination", form.destination || "Not specified");
      formData.append("education", form.education || "Not specified");
      formData.append("message", form.message || "No additional message");
      formData.append("subject", "New consultation request from EuroPathways");
      formData.append("from_name", "EuroPathways Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          destination: "",
          education: "",
          message: "",
        });
      } else {
        setError(data.message || "Failed to send enquiry. Please try again.");
      }
    } catch (error: unknown) {
      console.error("Web3Forms Error Details:", error);
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "rgba(10,37,88,0.07)", color: "#0a2558", fontWeight: 600, letterSpacing: "0.06em" }}
          >
            GET IN TOUCH
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
            Start Your Journey Today
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "#5a6a8a", lineHeight: 1.7 }}>
            Book a free consultation and our expert counselors will guide you through your study abroad options.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div
            className="lg:col-span-3 rounded-2xl p-8 sm:p-10"
            style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.08)" }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(10,37,88,0.07)" }}
                >
                  <CheckCircle size={32} style={{ color: "#0a2558" }} />
                </div>
                <h3
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#0a2558", fontSize: "1.3rem" }}
                >
                  Message Received!
                </h3>
                <p style={{ color: "#5a6a8a", maxWidth: "320px" }}>
                  Thank you for reaching out. A counselor from EuroPathways will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2.5 rounded-xl text-sm"
                  style={{ background: "#f0f4fb", color: "#0a2558", fontWeight: 600 }}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : error ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212, 24, 61, 0.07)" }}
                >
                  <AlertCircle size={32} style={{ color: "#d4183d" }} />
                </div>
                <h3
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#d4183d", fontSize: "1.3rem" }}
                >
                  Error Sending Message
                </h3>
                <p style={{ color: "#5a6a8a", maxWidth: "320px" }}>{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="mt-2 px-6 py-2.5 rounded-xl text-sm"
                  style={{ background: "#f0f4fb", color: "#0a2558", fontWeight: 600 }}
                >
                  Try again
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="mb-6"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "1.2rem" }}
                >
                  Free Consultation Request
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ahmed Khan"
                        className="px-4 py-2.5 rounded-xl outline-none transition-all"
                        style={{
                          border: "1.5px solid rgba(10,37,88,0.15)",
                          fontSize: "0.9rem",
                          background: "#fafbff",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 3XX XXXXXXX"
                        className="px-4 py-2.5 rounded-xl outline-none transition-all"
                        style={{
                          border: "1.5px solid rgba(10,37,88,0.15)",
                          fontSize: "0.9rem",
                          background: "#fafbff",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="px-4 py-2.5 rounded-xl outline-none transition-all"
                      style={{
                        border: "1.5px solid rgba(10,37,88,0.15)",
                        fontSize: "0.9rem",
                        background: "#fafbff",
                      }}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Preferred Destination</label>
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="px-4 py-2.5 rounded-xl outline-none"
                        style={{
                          border: "1.5px solid rgba(10,37,88,0.15)",
                          fontSize: "0.9rem",
                          background: "#fafbff",
                          color: form.destination ? "#0f1c36" : "#9ca3af",
                        }}
                      >
                        <option value="">Select country</option>
                        {destinations.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Education Level</label>
                      <select
                        name="education"
                        value={form.education}
                        onChange={handleChange}
                        className="px-4 py-2.5 rounded-xl outline-none"
                        style={{
                          border: "1.5px solid rgba(10,37,88,0.15)",
                          fontSize: "0.9rem",
                          background: "#fafbff",
                          color: form.education ? "#0f1c36" : "#9ca3af",
                        }}
                      >
                        <option value="">Select level</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD / Doctorate</option>
                        <option value="diploma">Diploma / Certificate</option>
                        <option value="foundation">Foundation Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>Tell us about yourself (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Your academic background, field of interest, target intake..."
                      className="px-4 py-2.5 rounded-xl outline-none resize-none"
                      style={{
                        border: "1.5px solid rgba(10,37,88,0.15)",
                        fontSize: "0.9rem",
                        background: "#fafbff",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl text-sm mt-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #0a2558, #1a3d80)",
                      color: "white",
                      fontWeight: 700,
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    <Send size={15} /> {loading ? "Sending..." : "Submit Free Consultation Request"}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #0a2558, #1a3d80)" }}
            >
              <p
                className="text-white mb-4"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
              >
                Why Choose EuroPathways?
              </p>
              {[
                "Expert in Europe",
                "Most affordable service charges",
                "Pay After work done",
                "Complete profile assessment",
                "Unlimited Applications under one time payment",
                "Expert LOM writing",
                "Interview preparation",
                "Sponsor Finance Guidance",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 mb-2.5">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: "#c9a84c", fontSize: "0.85rem", fontWeight: 700 }}>
                    ✓
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.86rem" }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5" style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.08)" }}>
                <p className="mb-3" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "0.95rem" }}>
                  Corporate Contact Directory
                </p>
                <div className="flex flex-col gap-3">
                  {contactDirectory.map((person) => (
                    <div key={person.email} className="rounded-xl border border-slate-100 p-3">
                      <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "0.9rem" }}>
                        {person.name}
                      </p>
                      <p style={{ color: "#8a6b1a", fontSize: "0.78rem", marginTop: "2px" }}>{person.role}</p>
                      <div className="mt-2 flex flex-col gap-1.5" style={{ color: "#5a6a8a", fontSize: "0.8rem" }}>
                        <div className="flex items-start gap-2">
                          <Phone size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#c9a84c" }} />
                          {person.phone}
                        </div>
                        <div className="flex items-start gap-2">
                          <Mail size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#c9a84c" }} />
                          {person.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
