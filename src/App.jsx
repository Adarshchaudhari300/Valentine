import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChocolateDay from './pages/ChocolateDay'
import TeddyDay from './pages/TeddyDay'
import PromiseDay from './pages/PromiseDay'
import HugDay from './pages/HugDay'
import KissDay from './pages/KissDay'
import ValentineDay from './pages/ValentineDay'
import Navigation from './components/Navigation'
import './App.css'

const days = [
  { date: 9, name: 'Chocolate Day', component: ChocolateDay },
  { date: 10, name: 'Teddy Day', component: TeddyDay },
  { date: 11, name: 'Promise Day', component: PromiseDay },
  { date: 12, name: 'Hug Day', component: HugDay },
  { date: 13, name: 'Kiss Day', component: KissDay },
  { date: 14, name: "Valentine's Day", component: ValentineDay },
]

function App() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0)

  useEffect(() => {
    // Auto-detect current date and set appropriate day
    const now = new Date()
    const currentDate = now.getDate()
    const currentMonth = now.getMonth() + 1 // 0-indexed, so +1

    if (currentMonth === 2) { // February
      const dayIndex = days.findIndex(day => day.date === currentDate)
      if (dayIndex !== -1) {
        setCurrentDayIndex(dayIndex)
      }
    }
  }, [])

  const CurrentDayComponent = days[currentDayIndex].component

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDayIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentDayComponent />
        </motion.div>
      </AnimatePresence>
      
      <Navigation 
        days={days}
        currentDayIndex={currentDayIndex}
        setCurrentDayIndex={setCurrentDayIndex}
      />
    </div>
  )
}

export default App
