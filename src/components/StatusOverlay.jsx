/**
 * Overlay component that displays game end status (won/lost)
 * Shows only when game is not in playing state
 */
export default function StatusOverlay({
  status = "playing",
  onRestart = () => {},
}) {
  if (status === "playing") return null;

  const label = status === "won" ? "You won!" : "No more moves";

  return (
    <div
      aria-label={label}
      className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl"
    >
      <div className="bg-white rounded-xl px-6 py-5 text-center shadow-lg">
        <div className="text-2xl font-extrabold mb-2">
          {status === "won" ? "🎉 You won!" : "👾 Game over"}
        </div>
        <p className="text-slate-600 mb-4">
          {status === "won"
            ? "Great job reaching 2048."
            : "No valid moves remain. Try again!"}
        </p>
        <button
          onClick={onRestart}
          className="rounded-md bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 font-medium"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
