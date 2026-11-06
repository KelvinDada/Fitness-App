const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const storage = new Map();
const context = vm.createContext({
  window: { confirm: () => true, clearTimeout() {}, setTimeout() {} },
  document: { querySelector: () => ({ value: "2026-11-06" }) },
  localStorage: { getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value), removeItem: (key) => storage.delete(key) },
  crypto: require("node:crypto").webcrypto,
  structuredClone,
});
const source = readFileSync(join(__dirname, "../app.js"), "utf8");
vm.runInContext(source.replace("init();", ""), context);
const run = (code) => vm.runInContext(code, context);
run(`
  renderRoutineManager = renderRoutineControls = renderWorkout = renderHistory = renderCalendar = showToast = () => {};
  state.routines = { A: ["Remo mal", "Press"], B: ["Remo", "Remo mal"] };
  state.history = [
    { id: "1", routine: "A", exercise: "Remo mal", date: "2026-11-01", notes: "banco 30", completedAt: "original", sets: [{ reps: "12" }] },
    { id: "2", routine: "B", exercise: "Remo", date: "2026-11-02", weight: "25" },
    { id: "3", routine: "A", exercise: "Remo mal", entryType: "freeform", notes: "intacto" },
  ];
  state.exerciseStats = { "Remo mal": { date: "2026-11-01", best: 30 }, Remo: { date: "2026-11-02", best: 25 } };
  currentRoutine = "A";
  sessionMeta.routineName = "A";
  drafts.set("Remo mal", { weight: "20", completedAt: "primero" });
  sessionExercises = ["Remo mal"];
  sessionSkippedExercises = ["Press"];
  renameExercise("Remo mal", "Remo");
`);
assert.equal(run('state.history.length'), 3);
assert.equal(run('state.history[0].exercise'), "Remo");
assert.equal(run('state.history[0].completedAt'), "original");
assert.equal(run('state.history[0].sets[0].reps'), "12");
assert.equal(run('state.history[2].exercise'), "Remo mal");
assert.equal(run('state.routines.B.length'), 1);
assert.equal(run('state.exerciseStats.Remo.best'), 30);
assert.equal(run('drafts.get("Remo").completedAt'), "primero");
assert.equal(run('getLatest("Remo").id'), "2");
assert.equal(run('canonicalExerciseName("  remo  ")'), "Remo");
assert.equal(run('JSON.parse(localStorage.getItem(DRAFT_KEY)).drafts.Remo.weight'), "20");
assert.equal(run('loadState().history[0].exercise'), "Remo");
run('moveRoutineExercise("A", 1, -1)');
assert.equal(run('state.routines.A[0]'), "Press");
run('renameRoutine("A", "Nueva")');
assert.equal(run('currentRoutine'), "Nueva");
assert.equal(run('sessionMeta.routineName'), "Nueva");
assert.equal(run('state.history[0].routine'), "Nueva");
assert.equal(run('state.history[2].routine'), "A");
run('window.confirm = () => false; renameExercise("Press", "Remo")');
assert.equal(run('state.routines.Nueva[0]'), "Press");
run('window.confirm = () => true; drafts.set("Press", { notes: "activo" }); renameExercise("Press", "Remo")');
assert.equal(run('state.routines.Nueva.length'), 2);
run('drafts.delete("Press"); renameExercise("Press", "PRESS")');
assert.equal(run('state.routines.Nueva[0]'), "PRESS");
assert.equal(run('sessionSkippedExercises[0]'), "PRESS");
console.log("OK: rename, merge, history, timestamps, active drafts, persistence, order and routine names");
