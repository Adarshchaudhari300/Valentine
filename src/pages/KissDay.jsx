import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DayTemplate from '../components/DayTemplate'
import './KissDay.css'

function KissDay() {
  const [showIntro, setShowIntro] = useState(true)

  if (showIntro) {
    return (
      <div className="kiss-day-intro" style={{ background: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 50%, #ffd89b 100%)' }}>
        {/* Floating Hearts Background */}
        <div className="intro-hearts-bg">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="intro-heart-bg"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0.3
              }}
              animate={{ 
                y: -100,
                x: Math.random() * window.innerWidth,
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              💋
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="intro-content">
          <motion.div
            className="intro-card"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1
            }}
          >
            {/* Burst Hearts around card */}
            <div className="intro-burst-hearts">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="burst-heart"
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1, 0.8],
                    x: Math.cos((i / 20) * Math.PI * 2) * (150 + Math.random() * 50),
                    y: Math.sin((i / 20) * Math.PI * 2) * (150 + Math.random() * 50),
                    opacity: [1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5 + i * 0.05,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  💖
                </motion.div>
              ))}
            </div>

            {/* Big Kiss Emoji */}
            <motion.div
              className="intro-emoji"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              💋
            </motion.div>

            {/* Animated Text */}
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.p
                className="intro-line"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                meri pyari pooja,
              </motion.p>
              
              <motion.p
                className="intro-line"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                hamari pehele kiss kab hogi
              </motion.p>
              
              <motion.p
                className="intro-line"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              >
                yeh toh muze pata nhi per
              </motion.p>
              
              <motion.p
                className="intro-line highlight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                yeh jarror pata ki
              </motion.p>
              
              <motion.p
                className="intro-line highlight big"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1
                }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                bohot pyariii hogii 💕
              </motion.p>
              
              <motion.p
                className="intro-line romantic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                my lips are waiting to feel your lips
              </motion.p>

              <motion.div
                className="intro-hearts-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6 }}
              >
                💋 ❤️ 💖 ❤️ 💋
              </motion.div>
            </motion.div>

            {/* Button */}
            <motion.button
              className="intro-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0, duration: 0.6 }}
              onClick={() => setShowIntro(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              chalo questions ka jawab do ab 💕
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <DayTemplate
      title="Kiss Day"
      date="13"
      bgGradient="linear-gradient(135deg, #ee0979 0%, #ff6a00 50%, #ffd89b 100%)"
      emoji="💋"
      question="Meri jaaan ,meri Pooja 💋 if kisses were currency 💋 what would you buy with all the kisses I give you? 💋 Also, where would you plan our most perfect kiss 💋 beach, rain, mountains, or somewhere else? 💋"
      correctAnswer="time"
      successMessage="Every kiss is a promise of infinite love and my addiction ,dedication and love for you! 💋✨"
    />
  )
}

export default KissDay
