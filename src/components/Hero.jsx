import { motion } from 'framer-motion'
import { HiOutlineArrowDown } from 'react-icons/hi'

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Premium Badge */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-white/70">
            Premium Video Downloader
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6"
        >
          Download Any Video
          <br />
          <span className="relative">
            In Pure Quality
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-[2px] bg-white/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-white/60 max-w-2xl mx-auto mb-12 font-light"
        >
          Experience the future of video downloading. Crystal clear quality, 
          lightning-fast speed, and an interface that feels like pure luxury.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
          >
            <HiOutlineArrowDown className="w-5 h-5 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero