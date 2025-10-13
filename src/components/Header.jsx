export default function Header({
  score = 0,
  status = "playing",
  size = 4,
  onRestart = () => {},
  onSize = () => {},
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <h1 className="text-3xl font-extrabold">2048</h1>

      <div className="ml-auto flex items-center gap-2">
        <div className="rounded-lg bg-amber-200 text-amber-900 px-3 py-1 font-semibold">
          Score: {score}
        </div>

        <div className="rounded-lg bg-slate-200 text-slate-700 px-3 py-1">
          Status: {status}
        </div>

        <label className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Size</span>
          <select
            className="rounded-md border border-slate-300 px-2 py-1"
            value={size}
            onChange={(e) => onSize(parseInt(e.target.value, 10))}
          >
            {[4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}×{n}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={onRestart}
          className="rounded-md bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 font-medium"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
