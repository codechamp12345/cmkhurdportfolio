import { useState, useEffect } from 'react'
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
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode is preferred by the user's system
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // Store the preference in localStorage
    localStorage.setItem('darkMode', !darkMode)
  }

  useEffect(() => {
    // Set dark mode based on localStorage preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true')
    }
  }, [])

  useEffect(() => {
    // Enable smooth scrolling with hardware acceleration
    document.documentElement.style.scrollBehavior = 'smooth'
    document.documentElement.style.willChange = 'scroll-position'
    
    // Optimize touch handling
    document.documentElement.style.touchAction = 'pan-y'
    document.documentElement.style.overscrollBehavior = 'contain'
    
    // Prevent scroll chaining
    document.documentElement.style.scrollPadding = '20px'
    
    // Hide horizontal scrollbars but allow vertical scrolling
    document.documentElement.style.overflowX = 'hidden'
    document.documentElement.style.msOverflowStyle = 'none'
    document.documentElement.style.scrollbarWidth = 'none'

    // Prevent horizontal scrolling while allowing vertical
    const handleWheel = (e) => {
      if (e.deltaY === 0) {
        e.preventDefault()
      }
    }

    // Only prevent horizontal touch scrolling
    const handleTouchMove = (e) => {
      if (Math.abs(e.touches[0].clientX - e.touches[0].clientY) > 50) {
        e.preventDefault()
      }
    }

    // Add event listeners with passive option for better performance
    document.addEventListener('wheel', handleWheel, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Cleanup
    return () => {
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchmove', handleTouchMove)
      document.documentElement.style.scrollBehavior = ''
      document.documentElement.style.willChange = ''
      document.documentElement.style.touchAction = ''
      document.documentElement.style.overscrollBehavior = ''
      document.documentElement.style.scrollPadding = ''
      document.documentElement.style.overflowX = ''
      document.documentElement.style.msOverflowStyle = ''
      document.documentElement.style.scrollbarWidth = ''
    }
  }, [])

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen w-full`}>
        <div className="relative min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <AnimatePresence mode='wait'>
            <main className="w-full overflow-y-auto">
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

// Add global styles to hide scrollbars
const globalStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`

// Apply styles
const style = document.createElement('style')
style.textContent = globalStyles
document.head.appendChild(style)

export default App
