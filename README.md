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

## 🚀 Deploying to Netlify

### Method 1: Deploy via Netlify Website (Easiest)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://www.netlify.com/)** and sign in (or create a free account)

3. **Drag and drop** the `dist` folder to Netlify's deploy zone

4. **Done!** Your site will be live in seconds with a URL like `https://your-site-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   netlify deploy --prod
   ```

4. **Follow the prompts**:
   - Choose "Create & configure a new site"
   - Choose your team
   - Site name: (enter a unique name or leave blank for random)
   - Deploy path: `dist`

5. **Your site is live!** Netlify will give you the URL

### Method 3: Deploy via Git (Continuous Deployment)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Valentine website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [Netlify](https://www.netlify.com/)** and click "Add new site" → "Import an existing project"

3. **Connect your GitHub** and select your repository

4. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Deploy!** Netlify will automatically deploy on every push to your repo

### Custom Domain (Optional)

Once deployed, you can:
- Use Netlify's free subdomain: `your-site.netlify.app`
- Add a custom domain in Site settings → Domain management

### Important Notes

- The `netlify.toml` file is already configured for you
- The `public/_redirects` file ensures proper routing
- Site will auto-deploy on any code changes (if using Git method)
- Free tier includes HTTPS and unlimited bandwidth!

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
