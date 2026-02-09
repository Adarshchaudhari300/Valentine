import DayTemplate from '../components/DayTemplate'

function KissDay() {
  return (
    <DayTemplate
      title="Kiss Day"
      date="13"
      bgGradient="linear-gradient(135deg, #ee0979 0%, #ff6a00 50%, #ffd89b 100%)"
      emoji="💋"
      question="My dear Pooja, if kisses were currency, what would you buy with all the kisses I give you?"
      correctAnswer="time"
      successMessage="Every kiss is a promise of infinite love! 💋✨"
    />
  )
}

export default KissDay
