// Pure, immutable 2048 engine (no React-specific code)

/** Create an n×n array filled with 0s. */
export const emptyBoard = (n) =>
  Array.from({ length: n }, () => Array(n).fill(0));

/** Random element from array. */
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Slide a single row to the LEFT and merge once per pair.
 * Returns the new row and the score gained by merges.
 * Example: [2,2,2,0] -> [4,2,0,0] (gained 4)
 */
const slideAndMergeRow = (row) => {
  const nums = row.filter((v) => v !== 0);     // remove empties
  const out = [];
  let gained = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      const merged = nums[i] * 2;
      out.push(merged);
      gained += merged;                        // score is sum of merges
      i++;                                     // skip the consumed neighbor
    } else {
      out.push(nums[i]);
    }
  }
  while (out.length < row.length) out.push(0); // pad with zeros
  return { row: out, gained };
};

/** Helpers to reuse the LEFT move for other directions. */
const transpose = (b) => b[0].map((_, c) => b.map((r) => r[c]));
const reverseRows = (b) => b.map((r) => [...r].reverse());

/**
 * Apply LEFT move to all rows. Tracks whether anything moved,
 * and the total gained score.
 */
const moveLeft = (board) => {
  let moved = false, gainedTotal = 0;
  const next = board.map((r) => {
    const { row, gained } = slideAndMergeRow(r);
    // changed?
    if (!moved) {
      for (let i = 0; i < r.length; i++) {
        if (row[i] !== r[i]) { moved = true; break; }
      }
    }
    gainedTotal += gained;
    return row;
  });
  return { next, moved, gainedTotal };
};

/** Can we make any move? (empty cell or any adjacent equals) */
export const canMove = (board) => {
  const n = board.length;
  if (board.some((r) => r.includes(0))) return true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = board[i][j];
      if ((i + 1 < n && board[i + 1][j] === v) || (j + 1 < n && board[i][j + 1] === v)) {
        return true;
      }
    }
  }
  return false;
};

/** Place a 2 (90%) or 4 (10%) in a random empty cell. */
const placeRandomTile = (board) => {
  const empties = [];
  board.forEach((r, i) => r.forEach((v, j) => v === 0 && empties.push([i, j])));
  if (empties.length === 0) return board;
  const [i, j] = randChoice(empties);
  const val = Math.random() < 0.9 ? 2 : 4;
  const copy = board.map((r) => [...r]); // immutable copy
  copy[i][j] = val;
  return copy;
};

/** Start a new game with two tiles spawned (default 4×4). */
export const initGame = (size = 4) => {
  let b = emptyBoard(size);
  b = placeRandomTile(placeRandomTile(b));
  return { board: b, score: 0, status: "playing", size };
};

/**
 * Compute next state from a direction ('left'|'right'|'up'|'down').
 * - invalid/no-op moves return the same state
 * - after a valid move we spawn one new tile
 * - status becomes 'won' if a 2048 tile exists
 * - status becomes 'lost' if no moves remain
 */
export const step = (state, dir) => {
  if (state.status !== "playing") return state;

  const orient = {
    left: (b) => b,
    right: (b) => reverseRows(b),
    up: (b) => transpose(b),
    down: (b) => reverseRows(transpose(b)),
  }[dir];

  const deorient = {
    left: (b) => b,
    right: (b) => reverseRows(b),
    up: (b) => transpose(b),
    down: (b) => transpose(reverseRows(b)),
  }[dir];

  const { next, moved, gainedTotal } = moveLeft(orient(state.board));
  if (!moved) return state; // no effective change → ignore

  let nb = deorient(next);
  nb = placeRandomTile(nb);

  const score = state.score + gainedTotal;
  const status = nb.flat().includes(2048) ? "won" : (canMove(nb) ? "playing" : "lost");

  return { board: nb, score, status, size: state.size };
};
