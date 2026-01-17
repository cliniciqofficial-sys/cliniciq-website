import "./App.css";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";


function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>ClinicIQ</h1>
        <p>
          ClinicIQ is a healthcare communication and appointment support platform
          designed to help clinics manage patient interactions efficiently.
        </p>
      </header>

      {/* About */}
      <section style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>About ClinicIQ</h2>
        <p>
          ClinicIQ helps healthcare providers streamline appointment scheduling,
          reminders, and patient communication using secure digital tools.
        </p>
        <p>
          Our platform is built to support clinics, hospitals, and healthcare
          professionals in improving operational efficiency and patient
          engagement.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Key Features</h2>
        <ul>
          <li>Appointment reminders and notifications</li>
          <li>Patient communication support via WhatsApp</li>
          <li>Basic appointment tracking and follow-ups</li>
          <li>Secure handling of clinic communication data</li>
        </ul>
      </section>

      {/* Compliance */}
      <section style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Compliance & Privacy</h2>
        <p>
          ClinicIQ does not provide medical advice or diagnosis. The platform is
          intended solely for administrative and communication support.
        </p>
        <p>
          We are committed to protecting user privacy and handling data
          responsibly in accordance with applicable regulations.
        </p>
      </section>

      {/* Contact */}
      <section style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Contact</h2>
        <p>Email: support@cliniciq.tech</p>
        <p>Location: Madurai, Tamil Nadu, India</p>
      </section>

      {/* Footer */}
     <footer style={{ padding: "40px 20px", textAlign: "center", fontSize: "14px", color: "#555" }}>
  <p>
    © {new Date().getFullYear()} ClinicIQ. All rights reserved.
  </p>
  <p>
    <a href="#privacy" style={{ marginRight: "12px" }}>Privacy Policy</a>
    |
    <a href="#terms" style={{ marginLeft: "12px" }}>Terms & Conditions</a>
  </p>
</footer>

    </div>
  );
}

export default App;
