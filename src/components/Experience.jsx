import { MdVerified, MdLocalHospital } from 'react-icons/md'
import { FaBone, FaHeartbeat, FaBaby, FaCut, FaPills, FaAmbulance, FaLungs } from 'react-icons/fa'
import './Experience.css'

const DEPARTMENTS = [
  {
    icon: <FaBone />,
    dept: 'Orthopaedic Department',
    tag: 'Pre & Post-Op',
    color: '#0ea5e9',
    desc: 'Assisted as a student nurse in pre- and post-operative care, including wound management, patient mobilization, and orthopaedic cast monitoring.',
    skills: ['Pre-op prep', 'Post-op care', 'Wound dressing', 'Mobility support'],
  },
  {
    icon: <FaAmbulance />,
    dept: 'Emergency Ward',
    tag: 'Triage & Crisis',
    color: '#ef4444',
    desc: 'Provided triage support and emergency patient management — prioritizing critical cases, first-response assistance, and rapid vital assessment.',
    skills: ['Triage protocols', 'Vital monitoring', 'Emergency first-aid', 'Crisis support'],
  },
  {
    icon: <FaBaby />,
    dept: 'NICU',
    tag: 'Neonatal ICU',
    color: '#f59e0b',
    desc: 'Monitored and cared for neonates under close supervision — including temperature regulation, feeding support, and jaundice management.',
    skills: ['Neonate monitoring', 'Incubator care', 'Jaundice mgmt.', 'Feeding support'],
  },
  {
    icon: <FaCut />,
    dept: 'Surgery Ward',
    tag: 'Surgical Care',
    color: '#8b5cf6',
    desc: 'Supported surgical teams and managed postoperative patient care, including drain management, catheter care, and pain assessment.',
    skills: ['OT assistance', 'Post-op care', 'Drain mgmt.', 'Catheter care'],
  },
  {
    icon: <FaPills />,
    dept: 'Medicine Ward',
    tag: 'General Medicine',
    color: '#10b981',
    desc: 'Performed routine patient monitoring, vital charting, medication administration support, and patient education across general medicine cases.',
    skills: ['Vital charting', 'Medication support', 'IV care', 'Patient education'],
  },
  {
    icon: <FaAmbulance />,
    dept: 'Casualty Department',
    tag: 'Trauma & First Aid',
    color: '#f97316',
    desc: 'Gained hands-on exposure in trauma management, first aid procedures, and emergency stabilization of accident and trauma patients.',
    skills: ['Trauma care', 'First aid', 'Stabilization', 'Emergency docs'],
  },
  {
    icon: <FaLungs />,
    dept: 'ICU & PICU',
    tag: 'Critical Care',
    color: '#06b6d4',
    desc: 'Assisted in critical care and ventilator management for adult and pediatric patients, including hemodynamic monitoring and patient positioning.',
    skills: ['Ventilator mgmt.', 'Hemodynamic monitoring', 'Critical vitals', 'PICU care'],
  },
  {
    icon: <FaHeartbeat />,
    dept: 'General Wards',
    tag: 'Bedside Nursing',
    color: '#ec4899',
    desc: 'Delivered compassionate bedside nursing including personal hygiene, pressure sore prevention, patient counseling, and family education.',
    skills: ['Bedside care', 'Hygiene support', 'Pressure sore prevention', 'Counseling'],
  },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-eyebrow" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
          <MdLocalHospital />
          <span>Clinical Experience</span>
        </div>
        <h2 className="section-title">Hospital Department Rotations</h2>
        <p className="section-subtitle">
          Hands-on student nursing experience across diverse clinical environments.
        </p>

        <div className="dept-grid">
          {DEPARTMENTS.map((dept, i) => (
            <div className="dept-card" key={i} style={{ '--dept-color': dept.color }}>
              <div className="dept-card-top">
                <div className="dept-icon-wrap">
                  {dept.icon}
                </div>
                <span className="dept-tag">{dept.tag}</span>
              </div>

              <h3 className="dept-name">{dept.dept}</h3>
              <p className="dept-desc">{dept.desc}</p>

              <div className="dept-skills">
                {dept.skills.map(skill => (
                  <span key={skill} className="dept-skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
