const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

process.env.TZ = "Europe/Madrid";
let now = "2026-11-06T00:30:00+01:00";
class ClockDate extends Date {
  constructor(...args) { super(...(args.length ? args : [now])); }
  static now() { return new Date(now).getTime(); }
}
const storage = new Map();
const context = vm.createContext({
  Date: ClockDate,
  window: { clearTimeout() {}, setTimeout() {}, confirm: () => true },
  document: { querySelector: () => ({ value: "", style: {}, classList: { toggle() {} }, querySelectorAll: () => [] }) },
  localStorage: { getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value), removeItem: (key) => storage.delete(key) },
  crypto: require("node:crypto").webcrypto,
  structuredClone,
});
vm.runInContext(readFileSync(join(__dirname, "../app.js"), "utf8").replace("init();", ""), context);
const run = (code) => vm.runInContext(code, context);
run("showToast = renderWorkout = renderHistory = renderRoutineControls = () => {}; maybeOpenEmailSummary = () => 'disabled'");
assert.equal(run("today()"), "2026-11-06", "local day must differ from UTC near midnight");
run(`localStorage.setItem(DRAFT_KEY, JSON.stringify({ date: "2026-11-01", drafts: {} })); restoreSessionDraft(); updateWorkoutDate()`);
assert.equal(run("els.sessionDate.value"), "06-11-2026", "ignore an unstarted draft's stale selected date");
run('els.sessionDate.value = "01-11-2026"; startSession("manual", { silent: true }); persistSessionDraftNow()');
assert.equal(run("sessionMeta.routineDate"), "2026-11-06");
assert.equal(run("sessionMeta.sessionStartSource"), "manual");
assert.equal(run("JSON.parse(localStorage.getItem(DRAFT_KEY)).date"), "2026-11-06");
now = "2026-11-07T00:10:00+01:00";
run("sessionMeta = createEmptySessionMeta(); restoreSessionDraft(); checkLongSession()");
assert.equal(run("getWorkoutDate()"), "2026-11-06", "resumed workout retains its start day across midnight");
run('drafts.set("Face Pull", { weight: "20", sets: [{ reps: "12" }] }); saveSession()');
assert.equal(run("state.history[0].date"), "2026-11-06", "history uses start day, not save day");
assert.equal(run("els.sessionDate.value"), "07-11-2026");
run('els.sessionDate.value = "01-11-2026"; updateDraft("Face Pull", { weight: "15" })');
assert.equal(run("sessionMeta.routineDate"), "2026-11-07", "fallback completion also starts on today");
assert.equal(run("sessionMeta.sessionStartSource"), "fallback_first_completion");
now = "2026-07-01T00:30:00+02:00";
assert.equal(run("today()"), "2026-07-01", "summer time and month rollover use local date");
console.log("OK: local day, stale date, manual/fallback start, draft restore, midnight and saved history");
