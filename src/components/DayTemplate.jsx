import { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './DayTemplate.css'

// Memoized Falling Photos Component - prevents reset on typing
const FallingPhotos = () => {
  const photosConfig = useMemo(() => {
    return [...Array(40)].map((_, i) => {
      const photoIndex = i % 29;
      const size = Math.random() * 100 + 80;
      const rotationDirection = Math.random() > 0.5 ? 1 : -1;
      const rotationSpeed = Math.random() * 60 + 30;
      const startRotation = Math.random() * 360;
      const direction = Math.floor(Math.random() * 4);
      
      let startX, startY, endX, endY;
      const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
      const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
      
      switch(direction) {
        case 0:
          startX = Math.random() * width;
          startY = -150;
          endX = Math.random() * width;
          endY = height + 150;
          break;
        case 1:
          startX = width + 150;
          startY = Math.random() * height;
          endX = -150;
          endY = Math.random() * height;
          break;
        case 2:
          startX = Math.random() * width;
          startY = height + 150;
          endX = Math.random() * width;
          endY = -150;
          break;
        case 3:
          startX = -150;
          startY = Math.random() * height;
          endX = width + 150;
          endY = Math.random() * height;
          break;
      }
      
      const bounceAmount = Math.random() * 200 - 100;
      const midX = (startX + endX) / 2 + bounceAmount;
      const midY = (startY + endY) / 2 + bounceAmount;
      const duration = Math.random() * 30 + 35;
      const delay = Math.random() * 8;
      
      return {
        photoIndex,
        size,
        startX,
        startY,
        midX,
        midY,
        endX,
        endY,
        startRotation,
        rotationSpeed,
        rotationDirection,
        duration,
        delay
      };
    });
  }, []);

  return (
    <div className="falling-photos">
      {photosConfig.map((config, i) => (
        <motion.div
          key={i}
          className="falling-photo"
          style={{
            backgroundImage: `url(/photos/photo${config.photoIndex + 1}.jpg)`,
            width: `${config.size}px`,
            height: `${config.size}px`,
          }}
          initial={{ 
            x: config.startX,
            y: config.startY,
            rotate: config.startRotation,
            opacity: 1,
            scale: 0.5
          }}
          animate={{ 
            x: [config.startX, config.midX, config.endX],
            y: [config.startY, config.midY, config.endY],
            rotate: [
              config.startRotation,
              config.startRotation + (config.rotationSpeed * 0.5 * config.rotationDirection),
              config.startRotation + (config.rotationSpeed * config.rotationDirection)
            ],
            opacity: 1,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            delay: config.delay,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  );
};

function DayTemplate({ 
  title, 
  date, 
  bgGradient, 
  emoji, 
  question, 
  correctAnswer,
  successMessage 
}) {
  const [answer, setAnswer] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [typingHearts, setTypingHearts] = useState([])
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const wordCount = answer.trim().split(/\s+/).filter(word => word.length > 0).length
    
    if (wordCount >= 14) {
      setShowSuccess(true)
      setShowError(false)
      setShowPopup(true)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const handleTyping = (e) => {
    setAnswer(e.target.value)
    
    // Create flying hearts on typing
    if (e.target.value.length > answer.length) {
      const inputRect = inputRef.current?.getBoundingClientRect()
      if (inputRect) {
        const newHeart = {
          id: Date.now() + Math.random(),
          x: inputRect.left + Math.random() * inputRect.width,
          y: inputRect.top + inputRect.height / 2
        }
        setTypingHearts(prev => [...prev, newHeart])
        
        // Remove heart after animation
        setTimeout(() => {
          setTypingHearts(prev => prev.filter(h => h.id !== newHeart.id))
        }, 2000)
      }
    }
  }

  return (
    <div className="day-template" style={{ background: bgGradient }}>
      {/* Falling Photos Background - Memoized */}
      <FallingPhotos />

      {/* Typing Hearts */}
      <div className="typing-hearts-container">
        {typingHearts.map(heart => (
          <motion.div
            key={heart.id}
            className="typing-heart"
            initial={{ 
              x: heart.x,
              y: heart.y,
              scale: 0,
              opacity: 1
            }}
            animate={{ 
              x: heart.x + (Math.random() - 0.5) * 100,
              y: heart.y - 100 - Math.random() * 100,
              scale: [0, 1.5, 1],
              opacity: [1, 1, 0]
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              className="popup-content"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated hearts around popup */}
              <div className="popup-hearts">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="popup-heart"
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ 
                      scale: [0, 1, 0.8, 0],
                      x: Math.cos((i / 30) * Math.PI * 4) * (150 + Math.random() * 100),
                      y: Math.sin((i / 30) * Math.PI * 4) * (150 + Math.random() * 100),
                      opacity: [1, 1, 0.5, 0],
                      rotate: Math.random() * 360
                    }}
                    transition={{ 
                      duration: 3, 
                      delay: i * 0.03,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="popup-emoji"
                animate={{ 
                  rotate: [0, 10, -10, 10, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {emoji}
              </motion.div>

              <h2 className="popup-title">{title}</h2>
              
              <div className="popup-qa">
                <div className="popup-question">
                  <strong>Question:</strong>
                  <p>{question}</p>
                </div>
                
                <motion.div 
                  className="popup-answer"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255, 107, 157, 0.5)",
                      "0 0 40px rgba(255, 107, 157, 0.8)",
                      "0 0 20px rgba(255, 107, 157, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>Your Answer:</strong>
                  <p className="answer-text">{answer}</p>
                </motion.div>
              </div>

              <motion.div 
                className="popup-message"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕 {successMessage} 💕
              </motion.div>

              <motion.div 
                className="screenshot-prompt"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📸 Take a screenshot and send to Aduu! 📸
              </motion.div>

              <button 
                className="popup-close"
                onClick={() => setShowPopup(false)}
              >
                Band kardu ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ y: '100vh', x: Math.random() * window.innerWidth }}
            animate={{ 
              y: '-100vh',
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="emoji"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          {emoji}
        </motion.div>

        <h1 className="title">{title}</h1>
        <p className="date">February {date}, 2026</p>

        {!showSuccess ? (
          <motion.div 
            className="question-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="question">{question}</h2>
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={answer}
                onChange={handleTyping}
                placeholder="Type your answer..."
                className="answer-input"
              />
              <button type="submit" className="submit-btn">
                Jldii se jaan  Jawab Dedo 💕
              </button>
            </form>
            {showError && (
              <motion.p 
                className="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                please mera baby , kaam se kaam 14 shabd toh likho 💭✍️
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div 
            className="success-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="success-hearts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="burst-heart"
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: Math.cos((i / 20) * Math.PI * 2) * (100 + Math.random() * 100),
                    y: Math.sin((i / 20) * Math.PI * 2) * (100 + Math.random() * 100),
                  }}
                  transition={{ duration: 2, delay: i * 0.05 }}
                >
                  ❤️
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h2 
              className="success-message"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
              }}
            >
              {successMessage}
            </motion.h2>
            
            <motion.div
              className="success-emoji"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              💖
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default DayTemplate
