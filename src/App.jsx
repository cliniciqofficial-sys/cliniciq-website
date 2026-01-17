import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";

/* ---------------- HOME PAGE ---------------- */

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <h1>ClinicIQ</h1>
        <p>
          A healthcare communication and appointment support platform
          helping clinics manage patient interactions efficiently
          through secure digital messaging.
        </p>

        {/* Subtle Trust Badge */}
        <div style={{ marginTop: "32px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "12px 24px",
              borderRadius: "999px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            Designed for clinics • Built with privacy in mind
          </span>
        </div>
      </div>

      {/* What ClinicIQ Does */}
      <div className="section light">
        <div className="container">
          <h2>What ClinicIQ Does</h2>
          <p>
            ClinicIQ enables healthcare providers to manage essential patient
            communication such as appointment reminders, follow-ups, and
            informational messages without disrupting existing workflows.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Appointment Reminders</h3>
              <p>
                Reduce missed appointments by sending timely visit reminders
                and confirmations.
              </p>
            </div>

            <div className="card">
              <h3>Patient Follow-ups</h3>
              <p>
                Support post-visit communication and care-related follow-ups
                in a compliant and structured manner.
              </p>
            </div>

            <div className="card">
              <h3>Operational Simplicity</h3>
              <p>
                Designed to integrate smoothly with clinic operations
                without adding administrative complexity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who It's For */}
      <div className="section gray">
        <div className="container">
          <h2>Who ClinicIQ Is For</h2>

          <div className="grid">
            <div className="card">
              <h3>Medical Clinics</h3>
              <p>General and specialty clinics managing patient visits.</p>
            </div>

            <div className="card">
              <h3>Dental & Diagnostic Centers</h3>
              <p>Practices that rely on scheduled appointments and follow-ups.</p>
            </div>

            <div className="card">
              <h3>Healthcare Administrators</h3>
              <p>Teams responsible for patient communication and coordination.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Compliance */}
      <div className="section light">
        <div className="container">
          <h2>Privacy & Responsible Use</h2>
          <p>
            ClinicIQ is designed with a privacy-first architecture and supports
            consent-based, healthcare-related communication only.
          </p>
          <p>
            The platform is intended to assist clinics in sharing appointment
            updates, care-related reminders, and informational messages while
            respecting patient confidentiality and applicable data protection
            principles.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>© {new Date().getFullYear()} ClinicIQ. All rights reserved.</p>
      </div>
    </>
  );
}

/* ---------------- ROUTER ---------------- */

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
