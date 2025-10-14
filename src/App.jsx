import Header from "./components/Header";
import Board from "./components/Board";
import StatusOverlay from "./components/StatusOverlay";
import { useGame } from "./hooks/useGame";

export default function App() {
  const { state, restart, setSize } = useGame(4);

  return (
    <main className="max-w-xl mx-auto p-4 min-h-screen bg-[#faf8ef] text-slate-800">
      <Header
        score={state.score}
        status={state.status}
        size={state.size}
        onRestart={() => restart()}
        onSize={(n) => setSize(n)}
      />

      {/* Board container becomes relative to host the overlay */}
      <div className="relative">
        <Board size={state.size} board={state.board.flat()} />
        <StatusOverlay status={state.status} onRestart={() => restart()} />
      </div>

      {/* Accessible live region for status updates */}
      <div className="sr-only" role="status" aria-live="polite">
        {state.status === "won"
          ? "You won. New game available."
          : state.status === "lost"
          ? "No more moves. New game available."
          : "Game in progress."}
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Use Arrow keys or WASD. Change size to start a fresh board.
      </p>
    </main>
  );
}
