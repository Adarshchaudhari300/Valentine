import DayTemplate from '../components/DayTemplate'

function HugDay() {
  return (
    <DayTemplate
      title="Hug Day"
      date="12"
      bgGradient="linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 50%, #2BFF88 100%)"
      emoji="🤗"
      question="Pooja, describe how my hugs make you feel in just one word? (I hope it's something special!)"
      correctAnswer="safe"
      successMessage="Your hugs are my favorite place in the whole world! 🤗💖"
    />
  )
}

export default HugDay
