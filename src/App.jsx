import Header from "./components/Header";
import Board from "./components/Board";

export default function App() {
  // placeholder state for now (we’ll wire real engine next step)
  const size = 4;

  return (
    <main className="max-w-xl mx-auto p-4 min-h-screen bg-[#faf8ef] text-slate-800">
      <Header
        score={0}
        status="playing"
        size={size}
        onRestart={() => {}}
        onSize={() => {}}
      />

      <Board size={size} />

      <p className="mt-3 text-sm text-slate-500">
        Grid placeholder. Next: implement the pure 2048 engine.
      </p>
    </main>
  );
}
