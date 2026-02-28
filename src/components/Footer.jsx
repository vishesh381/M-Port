import { FaHeartbeat, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <FaHeartbeat />
            <span>Mansi Gautam</span>
          </div>
          <p className="footer-tagline">GNM Nursing Graduate · Compassionate Care · Ready to Serve</p>
        </div>

        <div className="footer-contacts">
          <a href="tel:7037748053" className="footer-contact-item">
            <FaPhone />
            +91 70377 48053
          </a>
          <a href="mailto:goutammanshi523@gmail.com" className="footer-contact-item">
            <FaEnvelope />
            goutammanshi523@gmail.com
          </a>
          <span className="footer-contact-item">
            <FaMapMarkerAlt />
            Hapur, U.P., India
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {year} Mansi Gautam · All Rights Reserved</span>
          <span className="footer-made">Built with <FaHeartbeat className="footer-heart" /> for a better healthcare future</span>
        </div>
      </div>
    </footer>
  )
}
