import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Specializations from './components/Specializations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EcgBackground from './components/EcgBackground'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <EcgBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Specializations />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
