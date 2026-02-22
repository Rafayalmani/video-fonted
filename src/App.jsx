import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Downloader from './components/Downloader'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import { initCursorGlow } from './utils/cursorGlow'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cleanup = initCursorGlow()
    return cleanup
  }, [])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <AnimatePresence mode="wait">
      {!loading && (
        <motion.div
          key="app"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="relative min-h-screen bg-black text-white overflow-hidden"
        >
          <AnimatedBackground />
          
          <div className="relative z-10">
            <Navbar />
            
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Hero />
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl mx-auto my-12"
              >
                <Downloader />
              </motion.div>
            </main>
            
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App