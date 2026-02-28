import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'
import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Opportunity for Mansi Gautam — from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Mansi,\n\nMy name is ${form.name}.\nOrganization: ${form.org}\n\n${form.message}\n\nContact Email: ${form.email}`
    )
    window.open(`mailto:goutammanshi523@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-center">
          <div className="section-eyebrow" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem', justifyContent: 'center' }}>
            <FaEnvelope />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Work Together</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            I'm actively looking for nursing opportunities. If you have an opening or would like to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-card">
              <a href="tel:7037748053" className="contact-link-item">
                <div className="contact-link-icon phone">
                  <FaPhone />
                </div>
                <div>
                  <div className="contact-link-label">Call Me</div>
                  <div className="contact-link-val">+91 70377 48053</div>
                </div>
              </a>

              <a href="https://wa.me/917037748053" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="contact-link-label">WhatsApp</div>
                  <div className="contact-link-val">+91 70377 48053</div>
                </div>
              </a>

              <a href="mailto:goutammanshi523@gmail.com" className="contact-link-item">
                <div className="contact-link-icon email">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-val">goutammanshi523@gmail.com</div>
                </div>
              </a>

              <div className="contact-link-item no-link">
                <div className="contact-link-icon location">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-val">Hapur, Uttar Pradesh, India</div>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Open to Opportunities</div>
                <div className="avail-sub">Available for full-time nursing positions across hospitals, clinics, and community health centers.</div>
              </div>
            </div>

            <div className="declaration-card">
              <p className="decl-text">
                "I hereby declare that all information provided in this portfolio is true
                and correct to the best of my knowledge and belief."
              </p>
              <div className="decl-sign">— Mansi Gautam</div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Dr. Sharma / HR Team..."
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@hospital.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Organization / Hospital</label>
              <input
                type="text"
                name="org"
                placeholder="City Hospital, Apollo, etc."
                value={form.org}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="I'd like to discuss a nursing opportunity..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`}>
              {sent ? '✓ Opening Email...' : (
                <>
                  <MdSend />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
