import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Navigation from './components/Navigation.jsx'
import HeroSection from './components/HeroSection.jsx'
import StorySection from './components/StorySection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

// Coding-themed Loading Screen Component
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  
  const codeLines = [
    { text: 'const developer = {', color: 'text-purple-400' },
    { text: '  name: "Jeconiah Sontakke",', color: 'text-cyan-400' },
    { text: '  role: "Fullstack Developer",', color: 'text-cyan-400' },
    { text: '  skills: ["React", "Node.js", "PostgreSQL"],', color: 'text-cyan-400' },
    { text: '  passion: "Building amazing things",', color: 'text-cyan-400' },
    { text: '};', color: 'text-purple-400' },
    { text: '', color: '' },
    { text: 'developer.init();', color: 'text-yellow-400' },
    { text: '// Loading portfolio...', color: 'text-gray-500' },
  ]

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const lineTimer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= codeLines.length - 1) {
          clearInterval(lineTimer)
          return codeLines.length - 1
        }
        return prev + 1
      })
    }, 180)

    return () => {
      clearInterval(progressTimer)
      clearInterval(lineTimer)
    }
  }, [])

  // Matrix rain effect characters
  const matrixChars = '01アイウエオカキクケコサシスセソタチツテト'
  const columns = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i / 20) * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
  }))

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a1a] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {columns.map((col) => (
          <motion.div
            key={col.id}
            className="absolute text-indigo-500 text-xs font-mono"
            style={{ left: `${col.x}%` }}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: col.duration,
              repeat: Infinity,
              delay: col.delay,
              ease: 'linear',
            }}
          >
            {matrixChars.split('').map((char, i) => (
              <div key={i} className="opacity-70">{char}</div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Terminal window */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        {/* Terminal header */}
        <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="ml-4 text-gray-400 text-sm font-mono">portfolio.js</span>
        </div>

        {/* Terminal body */}
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-b-lg p-6 font-mono text-sm border border-gray-700 border-t-0">
          {/* Code lines */}
          <div className="space-y-1 mb-6">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: index <= currentLine ? 1 : 0,
                  x: index <= currentLine ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
                className={`${line.color} ${index === currentLine ? 'after:content-["▋"] after:ml-1 after:animate-pulse after:text-indigo-400' : ''}`}
              >
                {line.text || '\u00A0'}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Compiling...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {['{ }', '< />', '( )', '[ ]', '=> ', '&&', '||', '++'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-indigo-500/20 font-mono text-2xl"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const lenisRef = useRef(null)

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        if (element) {
          lenis.scrollTo(element, { offset: -80 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.06), transparent 40%)`,
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <main>
              <HeroSection />
              <StorySection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
