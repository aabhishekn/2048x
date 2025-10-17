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
- [Game Logic](#-game-logic)
- [Component Architecture](#-component-architecture)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

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

## 🎮 Game Logic

The game engine (`src/lib/game.js`) is built with **pure, immutable functions** that make the logic predictable, testable, and easy to reason about.

### Core Functions

#### `emptyBoard(n)`

Creates an n×n array filled with zeros representing empty cells.

```javascript
emptyBoard(4); // Returns 4×4 grid of zeros
```

#### `initGame(size)`

Initializes a new game with two random tiles on the board.

```javascript
initGame(4); // Returns { board, score: 0, status: 'playing', size: 4 }
```

#### `step(state, direction)`

Computes the next game state from a direction ('left', 'right', 'up', 'down').

- Returns the same state if move is invalid or doesn't change anything
- Spawns a new tile after valid moves
- Updates score based on merged tiles
- Updates game status (playing/won/lost)

```javascript
step(currentState, "left"); // Returns new game state
```

#### `canMove(board)`

Checks if any valid moves are possible (empty cells or adjacent equal tiles).

```javascript
canMove(board); // Returns true/false
```

### Algorithm Details

**Tile Movement & Merging:**

1. All four directions are normalized to a "move left" operation
2. For right: reverse each row, move left, reverse back
3. For up: transpose, move left, transpose back
4. For down: transpose, reverse rows, move left, reverse, transpose back

**Merge Logic:**

- Tiles are merged only once per move
- Each merge increments the score by the new tile's value
- After merging, remaining tiles slide to fill gaps

**Win/Loss Detection:**

- Win: Any tile reaches 2048
- Loss: Board is full AND no adjacent tiles have equal values

---

## 🧩 Component Architecture

### `App.jsx` - Root Component

The main application component that orchestrates the entire game.

**Responsibilities:**

- Initializes game state via `useGame` hook
- Composes Header, Board, and StatusOverlay components
- Provides accessibility features (ARIA live regions)
- Manages layout and styling

**Key Props Flow:**

```
App
├─→ Header (score, status, size, onRestart, onSize)
├─→ Board (size, board)
└─→ StatusOverlay (status, onRestart)
```

---

### `useGame.js` - Game State Hook

Custom React hook that encapsulates all game state management and controls.

**Features:**

- Initializes game state with `initGame()`
- Manages keyboard event listeners
- Exposes `restart()`, `move()`, and `setSize()` functions
- Handles state updates immutably

**Return Value:**

```javascript
{
  state: { board, score, status, size },
  restart: (size?) => void,
  move: (direction) => void,
  setSize: (n) => void
}
```

**Event Handling:**

- Listens to `keydown` events globally
- Maps Arrow keys and WASD to directions
- Prevents default browser scrolling behavior

---

### `game.js` - Pure Game Engine

Framework-agnostic game logic with zero dependencies on React.

**Design Principles:**

- **Pure Functions:** No side effects, same input always produces same output
- **Immutability:** Never mutates state, always returns new objects
- **Functional Composition:** Complex operations built from simple functions
- **Testability:** Easy to test without mocking or framework setup

**Key Functions:**

- `emptyBoard(n)` - Create empty grid
- `initGame(size)` - Initialize new game
- `step(state, direction)` - Execute move
- `canMove(board)` - Check for valid moves
- `slideAndMergeRow(row)` - Core merge algorithm

---

### `Board.jsx` - Game Grid Component

Renders the game board with colored tiles based on values.

**Features:**

- Dynamic grid sizing (4×4, 5×5, 6×6)
- Responsive tile sizing and font scaling
- Color-coded tiles based on value
- Smooth transitions with CSS

**Tile Color Scheme:**

```javascript
0     → Transparent (empty)
2     → Light cream (#eee4da)
4     → Cream (#ede0c8)
8     → Orange (#f2b179)
16    → Dark orange (#f59563)
32    → Red-orange (#f67c5f)
64    → Red (#f65e3b)
128   → Gold (#edcf72)
256   → Gold (#edcc61)
512   → Gold (#edc850)
1024  → Gold (#edc53f)
2048+ → Victory gold (#edc22e)
```

**Responsive Sizing:**

- 4×4 grid: `h-20` tiles, `text-2xl` font
- 5×5 grid: `h-16` tiles, `text-xl` font
- 6×6 grid: `h-14` tiles, `text-lg` font

---

### `Header.jsx` - Control Panel Component

Displays game information and controls at the top of the screen.

**Features:**

- Current score display with amber badge
- Game status indicator (playing/won/lost)
- Board size selector dropdown (4×4, 5×5, 6×6)
- Restart button

**Props:**

```javascript
{
  score: number,        // Current game score
  status: string,       // 'playing' | 'won' | 'lost'
  size: number,         // Current board size
  onRestart: function,  // Restart callback
  onSize: function      // Size change callback
}
```

---

### `StatusOverlay.jsx` - Game End Modal

Modal overlay that appears when the game ends (win or loss).

**Features:**

- Semi-transparent backdrop
- Contextual message based on game status
- Emoji indicators (🎉 for win, 👾 for loss)
- New game button
- Accessibility: Proper ARIA labels

**Display Logic:**

- Hidden during active gameplay (`status === 'playing'`)
- Shows "You won!" message when 2048 is reached
- Shows "Game over" message when no moves remain

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

## 🎨 Customization

### Changing Board Size Range

Edit `Header.jsx` to add more size options:

```javascript
{
  [4, 5, 6, 7, 8].map((n) => (
    <option key={n} value={n}>
      {n}×{n}
    </option>
  ));
}
```

### Modifying Tile Colors

Edit the `tileClass()` function in `Board.jsx`:

```javascript
const tileClass = (v) => {
  if (v === 2) return "bg-purple-200 text-purple-900";
  // Add your custom colors...
};
```

### Adjusting Win Condition

Edit `game.js` to change the target tile:

```javascript
const status = nb.flat().includes(4096)
  ? "won" // Win at 4096 instead
  : canMove(nb)
  ? "playing"
  : "lost";
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the repository**

   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/aabhishekn/2048x.git
   cd 2048x
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make your changes**

   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

5. **Commit your changes**

   ```bash
   git commit -m 'Add amazing feature'
   ```

6. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes

### Code Style Guidelines

- Use functional components and hooks
- Follow ESLint rules
- Keep functions small and focused
- Write descriptive variable names
- Add JSDoc comments for complex functions

---

## 🔮 Future Enhancements

Ideas for future development:

- [ ] **Undo/Redo Functionality** - Allow players to undo moves
- [ ] **Local High Scores** - Save best scores using localStorage
- [ ] **Animated Tile Merges** - Smooth animations for merging tiles
- [ ] **Touch/Swipe Controls** - Mobile gesture support
- [ ] **Game Themes** - Dark mode and custom color themes
- [ ] **Sound Effects** - Audio feedback for moves and merges
- [ ] **Leaderboard** - Global high score tracking
- [ ] **AI Solver** - Auto-play mode with AI algorithm
- [ ] **Game Statistics** - Track moves, time played, etc.
- [ ] **Share Results** - Share scores on social media

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

## 👨‍💻 Author

**Abhishek N**

- 🐙 GitHub: [@aabhishekn](https://github.com/aabhishekn)
- 🌐 Portfolio: Coming soon
- 📧 Email: Contact via GitHub

---

## 🙏 Acknowledgments

- **Gabriele Cirulli** - Creator of the [original 2048 game](https://github.com/gabrielecirulli/2048)
- **React Team** - For the incredible React framework
- **Evan You & Vite Team** - For the blazing-fast build tool
- **Tailwind Labs** - For the utility-first CSS framework
- **Vercel** - For seamless deployment and hosting

---

## 📞 Support

- 🐛 **Found a bug?** [Open an issue](https://github.com/aabhishekn/2048x/issues)
- 💡 **Have an idea?** [Request a feature](https://github.com/aabhishekn/2048x/issues)
- ⭐ **Enjoying the game?** Give it a star on GitHub!

---

<div align="center">

### 🎮 [**Play Now →**](https://2048x-seven.vercel.app/)

**[🐙 GitHub](https://github.com/aabhishekn/2048x)** • **[🌐 Live Demo](https://2048x-seven.vercel.app/)** • **[🐛 Report Bug](https://github.com/aabhishekn/2048x/issues)** • **[💡 Request Feature](https://github.com/aabhishekn/2048x/issues)**

---

Made with ❤️ using React, Vite, and Tailwind CSS

⭐ **Star this repo if you found it helpful!** ⭐

</div>
