# 🎮 2048x - Modern React Implementation

A sleek, modern implementation of the classic 2048 puzzle game built with React 19, Vite, and Tailwind CSS. Experience the addictive sliding tile puzzle game with a beautiful, responsive interface and smooth animations.

## 🌐 [**Play Live Demo →**](https://2048x-seven.vercel.app/)

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.13-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📖 Table of Contents

- [About](#-about-the-game)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How to Play](#-how-to-play)
- [Technical Highlights](#-technical-highlights)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
---

## 🧠 About the Game

**2048** is a simple yet highly addictive single-player sliding tile puzzle game. The objective is to slide numbered tiles on a grid to combine them and create a tile with the number **2048**. However, you can continue playing after reaching the goal, creating tiles with larger numbers.

### Game Rules

- You start with a grid containing two tiles (either 2 or 4)
- Move tiles in any direction (up, down, left, right)
- When two tiles with the same number touch, they **merge** into one with their **sum**
- After each move, a new tile (90% chance of 2, 10% chance of 4) appears in a random empty cell
- The game ends when no valid moves are possible
- **Win condition:** Reach the 2048 tile
- **Loss condition:** Board is full with no possible merges

---

## ✨ Features

### 🎨 **Beautiful & Modern UI**

- Clean, minimalist design with carefully chosen color palette
- Smooth CSS transitions and animations
- Responsive layout that works on all screen sizes

### 🎮 **Enhanced Gameplay**

- **Multiple Board Sizes:** Play on 4×4 (classic), 5×5, or 6×6 grids
- **Dual Control Schemes:** Arrow keys or WASD for flexible controls
- **Real-time Score Tracking:** Score updates instantly as you merge tiles
- **Status Indicators:** Visual feedback for game state (playing, won, lost)
- **Instant Restart:** Quick game reset without page reload

### 🏗️ **Technical Excellence**

- **Pure Functional Logic:** Game engine built with immutable, side-effect-free functions
- **Custom React Hooks:** Clean separation of game logic and UI
- **TypeScript-Ready:** Structured codebase ready for type safety
- **Accessibility:** Built with ARIA labels and screen reader support
- **Performance Optimized:** Minimal re-renders and efficient state management

### 🚀 **Modern Development**

- Lightning-fast HMR (Hot Module Replacement) with Vite
- ESLint configuration for code quality
- Production-ready build optimization
- Deployed on Vercel with continuous deployment

---

## 🛠️ Tech Stack

| Technology                                   | Version | Purpose                                            |
| -------------------------------------------- | ------- | -------------------------------------------------- |
| **[React](https://react.dev/)**              | 19.1.1  | UI Framework - Component-based architecture        |
| **[Vite](https://vitejs.dev/)**              | 7.1.7   | Build Tool - Fast development and optimized builds |
| **[Tailwind CSS](https://tailwindcss.com/)** | 3.4.13  | Styling - Utility-first CSS framework              |
| **[ESLint](https://eslint.org/)**            | 9.36.0  | Code Quality - Linting and code standards          |
| **[PostCSS](https://postcss.org/)**          | 8.5.6   | CSS Processing - Transform CSS with plugins        |

### Dev Dependencies

- `@vitejs/plugin-react` - React support for Vite
- `autoprefixer` - Automatic vendor prefix handling
- `eslint-plugin-react-hooks` - React Hooks linting rules
- `eslint-plugin-react-refresh` - React Fast Refresh support

---

## 🏗️ Project Structure

```
2048-react/
├── 📁 public/                  # Static assets
├── 📁 src/
│   ├── 📁 components/          # React UI components
│   │   ├── Board.jsx           # Game board grid with tiles
│   │   ├── Header.jsx          # Score, status, and controls
│   │   └── StatusOverlay.jsx   # Win/loss modal overlay
│   ├── 📁 hooks/
│   │   └── useGame.js          # Custom hook for game state management
│   ├── 📁 lib/
│   │   └── game.js             # Pure functional game engine
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Component-specific styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

### Key Directories

- **`src/components/`** - Reusable React components with isolated concerns
- **`src/hooks/`** - Custom React hooks for state management and side effects
- **`src/lib/`** - Pure business logic without framework dependencies

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (version 7.x or higher) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aabhishekn/2048x.git
   cd 2048x
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173` (default Vite port)

The application will automatically reload when you make changes to the source files.

---

## 🕹️ How to Play

### Controls

| Key        | Action           |
| ---------- | ---------------- |
| `↑` or `W` | Move tiles up    |
| `↓` or `S` | Move tiles down  |
| `←` or `A` | Move tiles left  |
| `→` or `D` | Move tiles right |

### Gameplay Instructions

1. **Starting the Game**

   - The game begins with two tiles (2 or 4) randomly placed on the board

2. **Moving Tiles**

   - Press arrow keys or WASD to slide all tiles in that direction
   - All tiles slide as far as possible in the chosen direction

3. **Merging Tiles**

   - When two tiles with the same number collide, they merge into one
   - The merged tile's value is the sum of the two original tiles
   - Each merge adds the new tile's value to your score

4. **Spawning New Tiles**

   - After each valid move, a new tile (2 or 4) appears in a random empty cell
   - 90% chance of spawning a 2, 10% chance of spawning a 4

5. **Winning**

   - Create a tile with the value **2048** to win
   - You can continue playing to achieve higher scores

6. **Losing**

   - The game ends when the board is full and no valid moves remain
   - No adjacent tiles have the same value

7. **Restarting**
   - Click the **Restart** button to start a new game
   - Change the board size to start fresh with a different grid

### Strategy Tips

- Keep your highest value tile in a corner
- Build tiles in a cascading pattern
- Avoid random movements; plan ahead
- Try to keep tiles flowing in one or two directions

---

## 🎮 Technical Highlights

### Core Algorithm

The game logic uses a smart approach: all four directions (up, down, left, right) are normalized to a single "move left" operation using matrix transformations (transpose and reverse). This keeps the code DRY and maintainable.

### Architecture

- **`game.js`** - Pure functional logic with no React dependencies (easy to test and reuse)
- **`useGame.js`** - Custom hook managing game state and keyboard controls
- **`App.jsx`** - Main component orchestrating Header, Board, and StatusOverlay
- **Components** - Isolated, reusable UI pieces with clear responsibilities

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with Hot Module Replacement (HMR).

- Opens at `http://localhost:5173` by default
- Auto-reloads on file changes
- Fast refresh preserves React component state

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

- Minifies JavaScript and CSS
- Optimizes assets and images
- Generates source maps
- Tree-shakes unused code

### Preview

```bash
npm run preview
```

Locally preview the production build before deployment.

- Serves the `dist/` directory
- Tests production behavior locally

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality and style.

- Checks all `.js` and `.jsx` files
- Enforces React best practices
- Reports errors and warnings

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com/).

**Option 1: Deploy via GitHub**

1. Push your code to a GitHub repository
2. Import the project in Vercel dashboard
3. Vercel auto-detects Vite configuration
4. Deploy with one click!
5. Every push to `main` triggers automatic redeployment

**Option 2: Deploy via CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

**Netlify:**

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

**GitHub Pages:**

```bash
# Update vite.config.js with base path
# Build and deploy to gh-pages branch
```

### Environment Variables

No environment variables are required for basic deployment. The app runs entirely in the browser with no backend dependencies.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Abhishek N

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### 🎮 [**Play Now →**](https://2048x-seven.vercel.app/)

**[🐙 GitHub](https://github.com/aabhishekn/2048x)** • **[🌐 Live Demo](https://2048x-seven.vercel.app/)**

---

Made with ❤️ using React, Vite, and Tailwind CSS

⭐ **Star this repo if you found it helpful!** ⭐

</div>
