export default function App() {
  return (
    <main className="max-w-xl mx-auto p-4 min-h-screen bg-[#faf8ef] text-slate-800">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-wide">2048</h1>
        <span className="text-sm text-slate-500">React + Tailwind</span>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-slate-600">
          Tailwind is wired. Next we’ll add the game engine step-by-step.
        </p>
      </section>
    </main>
  );
}
