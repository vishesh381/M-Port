import { FaHeart, FaUserMd, FaHandHoldingHeart, FaStar } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import './About.css'

const TRAITS = [
  {
    icon: <FaHeart />,
    title: 'Empathy First',
    desc: 'Believes patient dignity and emotional well-being are as vital as clinical treatment.',
  },
  {
    icon: <FaUserMd />,
    title: 'Clinical Precision',
    desc: 'Trained in accurate patient monitoring, medication support, and meticulous record keeping.',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Holistic Care',
    desc: 'Experience spanning ICU, psychiatric, community health and neonatal care settings.',
  },
  {
    icon: <FaStar />,
    title: 'Lifelong Learner',
    desc: 'Committed to continuous professional development and evidence-based nursing practice.',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-eyebrow">
              <MdVerified />
              <span>About Me</span>
            </div>
            <h2 className="section-title">A Nurse Driven By<br />Purpose & Passion</h2>
            <p className="section-subtitle">Hapur, Uttar Pradesh · D.O.B 15 Jan 2000</p>

            <div className="about-body">
              <p>
                I'm <strong>Mansi Gautam</strong>, a GNM nursing graduate from Saraswathi College of Nursing,
                affiliated with U.P. State Medical Faculty. My clinical journey has taken me through some of the
                most demanding hospital environments — from supporting ventilator-dependent patients in the ICU
                to conducting community health drives in rural areas.
              </p>
              <p>
                My psychiatric posting at <strong>Vimhans Hospital, Delhi</strong> gave me a unique lens on
                mental health care and patient counseling. My community health fieldwork at CHC and PHC centers
                reinforced my belief that healthcare must be accessible to all.
              </p>
              <p>
                I'm now eagerly seeking my first professional role where I can turn this rich foundation of
                training into meaningful, life-changing patient care every single day.
              </p>
            </div>

            <div className="about-details">
              {[
                ['Languages', 'Hindi, English'],
                ['Nationality', 'Indian'],
                ['Marital Status', 'Unmarried'],
                ['Father', 'Mr. Pappu Kumar'],
              ].map(([key, val]) => (
                <div className="detail-row" key={key}>
                  <span className="detail-key">{key}</span>
                  <span className="detail-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-objective">
              <div className="objective-header">
                <FaHeart className="obj-icon" />
                <span>Career Objective</span>
              </div>
              <p>
                Dedicated and compassionate nursing graduate with comprehensive clinical exposure
                across multiple hospital departments. Eager to apply theoretical knowledge and
                practical experience to deliver high-quality patient care. Committed to continuous
                learning, teamwork, and maintaining the highest professional healthcare standards.
              </p>
            </div>

            <div className="traits-grid">
              {TRAITS.map(trait => (
                <div className="trait-card" key={trait.title}>
                  <div className="trait-icon">{trait.icon}</div>
                  <h4>{trait.title}</h4>
                  <p>{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
