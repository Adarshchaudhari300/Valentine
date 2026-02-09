import DayTemplate from '../components/DayTemplate'

function PromiseDay() {
  return (
    <DayTemplate
      title="Promise Day"
      date="11"
      bgGradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
      emoji="🤝"
      question="Pooja, what's one promise you want me to make and keep for our entire lifetime together?"
      correctAnswer="forever"
      successMessage="I promise to love you today, tomorrow, and for all eternity! 💍✨"
    />
  )
}

export default PromiseDay
