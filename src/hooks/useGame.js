import { useEffect, useState } from "react";
import { initGame, step } from "../lib/game";

/**
 * useGame: bridges React to our pure engine.
 * - holds the immutable game state
 * - exposes restart(), setSize(), and keyboard-driven moves
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

  // keyboard controls: Arrow keys or WASD
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
