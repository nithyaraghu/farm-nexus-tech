export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, Arial", lineHeight: 1.5 }}>
      {/* Header */}
      <header style={{ background: "#1b5e20", color: "#fff", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong>Farm Nexus Tech</strong>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
            <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
            <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>Services</a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" style={{ background: "#f1f8e9", padding: "56px 16px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: 36 }}>Harvesting Prosperity Together 🌿</h1>
        <p style={{ color: "#444", maxWidth: 700, margin: "12px auto 0" }}>
          Empowering farmers with polyhouse construction, IoT automation, and subsidy guidance across Tamil Nadu.
        </p>
        <a href="#contact" style={{
          display: "inline-block", marginTop: 16, background: "#2e7d32", color: "#fff",
          padding: "10px 16px", borderRadius: 8, textDecoration: "none"
        }}>
          Get a Quote
        </a>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "40px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ marginTop: 0 }}>About Us</h2>
          <p>
            Farm Nexus Tech designs and builds IoT-enriched polyhouses and supports farmers with
            agronomy and market linkages. We align with the Mission for Integrated Development of
            Horticulture (MIDH) to deliver turnkey protected cultivation projects.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "#e8f5e9", padding: "40px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginTop: 0 }}>Our Services</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16, marginTop: 16
          }}>
            {[
              { title: "Polyhouse Construction", desc: "Saw-tooth/naturally ventilated structures as per NHM standards." },
              { title: "IoT Automation", desc: "Climate, irrigation, and alerting with mobile dashboard." },
              { title: "Drip Irrigation", desc: "Efficient water use, fertigation lines, and filters." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 40, height: 40, background: "#c8e6c9", borderRadius: 8 }} />
                <h3 style={{ margin: "10px 0 4px" }}>{s.title}</h3>
                <p style={{ color: "#555", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "40px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Email: <b>farmnexustech.polyhouse@gmail.com</b></p>
          <p>Phone: +91 9629510746 / 8344319221 / 9597074295</p>

          <form
            action="mailto:farmnexustech.polyhouse@gmail.com"
            method="post"
            encType="text/plain"
            style={{ marginTop: 16 }}
          >
            <input name="name" placeholder="Your Name" required
              style={{ padding: 10, margin: 6, width: 220 }} />
            <input type="email" name="email" placeholder="Your Email" required
              style={{ padding: 10, margin: 6, width: 220 }} />
            <br />
            <textarea name="message" placeholder="Your Message"
              style={{ padding: 10, margin: 6, width: 452, height: 100 }} />
            <br />
            <button type="submit"
              style={{
                background: "#2e7d32", color: "#fff", border: "none",
                padding: "10px 16px", borderRadius: 8
              }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1b5e20", color: "#fff", textAlign: "center", padding: 12 }}>
        © {new Date().getFullYear()} Farm Nexus Tech • GSTIN: 33ANFPM9404N1ZP
      </footer>
    </div>
  );
}
