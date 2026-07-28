import { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  Share2,
  PlayCircle,
  Monitor,
  Apple,
  ChevronDown,
  Send,
  MessageCircle,
} from "lucide-react";
import { Badge } from "../components/ui/Badge";

const FAQS = [
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, credit/debit cards, and net banking via Razorpay. All transactions are secure.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Yes, the INSP portal is responsive and also available as a Windows and Mac desktop app. Mobile browser support is available.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Please review our Cancellation Policy on the website. Contact us within 7 days of purchase for refund queries.",
  },
  {
    question: "How do INSP Coins work?",
    answer:
      "INSP Coins are earned by solving problems and taking tests. 1 Coin = Rs.1 INR, redeemable in the INSP Store.",
  },
  {
    question: "What is the difference between Video Portal and Exam Portal?",
    answer:
      "Video Portal gives access to all recorded and live lectures. Exam Portal provides AITS mock tests and practice exams. Both are included in Premium plans.",
  },
  {
    question: "How do I apply my referral/discount code?",
    answer:
      "Enter your code at checkout. FLAT10 gives 10% off. Student referral codes give 11% off, and the referrer earns 11% in INSP Coins.",
  },
];

function FAQItem({ faq, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <div
      style={{
        borderBottom: "1px solid var(--c-border)",
        padding: "1rem 0",
        cursor: "pointer",
      }}
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span
          className="heading"
          style={{
            fontWeight: 500,
            fontSize: "0.95rem",
            color: "var(--c-text)",
            lineHeight: 1.5,
          }}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          style={{
            flexShrink: 0,
            color: "var(--c-accent)",
            transition: "transform 0.25s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {isOpen && (
        <p
          className="body-sm text-muted"
          style={{
            marginTop: "0.75rem",
            lineHeight: 1.7,
            paddingRight: "1rem",
          }}
        >
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default function ContactPage({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! We will respond to your message within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <main style={{ paddingTop: 84, minHeight: "100vh", background: "var(--c-bg)" }}>

      {/* PAGE HEADER */}
      <section style={{ padding: "3.5rem 0 2.5rem", borderBottom: "1px solid var(--c-border)" }}>
        <div className="container">
          <Badge variant="accent" style={{ marginBottom: "0.75rem" }}>
            Get in Touch
          </Badge>
          <h1 className="display-lg" style={{ marginBottom: "0.85rem" }}>
            Contact INSP
          </h1>
          <p className="body-lg" style={{ maxWidth: 640 }}>
            For course queries, technical support, or partnership inquiries. We read every message.
          </p>
        </div>
      </section>

      {/* MAIN 2-COLUMN RESPONSIVE LAYOUT */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>

            {/* LEFT – Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Helpline */}
              <div
                className="card-inset"
                style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "rgba(99,102,241,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} style={{ color: "var(--c-accent)" }} />
                </div>
                <div>
                  <p
                    className="mono"
                    style={{ fontSize: "1rem", fontWeight: 600, color: "var(--c-text)", letterSpacing: "0.04em" }}
                  >
                    7093523751
                  </p>
                  <p className="caption text-dim" style={{ marginTop: "0.1rem" }}>
                    Call or WhatsApp Mon-Sat, 10AM-7PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="card-inset"
                style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "rgba(234,179,8,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} style={{ color: "#eab308" }} />
                </div>
                <div>
                  <p
                    className="mono"
                    style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--c-text)" }}
                  >
                    info@inspedu.in
                  </p>
                  <p className="caption text-dim" style={{ marginTop: "0.1rem" }}>
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="card-inset" style={{ padding: "1.25rem" }}>
                <p
                  className="caption text-muted"
                  style={{ marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Follow us
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <a
                    href="https://www.youtube.com/c/INDIANSCHOOLOFPHYSICSnitin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                  >
                    <PlayCircle size={14} style={{ color: "#ff4444" }} />
                    YouTube
                  </a>
                  <a
                    href="https://twitter.com/nitin_INSP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                  >
                    <Share2 size={14} style={{ color: "#1da1f2" }} />
                    Twitter
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063935626795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                  >
                    <Globe size={14} style={{ color: "#1877f2" }} />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Desktop Apps */}
              <div className="card-inset" style={{ padding: "1.25rem" }}>
                <p
                  className="caption text-muted"
                  style={{ marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Download Desktop App
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <a
                    href="/downloads/INSP-Setup.exe"
                    download
                    className="btn btn-secondary"
                    style={{ fontSize: "0.85rem", justifyContent: "center" }}
                  >
                    <Monitor size={14} />
                    Download for Windows (.exe)
                  </a>
                  <a
                    href="/downloads/INSP.dmg"
                    download
                    className="btn btn-ghost"
                    style={{ fontSize: "0.85rem", justifyContent: "center" }}
                  >
                    <Apple size={14} />
                    Download for Mac (.dmg)
                  </a>
                </div>
              </div>

              <p
                className="body-sm text-muted"
                style={{
                  lineHeight: 1.6,
                  borderLeft: "2px solid var(--c-border)",
                  paddingLeft: "0.75rem",
                }}
              >
                INSP portal is optimized for Chrome, Firefox, Edge, and Safari.
              </p>
            </div>

            {/* RIGHT – Contact Form */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <h2
                className="heading"
                style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.35rem" }}
              >
                Send a message
              </h2>
              <p
                className="body-sm text-muted"
                style={{ marginBottom: "1.5rem" }}
              >
                We read every message. For urgent queries, please call.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label
                    htmlFor="contact-name"
                    className="caption"
                    style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    className="input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label
                    htmlFor="contact-email"
                    className="caption"
                    style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className="input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label
                    htmlFor="contact-subject"
                    className="caption"
                    style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    className="input"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select query subject</option>
                    <option value="Course Query">Course Query</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Partnership / Other">Partnership / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label
                    htmlFor="contact-message"
                    className="caption"
                    style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="input"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
                >
                  <Send size={15} />
                  Send Message
                </button>

                {submitted && (
                  <p className="caption text-green" style={{ textAlign: "center", fontWeight: 600 }}>
                    Message sent successfully!
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: "3rem 0 4rem", borderTop: "1px solid var(--c-border)", background: "var(--c-surface)" }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Badge variant="gold" style={{ marginBottom: "0.5rem" }}>Support</Badge>
            <h2 className="display-md">Frequently Asked Questions</h2>
          </div>

          <div className="card" style={{ padding: "1rem 1.5rem" }}>
            {FAQS.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                index={idx}
                openIndex={openFAQ}
                setOpenIndex={setOpenFAQ}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
