import { useEffect, useState } from "react";
import { initGame, step } from "../lib/game";

/**
 * Custom hook for managing 2048 game state and controls
 * Handles game initialization, moves, keyboard input, and board size changes
 */
export const useGame = (initialSize = 4) => {
  // initialize once with a fresh game
  const [state, setState] = useState(() => initGame(initialSize));

  // restart with same size (or a new size if provided)
  const restart = (size) => setState(initGame(size ?? state.size));

  // apply a move using the engine's step()
  const move = (dir) => setState((s) => step(s, dir));

  // change board size and start a new game
  const setSize = (n) => setState(initGame(n));

  // Handle keyboard controls (Arrow keys and WASD)
  useEffect(() => {
    const onKey = (e) => {
      const map = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        a: "left",
        d: "right",
        w: "up",
        s: "down",
      };
      const dir = map[e.key];
      if (dir) {
        e.preventDefault();
        move(dir);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { state, restart, move, setSize };
};
