import { motion } from 'framer-motion'
import { HiOutlineDownload, HiOutlineSparkles } from 'react-icons/hi'

const Navbar = () => {
  const navItems = ['Features', 'Pricing', 'About']

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            
            <span className="text-xl font-light tracking-tight">
              ALMANI.
              
            </span>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="nav-link text-sm font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-light hover:bg-white/10 transition-all"
          >
            <HiOutlineDownload className="w-4 h-4" />
            <span>Download</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}


export default Navbar

