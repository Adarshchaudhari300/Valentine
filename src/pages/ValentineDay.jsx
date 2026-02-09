import DayTemplate from '../components/DayTemplate'

function ValentineDay() {
  return (
    <DayTemplate
      title="Valentine's Day"
      date="14"
      bgGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)"
      emoji="💖"
      question="Pooja, my love! Complete this: You are my _____ and I want to spend all my _____ with you!"
      correctAnswer="everything forever"
      successMessage="Happy Valentine's Day, my love! You complete me! 💖👫✨"
    />
  )
}

export default ValentineDay
