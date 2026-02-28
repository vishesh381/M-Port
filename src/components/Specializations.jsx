import { FaBrain, FaUsers, FaMapMarkerAlt, FaSyringe, FaChild, FaHandsHelping } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'
import './Specializations.css'

const SPECIAL_POSTINGS = [
  {
    icon: <FaBrain />,
    title: 'Psychiatric Nursing',
    location: 'Vimhans Hospital, Delhi',
    duration: '30 Days',
    color: '#8b5cf6',
    badge: 'Special Posting',
    details: [
      'Observed and assisted in psychiatric patient care under specialist supervision',
      'Participated in one-on-one patient counseling sessions',
      'Learned de-escalation and behavior management techniques',
      'Maintained confidentiality and upheld patient dignity at all times',
      'Assisted in administering psychiatric medications and documenting responses',
      'Participated in group therapy observation and rehabilitation programs',
    ],
  },
  {
    icon: <FaUsers />,
    title: 'Community Health Nursing',
    location: 'CHC, PHC & Community Areas',
    duration: '4+ Weeks',
    color: '#10b981',
    badge: 'Special Posting',
    details: [
      'Conducted fieldwork and home visits in rural and semi-urban communities',
      'Assisted in immunization & vaccination drives for children and mothers',
      'Provided maternal and child health (MCH) education and support',
      'Participated in public health awareness campaigns',
      'Facilitated antenatal care (ANC) and postnatal care (PNC) checkups',
      'Maintained community health records and surveillance data',
    ],
  },
]

const ADDITIONAL = [
  {
    icon: <FaSyringe />,
    title: 'IV Cannulation',
    desc: 'Trained in peripheral IV insertion and infusion management.',
  },
  {
    icon: <FaChild />,
    title: 'Neonatal Care',
    desc: 'Specialized exposure in NICU for premature and ill neonates.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'First Aid & BLS',
    desc: 'Basic Life Support and emergency first response techniques.',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Community Outreach',
    desc: 'Field health education and rural community health programs.',
  },
]

export default function Specializations() {
  return (
    <section className="section specializations" id="specializations">
      <div className="container">
        <div className="section-eyebrow" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
          <MdStar />
          <span>Special Postings</span>
        </div>
        <h2 className="section-title">Beyond the Ward</h2>
        <p className="section-subtitle">
          Intensive specialized postings that broadened my clinical perspective and social impact.
        </p>

        <div className="posting-cards">
          {SPECIAL_POSTINGS.map((post, i) => (
            <div className="posting-card" key={i} style={{ '--post-color': post.color }}>
              <div className="posting-card-left">
                <div className="posting-icon-wrap">
                  {post.icon}
                </div>
                <div className="posting-badge">{post.badge}</div>
              </div>

              <div className="posting-content">
                <div className="posting-header">
                  <div>
                    <h3 className="posting-title">{post.title}</h3>
                    <div className="posting-meta">
                      <FaMapMarkerAlt />
                      <span>{post.location}</span>
                      <span className="posting-duration">{post.duration}</span>
                    </div>
                  </div>
                </div>

                <ul className="posting-details">
                  {post.details.map((d, j) => (
                    <li key={j}>
                      <span className="post-check">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-grid">
          <h3 className="additional-title">Additional Clinical Competencies</h3>
          <div className="additional-cards">
            {ADDITIONAL.map((item, i) => (
              <div className="add-card" key={i}>
                <div className="add-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
