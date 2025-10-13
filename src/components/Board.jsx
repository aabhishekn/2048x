export default function Board({ size = 4, board = null }) {
  const n = size;
  // if no board provided yet, render empty cells
  const cells = board ?? Array.from({ length: n * n }, () => 0);

  return (
    <div className="rounded-2xl p-2" style={{ background: "#bbada0" }}>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
      >
        {cells.map((val, idx) => (
          <div
            key={idx}
            className="h-20 rounded-md flex items-center justify-center font-bold text-xl"
            style={{ background: val === 0 ? "#cdc1b4" : "#eee4da" }}
          >
            {val || ""}
          </div>
        ))}
      </div>
    </div>
  );
}
