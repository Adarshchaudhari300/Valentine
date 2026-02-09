# 💖 Valentine's Week Website

A beautiful, romantic website for your girlfriend featuring different pages for each day of Valentine's Week (Feb 9-14).

## ✨ Features

- 🎨 **Beautiful Gradients** - Each day has a unique, stunning color scheme
- 📅 **Auto Date Detection** - Automatically shows the correct day based on current date
- 🎯 **Interactive Questions** - Romantic questions personalized for Pooja with answer validation
- 💫 **Love Animations** - Beautiful heart animations and success celebrations
- 🎊 **Pop-up Celebration** - After correct answer, beautiful pop-up shows with Q&A and animations
- 📸 **Screenshot Reminder** - Prompts to take screenshot and send to Aduu
- 🧭 **Manual Navigation** - Navigate between days using the bottom-right menu
- 📱 **Responsive Design** - Works perfectly on all devices

## 🗓️ Days Included

- **Feb 9** - Chocolate Day 🍫
- **Feb 10** - Teddy Day 🧸
- **Feb 11** - Promise Day 🤝
- **Feb 12** - Hug Day 🤗
- **Feb 13** - Kiss Day 💋
- **Feb 14** - Valentine's Day 💖

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Website

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder, which you can deploy to any web hosting service.

## 💡 How It Works

1. **Auto Day Detection**: The website automatically detects today's date and shows the corresponding day
2. **Manual Navigation**: Click the 📅 button at the bottom-right to manually switch between days
3. **Answer Questions**: Each day has a romantic question directed at Pooja. Write at least 14 words to express your feelings!
4. **Enjoy Animations**: Watch beautiful heart animations and love celebrations!
5. **Pop-up Celebration**: Get a beautiful pop-up showing the question and answer with heart animations
6. **Screenshot Reminder**: Pop-up prompts to take a screenshot and send to Aduu!

## 🎨 Customization

### Changing Questions

Edit the individual day files in `src/pages/`:
- `ChocolateDay.jsx`
- `TeddyDay.jsx`
- `PromiseDay.jsx`
- `HugDay.jsx`
- `KissDay.jsx`
- `ValentineDay.jsx`

### Changing Word Count Requirement

By default, answers must be at least 14 words. To change this, edit the number in `src/components/DayTemplate.jsx`:
```javascript
if (wordCount >= 14) { // Change 14 to any number you want
```

### Changing Colors

Modify the `bgGradient` prop in each day component to use different gradients.

## ❤️ Made with Love

Created with React, Framer Motion, and lots of love! Perfect for making your Valentine's Week extra special.

## 📝 Note

**Answer Requirement**: Pooja needs to write at least 14 words to answer each question. This encourages her to express her feelings thoughtfully! The website will show a beautiful celebration pop-up with her answer and a reminder to screenshot and send to Aduu. 💕
