import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import './Education.css'

const EDUCATION = [
  {
    icon: <FaUniversity />,
    degree: 'GNM — General Nursing & Midwifery',
    institute: 'Saraswathi College of Nursing',
    board: 'U.P. State Medical Faculty',
    year: '2022 – 2025 (Pursuing)',
    status: 'current',
    highlights: [
      'Comprehensive clinical training across 8+ departments',
      'Special psychiatric posting at Vimhans Hospital, Delhi',
      'Community health fieldwork at CHC & PHC centers',
      'Trained in ICU, NICU, PICU & emergency care',
    ],
  },
  {
    icon: <FaSchool />,
    degree: '12th — Intermediate',
    institute: 'U.P. Board',
    board: 'Uttar Pradesh Madhyamik Shiksha Parishad',
    year: '2018',
    status: 'done',
    highlights: [
      'Science stream with Biology as core subject',
      'Strong foundation for healthcare sciences',
    ],
  },
  {
    icon: <FaGraduationCap />,
    degree: '10th — High School',
    institute: 'U.P. Board',
    board: 'Uttar Pradesh Madhyamik Shiksha Parishad',
    year: '2016',
    status: 'done',
    highlights: [
      'Built a strong academic base',
      'Developed discipline and time-management skills',
    ],
  },
]

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-eyebrow" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
          <MdVerified />
          <span>Education</span>
        </div>
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-subtitle">Building a strong foundation for professional nursing excellence.</p>

        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <div className={`edu-item ${edu.status}`} key={i}>
              <div className="edu-connector">
                <div className="edu-dot">
                  <span>{edu.icon}</span>
                </div>
                {i < EDUCATION.length - 1 && <div className="edu-line" />}
              </div>

              <div className="edu-card">
                <div className="edu-card-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <div className="edu-institute">{edu.institute}</div>
                    <div className="edu-board">{edu.board}</div>
                  </div>
                  <div className="edu-year-badge">
                    {edu.status === 'current' && (
                      <span className="live-dot" />
                    )}
                    {edu.year}
                  </div>
                </div>

                <ul className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
