import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload, FaLinkedin } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import { MdLocalHospital } from 'react-icons/md'
import './Hero.css'

const STATS = [
  { value: '3+', label: 'Years Training' },
  { value: '8+', label: 'Departments' },
  { value: '2', label: 'Special Postings' },
  { value: '500+', label: 'Patients Assisted' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <MdLocalHospital />
            <span>GNM Nursing Graduate · 2025</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="name-accent">Mansi</span>
            <br />
            <span className="hero-role">Compassionate Nurse</span>
          </h1>

          <p className="hero-bio">
            A dedicated nursing graduate with hands-on clinical exposure across
            <strong> 8+ hospital departments</strong> — from ICU & NICU to psychiatric care
            and community health. Passionate about delivering empathetic, evidence-based patient care.
          </p>

          <div className="hero-contact-chips">
            <a href="tel:7037748053" className="chip">
              <FaPhone /> +91 70377 48053
            </a>
            <a href="mailto:goutammanshi523@gmail.com" className="chip">
              <FaEnvelope /> goutammanshi523@gmail.com
            </a>
            <span className="chip">
              <FaMapMarkerAlt /> Hapur, U.P., India
            </span>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn-secondary">
              View Experience <FiArrowDown />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring ring1" />
            <div className="avatar-ring ring2" />
            <div className="avatar-container">
              <img src="/userPic.png" alt="Mansi Gautam" className="avatar-photo" />
            </div>
            <div className="avatar-badge">
              <MdLocalHospital />
              <span>RN</span>
            </div>
          </div>

          <div className="floating-card card-1">
            <span className="fc-icon">❤️</span>
            <div>
              <div className="fc-label">Patient Care</div>
              <div className="fc-value">First Priority</div>
            </div>
          </div>

          <div className="floating-card card-2">
            <span className="fc-icon">🏥</span>
            <div>
              <div className="fc-label">Clinical Exp.</div>
              <div className="fc-value">3 Years</div>
            </div>
          </div>

          <div className="floating-card card-3">
            <span className="fc-icon">🧪</span>
            <div>
              <div className="fc-label">Departments</div>
              <div className="fc-value">8+ Rotations</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container stats-row">
          {STATS.map(stat => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
