import './EcgBackground.css'

export default function EcgBackground() {
  return (
    <div className="ecg-bg" aria-hidden="true">
      <svg
        className="ecg-svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          className="ecg-line"
          points="
            0,60 80,60 100,60 110,20 120,100 130,10 140,90 150,60
            230,60 250,60 260,20 270,100 280,10 290,90 300,60
            380,60 400,60 410,20 420,100 430,10 440,90 450,60
            530,60 550,60 560,20 570,100 580,10 590,90 600,60
            680,60 700,60 710,20 720,100 730,10 740,90 750,60
            830,60 850,60 860,20 870,100 880,10 890,90 900,60
            980,60 1000,60 1010,20 1020,100 1030,10 1040,90 1050,60
            1130,60 1200,60
          "
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
