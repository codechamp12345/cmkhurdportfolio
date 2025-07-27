import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <AnimatePresence mode='wait'>
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
            </main>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
