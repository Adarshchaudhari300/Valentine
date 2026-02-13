import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './BackgroundMusic.css'

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Auto-play music when component mounts
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          // If autoplay is blocked, user will need to click the button
          console.log('Autoplay blocked, user interaction required')
        }
      }
    }

    // Slight delay to ensure audio is loaded
    setTimeout(playMusic, 500)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/Kashish.mp3"
        loop
        preload="auto"
      />

      {/* Music Control Button */}
      <motion.button
        className={`music-control ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isPlaying
            ? [
                "0 0 20px rgba(255, 107, 157, 0.5)",
                "0 0 40px rgba(255, 107, 157, 0.8)",
                "0 0 20px rgba(255, 107, 157, 0.5)"
              ]
            : "0 4px 15px rgba(255, 107, 157, 0.4)"
        }}
        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🎵
          </motion.div>
        ) : (
          '🎵'
        )}
      </motion.button>
    </>
  )
}

export default BackgroundMusic
