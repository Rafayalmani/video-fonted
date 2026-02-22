import { motion } from 'framer-motion'
import { HiOutlineHeart } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="relative z-10 mt-20 border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-white/40 text-sm font-light">
            © {currentYear} LUMINA. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-white/80 text-sm font-light transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-white/40 text-sm font-light">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <HiOutlineHeart className="w-4 h-4 text-white/60" />
            </motion.div>
            <span>in the cloud</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer