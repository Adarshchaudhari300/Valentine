import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navigation.css'

function Navigation({ days, currentDayIndex, setCurrentDayIndex }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navigation">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {days.map((day, index) => (
              <motion.button
                key={index}
                className={`nav-item ${currentDayIndex === index ? 'active' : ''}`}
                onClick={() => {
                  setCurrentDayIndex(index)
                  setIsOpen(false)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Feb {day.date} - {day.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '📅'}
      </motion.button>
    </div>
  )
}

export default Navigation
