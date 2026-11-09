const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const storage = new Map();
const context = vm.createContext({
  window: { clearTimeout() {}, setTimeout() {}, confirm: () => true },
  document: { querySelector: () => ({ value: "", style: {}, classList: { toggle() {} } }), querySelectorAll: () => [] },
  localStorage: { getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value), removeItem: (key) => storage.delete(key) },
  crypto: require("node:crypto").webcrypto,
  structuredClone,
  FileReader: class { readAsText(file) { this.result = file.contents; this.onload(); } },
});
vm.runInContext(readFileSync(join(__dirname, "../app.js"), "utf8").replace("init();", ""), context);
const run = (code) => vm.runInContext(code, context);
run(`
  today = () => "2026-11-09";
  const renderPlanForTest = renderCalendarPlan;
  renderCalendar = renderCalendarPlan = renderRoutineControls = renderRoutineManager = renderWorkout = renderHistory = showToast = () => {};
  const originalHistory = JSON.stringify(state.history);
  const originalRoutines = JSON.stringify(state.routines);
  setCalendarPlan("2026-11-12", "train");
  setCalendarPlan("2026-11-13", "rest");
`);
assert.equal(run('getCalendarPlan("2026-11-12")'), "train");
assert.equal(run('getCalendarPlan("2026-11-13")'), "rest");
assert.equal(run("JSON.stringify(state.history) === originalHistory"), true);
assert.equal(run("JSON.stringify(state.routines) === originalRoutines"), true);
assert.equal(run('loadState().calendarPlans["2026-11-12"]'), "train");
run('setCalendarPlan("2026-11-12", "rest")');
assert.equal(run('getCalendarPlan("2026-11-12")'), "rest");
run('setCalendarPlan("2026-11-12", "none")');
assert.equal(run('Object.hasOwn(state.calendarPlans, "2026-11-12")'), false);
run('setCalendarPlan("2026-11-08", "train"); setCalendarPlan("2026-11-14", "unexpected")');
assert.equal(run('getCalendarPlan("2026-11-08")'), "");
assert.equal(run('getCalendarPlan("2026-11-14")'), "");
run(`
  state.history.unshift(entry("2026-11-13", "Cardio", "Registro suelto", "", "", "hold", "", { entryType: "freeform", freeformId: "cardio-test" }));
  const recorded = getMonthWorkoutEntries("2026-11").find((item) => item.routine === "Cardio");
  deleteWorkoutSession(recorded);
`);
assert.equal(run('getCalendarPlan("2026-11-13")'), "rest", "deleting actual workout must preserve its plan");
run(`
  let backup;
  download = (name, contents) => { backup = contents; };
  exportJson();
  state.calendarPlans = {};
  importJson({ target: { files: [{ contents: backup }], value: "" } });
`);
assert.equal(run('getCalendarPlan("2026-11-13")'), "rest", "JSON import must restore plans");
run('today = () => "2026-11-15"; setCalendarPlan("2026-11-13", "train")');
assert.equal(run('getCalendarPlan("2026-11-13")'), "rest", "past plans remain available without becoming completed workouts");
run('setCalendarPlan("2026-11-13", "none")');
assert.equal(run('getCalendarPlan("2026-11-13")'), "");
run('importJson({ target: { files: [{ contents: JSON.stringify({ ...JSON.parse(backup), calendarPlans: undefined }) }], value: "" } })');
assert.equal(run('getCalendarPlan("2026-11-13")'), "", "older backups without plans remain supported");
run(`
  state.calendarPlans = { "2026-11-19": "train", "2026-11-20": "rest" };
  state.history.unshift(entry("2026-11-19", "Prueba", "Remo", "12", "20", "hold"));
  els.calendarMonthInput.value = "2026-11";
  els.freeWorkoutDate.value = "2026-11-19";
  const cells = [];
  document.createElement = () => ({ dataset: {}, setAttribute(name, value) { this[name] = value; }, addEventListener() {} });
  els.calendarGrid.append = (node) => cells.push(node);
  renderCalendarGrid("2026-11", getMonthWorkoutEntries("2026-11"));
  renderPlanForTest();
  const combinedDay = cells.find((cell) => cell.dataset.date === "2026-11-19");
  const restDay = cells.find((cell) => cell.dataset.date === "2026-11-20");
`);
assert.match(run('combinedDay.className'), /is-active/);
assert.match(run('combinedDay.innerHTML'), /marker-done/);
assert.match(run('combinedDay.innerHTML'), /marker-train/);
assert.match(run('combinedDay["aria-label"]'), /Entreno realizado, Entreno previsto/);
assert.match(run('restDay.className'), /is-planned-rest/);
assert.doesNotMatch(run('restDay.className'), /is-active/);
assert.equal(run('els.calendarPlanPanel.hidden'), false);
assert.equal(run('els.calendarFreeWorkoutPanel.hidden'), true);
run('els.freeWorkoutDate.value = "2026-11-14"; renderPlanForTest()');
assert.equal(run('els.calendarPlanPanel.hidden'), true);
assert.equal(run('els.calendarFreeWorkoutPanel.hidden'), false);
console.log("OK: plan/change/clear, history separation, reload, deletion, JSON roundtrip and legacy backups");
