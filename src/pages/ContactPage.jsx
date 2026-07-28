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
            paddingRight: "2rem",
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
    <div style={{ background: "var(--c-bg)", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "3rem", textAlign: "center" }}
      >
        <span
          className="badge badge-accent"
          style={{ display: "inline-flex", alignItems: "center", marginBottom: "1.25rem" }}
        >
          <MessageCircle size={13} style={{ marginRight: "0.4rem" }} />
          Get in Touch
        </span>

        <h1
          className="display-lg"
          style={{
            marginBottom: "1rem",
            background: "linear-gradient(135deg, var(--c-text) 60%, var(--c-accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Contact INSP
        </h1>

        <p
          className="body-lg text-muted"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          For course queries, technical support, or partnership inquiries.
        </p>
      </div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1.55fr)",
          gap: "2rem",
          alignItems: "start",
          paddingBottom: "4rem",
        }}
      >
        {/* LEFT – Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Helpline */}
          <div
            className="card-inset"
            style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: "rgba(99,102,241,0.13)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={16} style={{ color: "var(--c-accent)" }} />
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
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: "rgba(234,179,8,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={16} style={{ color: "#eab308" }} />
            </div>
            <div>
              <p
                className="mono"
                style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--c-text)", letterSpacing: "0.02em" }}
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
                className="btn btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}
              >
                <PlayCircle size={14} style={{ color: "#ff4444" }} />
                YouTube
              </a>
              <a
                href="https://twitter.com/nitin_INSP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}
              >
                <Share2 size={14} style={{ color: "#1da1f2" }} />
                Twitter
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063935626795"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}
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
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", justifyContent: "center" }}
              >
                <Monitor size={14} />
                Download for Windows (.exe)
              </a>
              <a
                href="/downloads/INSP.dmg"
                download
                className="btn btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", justifyContent: "center" }}
              >
                <Apple size={14} />
                Download for Mac (.dmg)
              </a>
            </div>
          </div>

          {/* Browser note */}
          <p
            className="body-sm text-muted"
            style={{
              lineHeight: 1.65,
              borderLeft: "2px solid var(--c-border)",
              paddingLeft: "0.75rem",
            }}
          >
            INSP portal is optimized for Chrome, Firefox, Edge, and Safari. Use a
            desktop or laptop for best experience.
          </p>
        </div>

        {/* RIGHT – Contact Form */}
        <div className="card" style={{ padding: "2rem" }}>
          <h2
            className="heading"
            style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}
          >
            Send a message
          </h2>
          <p
            className="body-sm text-muted"
            style={{ marginBottom: "1.75rem", lineHeight: 1.6 }}
          >
            We read every message. For urgent queries, please call.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="contact-name"
                className="caption"
                style={{ color: "var(--c-text-muted, #94a3b8)", letterSpacing: "0.05em", textTransform: "uppercase" }}
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
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="contact-email"
                className="caption"
                style={{ color: "var(--c-text-muted, #94a3b8)", letterSpacing: "0.05em", textTransform: "uppercase" }}
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
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>

            {/* Subject */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="contact-subject"
                className="caption"
                style={{ color: "var(--c-text-muted, #94a3b8)", letterSpacing: "0.05em", textTransform: "uppercase" }}
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
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  appearance: "none",
                  WebkitAppearance: "none",
                  cursor: "pointer",
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.9rem center",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="" disabled>Select a subject...</option>
                <option value="course">Course Enquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing &amp; Payments</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="contact-message"
                className="caption"
                style={{ color: "var(--c-text-muted, #94a3b8)", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                className="input"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your query..."
                required
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  resize: "vertical",
                  minHeight: "110px",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "0.25rem",
              }}
            >
              <Send size={15} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p
                className="body-sm text-green"
                style={{ textAlign: "center", marginTop: "0.25rem" }}
              >
                We will get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="container">
        <div className="divider" style={{ margin: "0 0 3rem 0" }} />
      </div>

      {/* FAQ SECTION */}
      <div className="section" style={{ paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "740px" }}>
          <div style={{ marginBottom: "2rem" }}>
            <span
              className="badge badge-subtle"
              style={{ display: "inline-flex", marginBottom: "1rem" }}
            >
              FAQ
            </span>
            <h2 className="display-md" style={{ marginBottom: "0.5rem" }}>
              Common questions
            </h2>
            <p className="body-sm text-muted">
              Can not find what you are looking for? Reach out directly.
            </p>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                openIndex={openFAQ}
                setOpenIndex={setOpenFAQ}
              />
            ))}
          </div>

          {/* CTA card */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              borderRadius: "12px",
              background: "var(--c-surface, rgba(255,255,255,0.03))",
              border: "1px solid var(--c-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="heading" style={{ fontWeight: 600, marginBottom: "0.25rem" }}>
                Still have questions?
              </p>
              <p className="body-sm text-muted">Our team is ready to help.</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <a
                href="tel:7093523751"
                className="btn btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Phone size={14} />
                Call Us
              </a>
              <a
                href="mailto:info@inspedu.in"
                className="btn btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Mail size={14} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
