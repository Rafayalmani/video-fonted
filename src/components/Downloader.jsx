import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineDownload, HiOutlineCheck, HiOutlineX } from 'react-icons/hi'

const Downloader = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleDownload = async () => {
    setError('')
    setSuccess('')

    if (!url.trim()) {
      setError('Please enter a video URL')
      return
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL')
      return
    }

    setLoading(true)

    try {
      // Simulate API call (replace with actual API)
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // For demo purposes - create a dummy blob
      const dummyBlob = new Blob(['Dummy video content'], { type: 'video/mp4' })
      const downloadUrl = window.URL.createObjectURL(dummyBlob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'video.mp4'
      link.click()
      window.URL.revokeObjectURL(downloadUrl)
      
      setSuccess('Video downloaded successfully!')
      setUrl('')
    } catch (err) {
      setError('Failed to download video. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleDownload()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 md:p-10"
    >
      <h2 className="text-2xl font-light mb-2">Start Downloading</h2>
      <p className="text-white/50 text-sm mb-8 font-light">
        Paste your video URL below and let the magic happen
      </p>

      <div className="space-y-6">
        {/* Input Field */}
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setError('')
            }}
            onKeyPress={handleKeyPress}
            placeholder="https://example.com/video"
            disabled={loading}
            className={`premium-input ${error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
          />
          
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-6 left-0 text-xs text-red-400 flex items-center gap-1"
              >
                <HiOutlineX className="w-3 h-3" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          disabled={loading}
          className="premium-button w-full group"
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          <span className="flex items-center justify-center gap-3">
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                />
                Processing...
              </>
            ) : (
              <>
                <HiOutlineDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Video
              </>
            )}
          </span>
        </motion.button>

        {/* Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <HiOutlineCheck className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-light text-white/90">{success}</p>
                  <p className="text-xs text-white/50 font-light">Your video has been saved</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
          {[
            { label: '4K Support', value: 'Ultra HD' },
            { label: 'Speed', value: '100MB/s' },
            { label: 'Format', value: 'MP4/MOV' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-sm text-white/40 font-light">{item.label}</div>
              <div className="text-lg font-light">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Downloader