// Returns Tailwind classes based on tile value
const tileClass = (v) => {
  if (v === 0) return "bg-[#cdc1b4] text-transparent";
  if (v === 2) return "bg-[#eee4da] text-slate-800";
  if (v === 4) return "bg-[#ede0c8] text-slate-800";
  if (v === 8) return "bg-[#f2b179] text-white";
  if (v === 16) return "bg-[#f59563] text-white";
  if (v === 32) return "bg-[#f67c5f] text-white";
  if (v === 64) return "bg-[#f65e3b] text-white";
  if (v === 128) return "bg-[#edcf72] text-white";
  if (v === 256) return "bg-[#edcc61] text-white";
  if (v === 512) return "bg-[#edc850] text-white";
  if (v === 1024) return "bg-[#edc53f] text-white";
  if (v >= 2048) return "bg-[#edc22e] text-white";
  return "bg-[#eee4da] text-slate-800";
};

export default function Board({ size = 4, board = null }) {
  const n = size;
  const vals = board ?? Array.from({ length: n * n }, () => 0);

  // Responsive tile sizing based on board size
  const cellH = n <= 4 ? "h-20" : n === 5 ? "h-16" : "h-14";
  const font = n <= 4 ? "text-2xl" : n === 5 ? "text-xl" : "text-lg";

  return (
    <div className="rounded-2xl p-2" style={{ background: "#bbada0" }}>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
      >
        {vals.map((val, idx) => (
          <div
            key={idx}
            className={[
              "rounded-md flex items-center justify-center font-extrabold select-none",
              "transition-all duration-150 ease-out",
              cellH,
              font,
              tileClass(val),
            ].join(" ")}
          >
            {val === 0 ? "" : val}
          </div>
        ))}
      </div>
    </div>
  );
}
