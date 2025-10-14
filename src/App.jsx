import Header from "./components/Header";
import Board from "./components/Board";
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
        onSize={setSize}
      />

      {/* Board expects a flat array; convert 2D -> 1D for display */}
      <Board size={state.size} board={state.board.flat()} />

      <p className="mt-3 text-sm text-slate-500">
        Use Arrow keys or WASD. Reach 2048!
      </p>

      {state.status !== "playing" && (
        <div className="mt-3 font-semibold">
          {state.status === "won" ? "🎉 You won!" : "👾 No more moves."}
        </div>
      )}
    </main>
  );
}
