import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DayTemplate from '../components/DayTemplate'
import './ValentineDay.css'

function ValentineDay() {
  const [showRecap, setShowRecap] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const recapStory = [
    {
      day: "Chocolate Day 🍫",
      date: "February 9",
      question: "Hey Pooja! What's the sweetest thing I've ever done for you that melted your heart like chocolate?",
      answer: "Your Forehead Kiss And Your Comfort Hug And The Way You Love Meeeeee And Each And Everything That You Do For Me",
      message: "You're sweeter than any chocolate in the world! 🍫❤️ 💕",
      gradient: "linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #F4A460 100%)",
      image: "/photos/chocolate-day.jpg"
    },
    {
      day: "Teddy Day 🧸",
      date: "February 10",
      question: "Dear Pooja, if I were a teddy bear, what would you name me and cuddle me forever?",
      answer: "I Would Definitely Name It Booboo Because You Are My Boobooriiiii 💕 And I Would Love To Cuddle You Forever ❤️ Mere Sath Hi Rhta Humesha Aur Sab Se Pass Kabhi Dur Nhi Jane Degeeee Aapkkkkooooooooooooo 😭 Best Giftttt For Meeeee Yrrrrrrrrrrrrr 😭❤️",
      message: "I'll always be your cuddly Booboo! Forever and always! 🧸💕",
      gradient: "linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFE4E1 100%)",
      image: "/photos/teddy-day.jpg"
    },
    {
      day: "Promise Day 🤝",
      date: "February 11",
      question: "Pooja, what's one promise you want me to make and keep for our entire lifetime together?",
      answer: "I Want You To Promise Me That You Will Always Share Whatever You Feel !! We Will Always Try Our Best To Make Each Other Smile 💗 And The Only Promise I Want Is That Your Love For Me Should Get Deeper And Deeper ❤️😭",
      message: "I promise to love you today, tomorrow, and for all eternity! 💍✨",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      image: "/photos/promise-day.jpg"
    },
    {
      day: "Hug Day 🤗",
      date: "February 12",
      question: "Pooja, describe how my hugs make you feel in just one word? (I hope it's something special!)",
      answer: "Your Hugs Make Me Feel Safe , Loved ❤️😭 The Warmth I Feel When I Wrap My Arms Around You Is The Best Thing In The Entire World 🥰💕 The Tight Hug I Give To Our Boo-Boo Reminds Me Of You I Can Feel You Around Me 😭💕❤️",
      message: "Your hugs are my favorite place in the whole world! 🤗💖",
      gradient: "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 50%, #2BFF88 100%)",
      image: "/photos/hug-day.jpg"
    },
    {
      day: "Kiss Day 💋",
      date: "February 13",
      question: "Meri jaaan, meri Pooja 💋 if kisses were currency 💋 what would you buy with all the kisses I give you?",
      answer: "We Will Go On A Date Doing Pottery Over There And Make A Thumb Print On It So That I Can Look At It And Remember You Alwayssss And I Would Love To Buy Ittttttt With The Kissssses You Gave Meeeee❤️ And The Perfect Kiss I Want Us To Do In The Mountains When There Is A Sunset And Little Rain So That When We Will Kissss The Lips Will Be Wet And Feel Soft While Kissing 💋❤️😭💕",
      message: "Every kiss is a promise of infinite love and my addiction, dedication and love for you! 💋✨",
      gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 50%, #ffd89b 100%)",
      image: "/photos/kiss-day.jpg"
    }
  ]

  const handleNext = () => {
    if (currentSlide < recapStory.length - 1) {
      setCurrentSlide(currentSlide + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowRecap(false)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (showRecap) {
    const story = recapStory[currentSlide]
    
    return (
      <div className="valentine-recap" style={{ background: story.gradient }}>
        {/* Floating Hearts */}
        <div className="recap-hearts-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="recap-heart"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100
              }}
              animate={{ 
                y: -100,
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            >
              💖
            </motion.div>
          ))}
        </div>

        {/* Story Content */}
        <div className="recap-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="recap-card"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <motion.div 
                className="recap-header"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="recap-day">{story.day}</h2>
                <p className="recap-date">{story.date}</p>
              </motion.div>

              {/* Question */}
              <motion.div 
                className="recap-question"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="question-label">Question:</p>
                <p className="question-text">{story.question}</p>
              </motion.div>

              {/* Answer */}
              <motion.div 
                className="recap-answer"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="answer-label">Your Answer:</p>
                <p className="answer-text">{story.answer}</p>
              </motion.div>

              {/* Message */}
              <motion.div 
                className="recap-message"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {story.message}
              </motion.div>

              {/* Photo */}
              {story.image && (
                <motion.div 
                  className="recap-photo"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <img src={story.image} alt={story.day} />
                </motion.div>
              )}

              {/* Progress Dots */}
              <div className="recap-progress">
                {recapStory.map((_, index) => (
                  <div 
                    key={index}
                    className={`progress-dot ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="recap-navigation">
                {currentSlide > 0 && (
                  <motion.button
                    className="recap-btn recap-btn-prev"
                    onClick={handlePrevious}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← piche chalna hai?
                  </motion.button>
                )}
                
                <motion.button
                  className="recap-btn recap-btn-next"
                  onClick={handleNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: [
                      "0 5px 20px rgba(255, 107, 157, 0.4)",
                      "0 5px 30px rgba(255, 107, 157, 0.6)",
                      "0 5px 20px rgba(255, 107, 157, 0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentSlide < recapStory.length - 1 ? 'agge bhadee bubuu →' : 'Final Question 💖'}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Title at Top */}
          {currentSlide === 0 && (
            <motion.div 
              className="recap-title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1>Our Valentine's Week Journey 💕</h1>
              <p>Let's relive our beautiful moments together...</p>
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  return (
    <DayTemplate
      title="Valentine's Day"
      date="14"
      bgGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)"
      emoji="💖"
      question="Pooja my Valentine 💖, how would you like to spend the rest of the life with me? 💍 Would you like to be the mother to my children 👶 and grow old with me? 👫💕 Will you be my Valentine, now and forever? 💐❤️✨"
      correctAnswer="everything forever"
      successMessage="Happy Valentine's Day, my love! You complete me! 💖👫✨

Every second that I have spent with you is the most beautiful moment of my life. 💫 Before you, I didn't know the meaning of living with someone, sharing your life with someone... it all happened jab tu aayi meri life mein. 🌟

Tere aane se main khush hu, samajh rahi... main khush hu. Andar se khush hu. 💕 Tera mere life mein hona hi bohot... bohot jyada hai! 😭❤️

Tu itna sara pyar deti hai meko ki main kya bolu... 💗 Mere saari insecurities dur karti, mera trust issue zhelti, mere gussa zhelti, mera bachho jaise khyal rakhti... 👶💖

Itna pyara koi kaise ho sakta yarrr, kaise!! 🥺✨

And yess — I LOVE YOU meri jaaan and I am proud of it. 💍

I LOVE YOU! 💖💖💖"
    />
  )
}

export default ValentineDay
