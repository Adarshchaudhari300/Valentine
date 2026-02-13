import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './BackgroundMusic.css'

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    let interactionTriggered = false

    // Auto-play music when component mounts
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.7 // Set volume to 70%
          audioRef.current.load() // Ensure audio is loaded
          await audioRef.current.play()
          setIsPlaying(true)
          setShowPrompt(false)
        } catch (error) {
          // If autoplay is blocked, show a prompt
          console.log('Autoplay blocked, user interaction required')
          setShowPrompt(true)
        }
      }
    }

    // Try immediate play
    playMusic()
    
    // Also try after a short delay
    setTimeout(playMusic, 300)
    setTimeout(playMusic, 1000)

    // Try to play on any user interaction (critical for iOS)
    const handleInteraction = async (e) => {
      if (audioRef.current && !interactionTriggered) {
        interactionTriggered = true
        try {
          audioRef.current.volume = 0.7
          await audioRef.current.play()
          setIsPlaying(true)
          setShowPrompt(false)
          
          // Remove listeners after successful play
          setTimeout(() => {
            document.removeEventListener('click', handleInteraction, { capture: true })
            document.removeEventListener('touchstart', handleInteraction, { capture: true })
            document.removeEventListener('touchend', handleInteraction, { capture: true })
            document.removeEventListener('scroll', handleInteraction, { capture: true })
          }, 100)
        } catch (error) {
          console.log('Failed to play on interaction:', error)
          interactionTriggered = false
        }
      }
    }

    // Add listeners for multiple interaction types (use capture phase for iOS)
    document.addEventListener('click', handleInteraction, { capture: true })
    document.addEventListener('touchstart', handleInteraction, { capture: true })
    document.addEventListener('touchend', handleInteraction, { capture: true })
    document.addEventListener('scroll', handleInteraction, { capture: true })

    return () => {
      document.removeEventListener('click', handleInteraction, { capture: true })
      document.removeEventListener('touchstart', handleInteraction, { capture: true })
      document.removeEventListener('touchend', handleInteraction, { capture: true })
      document.removeEventListener('scroll', handleInteraction, { capture: true })
    }
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
      {/* Audio Element - Optimized for iOS */}
      <audio
        ref={audioRef}
        src="/Kashish.mp3"
        loop
        preload="auto"
        autoPlay
        playsInline
        muted={false}
        crossOrigin="anonymous"
      />

      {/* Prominent prompt if autoplay is blocked (especially for iOS) */}
      {showPrompt && (
        <motion.div
          className="music-prompt-mobile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          onClick={async () => {
            if (audioRef.current) {
              try {
                audioRef.current.volume = 0.7
                await audioRef.current.play()
                setIsPlaying(true)
                setShowPrompt(false)
              } catch (error) {
                console.log('Manual play failed:', error)
              }
            }
          }}
        >
          <div className="prompt-content">
            <div className="prompt-icon">🎵</div>
            <p className="prompt-text">Tap anywhere to play music</p>
            <div className="prompt-hearts">💕 ✨ 💖</div>
          </div>
        </motion.div>
      )}

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
