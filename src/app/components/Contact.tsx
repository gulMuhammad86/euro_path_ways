import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const offices = [
  {
    city: "Lahore (HQ)",
    address: "12-B, MM Alam Road, Gulberg III, Lahore",
    phone: "+92 42 3576 8800",
    email: "lahore@europathways.pk",
  },
  {
    city: "Karachi",
    address: "3rd Floor, Business Avenue, Shahrah-e-Faisal, Karachi",
    phone: "+92 21 3455 2200",
    email: "karachi@europathways.pk",
  },
  {
    city: "Islamabad",
    address: "Blue Area, Jinnah Avenue, F-7/4, Islamabad",
    phone: "+92 51 2876 3400",
    email: "islamabad@europathways.pk",
  },
];

const destinations = ["UK", "Canada", "Australia", "USA", "Germany", "Ireland", "Other"];

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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("SU4e6Ou6TibvzxsJD");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields (Name, Phone, Email)");
      setLoading(false);
      return;
    }

    try {
      const response = await emailjs.send(
        "service_plmm5ow",
        "template_n6nupwl",
        {
          to_email: "gulm34545@gmail.com",
          name: form.name,
          phone: form.phone,
          email: form.email,
          destination: form.destination || "Not specified",
          education: form.education || "Not specified",
          message: form.message || "No additional message",
        }
      );

      console.log("Email sent successfully:", response);
      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        destination: "",
        education: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("EmailJS Error Details:", error);

      let errorMessage = "Failed to send enquiry. Please try again.";

      if (error instanceof Error) {
        errorMessage = error.message;
        // Add specific error hints
        if (error.message.includes("invalid_service")) {
          errorMessage = "Service ID is invalid. Please check your EmailJS configuration.";
        } else if (error.message.includes("invalid_template")) {
          errorMessage = "Template ID is invalid. Please check your template setup in EmailJS.";
        } else if (error.message.includes("invalid_user")) {
          errorMessage = "Public Key is invalid. Please verify your EmailJS credentials.";
        } else if (error.message.includes("BadRequest")) {
          errorMessage = "Template variables mismatch. Please contact support.";
        }
      }

      setError(errorMessage);
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
        {/* Header */}
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
          {/* Left: Form */}
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
                <p style={{ color: "#5a6a8a", maxWidth: "320px" }}>
                  {error}
                </p>
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
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>
                        Preferred Destination
                      </label>
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
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>
                        Education Level
                      </label>
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
                    <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>
                      Tell us about yourself (optional)
                    </label>
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

          {/* Right: Offices */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Trust badges */}
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
                "Free initial profile assessment",
                "Dedicated counselor throughout",
                "No hidden fees — full transparency",
                "After-hours support available",
                "Money-back guarantee on visa refusals",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 mb-2.5">
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#c9a84c", fontSize: "0.85rem", fontWeight: 700 }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.86rem" }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-4">
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: "white", border: "1.5px solid rgba(10,37,88,0.08)" }}
                >
                  <p
                    className="mb-3"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#0a2558", fontSize: "0.9rem" }}
                  >
                    {office.city}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start gap-2" style={{ color: "#5a6a8a", fontSize: "0.8rem" }}>
                      <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#c9a84c" }} />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-2" style={{ color: "#5a6a8a", fontSize: "0.8rem" }}>
                      <Phone size={13} style={{ color: "#c9a84c" }} />
                      {office.phone}
                    </div>
                    <div className="flex items-center gap-2" style={{ color: "#5a6a8a", fontSize: "0.8rem" }}>
                      <Mail size={13} style={{ color: "#c9a84c" }} />
                      {office.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
