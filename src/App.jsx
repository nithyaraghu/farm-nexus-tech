// src/App.jsx
import ChatWidget from "./components/ChatWidget.jsx";

/* Reusable LinkedIn Icon */
function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.06H4.7V24H.3V8.06zM8.55 8.06h4.2v2.17h.06c.58-1.1 2-2.26 4.13-2.26 4.42 0 5.24 2.91 5.24 6.69V24h-4.4v-7.34c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.86V24H8.55V8.06z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ===== Header ===== */}
      <header className="bg-green-800 text-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Farm Nexus Tech</span>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-200">Home</a>
            <a href="#about" className="hover:text-emerald-200">About</a>
            <a href="#services" className="hover:text-emerald-200">Services</a>
            <a href="#contact" className="hover:text-emerald-200">Contact</a>
          </nav>

          {/* LinkedIn (header) */}
          <a
            href="https://www.linkedin.com/company/farm-nexus-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"
            aria-label="Farm Nexus Tech on LinkedIn"
            title="Farm Nexus Tech on LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">LinkedIn</span>
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="bg-green-50 w-full">
        <div className="w-full px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800">
            Harvesting Prosperity Together 🌿
          </h1>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Empowering farmers with polyhouse construction, IoT automation, and subsidy guidance across Tamil Nadu.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">About Us</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Farm Nexus Tech designs and builds IoT-enriched polyhouses and supports farmers with agronomy and market
            linkages. We align with the <b>Mission for Integrated Development of Horticulture (MIDH)</b> to deliver
            turnkey protected cultivation projects that ensure profitability, sustainability, and innovation.
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="bg-slate-50 w-full py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Our Services</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            From construction to automation, we offer end-to-end agricultural technology solutions.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Polyhouse Construction", desc: "Saw-tooth and naturally ventilated greenhouses built to NHM standards." },
              { title: "IoT Automation", desc: "Real-time monitoring of temperature, humidity, and irrigation using smart sensors." },
              { title: "Drip Irrigation Systems", desc: "Efficient water management and fertigation lines for high-yield crops." },
              { title: "Subsidy & Loan Support", desc: "We help you navigate government subsidy programs (MIDH/RKVY/AIF)." },
              { title: "Crop Consultancy", desc: "Expert agronomy guidance to maximize output and reduce input costs." },
              { title: "Maintenance & Upgrades", desc: "After-installation service and future IoT retrofits for existing structures." }
            ].map((s, i) => (
              <article key={i} className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
                <div className="h-10 w-10 rounded-lg bg-green-100 border border-green-200 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg text-green-800">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="w-full py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Contact Us</h2>
          <p className="mt-2 text-slate-700">
            Have questions or need a custom quotation? Reach out to us anytime.
          </p>

          {/* LinkedIn button in contact */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/company/farm-nexus-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-slate-700 hover:bg-slate-100"
            >
              <LinkedInIcon />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>

          {/* Simple mailto form (swap to Formspree later if you want) */}
          <form
            className="mt-10 max-w-xl mx-auto grid gap-4 text-left"
            action="mailto:farmnexustech.polyhouse@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm text-slate-600 mb-1">Your Name</label>
              <input type="text" name="name" required className="w-full rounded-xl border px-3 py-2 focus:ring-2 focus:ring-green-700 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Your Email</label>
              <input type="email" name="email" required className="w-full rounded-xl border px-3 py-2 focus:ring-2 focus:ring-green-700 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea name="message" rows="4" className="w-full rounded-xl border px-3 py-2 focus:ring-2 focus:ring-green-700 outline-none"></textarea>
            </div>
            <button type="submit" className="mt-2 rounded-xl bg-green-700 px-5 py-3 text-white hover:bg-green-800">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>© {new Date().getFullYear()} Farm Nexus Tech • GSTIN: 33ANFPM9404N1ZP</span>
          <a
            href="https://www.linkedin.com/company/farm-nexus-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-emerald-200"
            aria-label="LinkedIn"
            title="Farm Nexus Tech on LinkedIn"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>

      {/* ===== Floating AI Chatbot ===== */}
      <ChatWidget />
    </div>
  );
}
