import { FaLaptopMedical, FaComments, FaHeart, FaUsers, FaFileAlt, FaClock, FaEye, FaSyringe, FaStethoscope, FaShieldAlt } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import './Skills.css'

const CLINICAL_SKILLS = [
  { name: 'Patient Monitoring', level: 90 },
  { name: 'Vital Signs Assessment', level: 88 },
  { name: 'Wound Dressing & Care', level: 82 },
  { name: 'Medication Administration', level: 80 },
  { name: 'IV Cannulation', level: 75 },
  { name: 'Catheter Management', level: 78 },
  { name: 'Ventilator Assistance', level: 65 },
  { name: 'Emergency Triage', level: 80 },
]

const SOFT_SKILLS = [
  {
    icon: <FaHeart />,
    label: 'Patient Empathy',
    desc: 'Treating every patient with dignity, compassion, and respect.',
  },
  {
    icon: <FaComments />,
    label: 'Communication',
    desc: 'Clear verbal and written communication with patients and teams.',
  },
  {
    icon: <FaUsers />,
    label: 'Team Collaboration',
    desc: 'Seamless coordination in multi-disciplinary healthcare teams.',
  },
  {
    icon: <FaClock />,
    label: 'Time Management',
    desc: 'Prioritizing tasks effectively in high-pressure clinical environments.',
  },
  {
    icon: <FaFileAlt />,
    label: 'Documentation',
    desc: 'Accurate patient charting, record keeping, and reporting.',
  },
  {
    icon: <FaEye />,
    label: 'Observation',
    desc: 'Keen clinical observation for early detection of patient changes.',
  },
]

const TECH_SKILLS = [
  { name: 'MS Word', icon: '📝', level: 80 },
  { name: 'MS Excel', icon: '📊', level: 70 },
  { name: 'Internet & Research', icon: '🌐', level: 85 },
  { name: 'Health Record Systems', icon: '🏥', level: 65 },
]

const CERTIFICATIONS = [
  { icon: <FaSyringe />, name: 'GNM Program', issuer: 'U.P. State Medical Faculty', year: '2025*' },
  { icon: <FaStethoscope />, name: 'Clinical Rotations', issuer: 'Saraswathi College of Nursing', year: '2022-25' },
  { icon: <FaShieldAlt />, name: 'Psychiatric Posting', issuer: 'Vimhans Hospital, Delhi', year: '30 Days' },
  { icon: <FaHeart />, name: 'Community Health', issuer: 'CHC & PHC Centers', year: 'Certified' },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-eyebrow" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
          <MdVerified />
          <span>Skills & Competencies</span>
        </div>
        <h2 className="section-title">What I Bring to the Team</h2>
        <p className="section-subtitle">Clinical expertise backed by empathy, precision, and a dedication to patient well-being.</p>

        <div className="skills-layout">
          {/* Clinical Skills */}
          <div className="skills-block">
            <h3 className="skills-block-title">
              <FaStethoscope />
              Clinical Proficiency
            </h3>
            <div className="skill-bars">
              {CLINICAL_SKILLS.map(skill => (
                <div className="skill-bar-item" key={skill.name}>
                  <div className="skill-bar-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ '--fill-width': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-block">
            <h3 className="skills-block-title">
              <FaHeart />
              Professional Attributes
            </h3>
            <div className="soft-skills-grid">
              {SOFT_SKILLS.map(sk => (
                <div className="soft-skill-card" key={sk.label}>
                  <div className="soft-skill-icon">{sk.icon}</div>
                  <div>
                    <div className="soft-skill-label">{sk.label}</div>
                    <div className="soft-skill-desc">{sk.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Skills */}
        <div className="tech-section">
          <h3 className="skills-block-title">
            <FaLaptopMedical />
            Computer & Digital Skills
          </h3>
          <div className="tech-grid">
            {TECH_SKILLS.map(tech => (
              <div className="tech-card" key={tech.name}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
                <div className="tech-bar-track">
                  <div
                    className="tech-bar-fill"
                    style={{ '--fill-width': `${tech.level}%` }}
                  />
                </div>
                <span className="tech-percent">{tech.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cert-section">
          <h3 className="skills-block-title" style={{ marginBottom: '1.2rem' }}>
            <MdVerified />
            Training & Certifications
          </h3>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
                <div className="cert-year">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
