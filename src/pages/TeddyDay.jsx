import DayTemplate from '../components/DayTemplate'

function TeddyDay() {
  return (
    <DayTemplate
      title="Teddy Day"
      date="10"
      bgGradient="linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFE4E1 100%)"
      emoji="🧸"
      question="Dear Pooja, if I were a teddy bear, what would you name me and cuddle me forever?"
      correctAnswer="love"
      successMessage="I'll always be your cuddly bear! Forever and always! 🧸💕"
    />
  )
}

export default TeddyDay
