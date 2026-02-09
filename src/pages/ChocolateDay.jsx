import DayTemplate from '../components/DayTemplate'

function ChocolateDay() {
  return (
    <DayTemplate
      title="Chocolate Day"
      date="9"
      bgGradient="linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #F4A460 100%)"
      emoji="🍫"
      question="Hey Pooja! What's the sweetest thing I've ever done for you that melted your heart like chocolate?"
      correctAnswer="everything"
      successMessage="You're sweeter than any chocolate in the world! 🍫❤️"
    />
  )
}

export default ChocolateDay
