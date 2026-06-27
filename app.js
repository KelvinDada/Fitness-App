const STORAGE_KEY = "registro-gym-state-v1";
const DRAFT_KEY = "registro-gym-session-draft-v1";
const SEED_VERSION = window.REGISTRO_GYM_SEED_VERSION || "manual-seed-v1";
const IMPORTED_HISTORY = window.REGISTRO_GYM_IMPORTED_HISTORY || [];

const seed = {
  settings: {
    dumbbellStep: 2.5,
    machineStep: 5,
    emailSummaryEnabled: false,
  },
  routines: {
    "Upper A": [
      "Dead Bug (core)",
      "Face Pull",
      "Press inclinado con mancuernas",
      "Jalón neutro / Dominadas",
      "Press de pecho (máquina)",
      "Remo sentado (cable)",
      "Remo sentado (máquina)",
      "Landmine press / Press hombro sentado",
      "Elevaciones laterales",
      "Cardio (8–10 min RPE 6–7)",
    ],
    "Lower A": [
      "Glute bridge (calentamiento)",
      "Goblet squat",
      "Squat safety bar",
      "Prensa de pierna",
      "Peso muerto rumano con mancuernas (RDL)",
      "Bulgarian split squat",
      "Curl femoral (máquina)",
      "Gemelos (variación disponible)",
      "Pallof press",
      "Cardio (8–12 min RPE 6–7)",
      "Peso corporal",
    ],
    "Upper B": [
      "Face Pull",
      "Remo sentado (máquina/cable)",
      "Dumbbell Single Arm Row",
      "Jalón al pecho / Dominadas",
      "Press plano con mancuernas",
      "Fly (pec deck / DB fly / squeeze press)",
      "Elevaciones laterales",
      "Pressdown",
      "Kickback mancuerna",
      "Cardio (8–10 min RPE 6–7)",
    ],
    "Lower B": [
      "Glute bridge (calentamiento)",
      "Safety bar squad",
      "Sentadilla goblet / Smith squat",
      "Hip thrust (barra/máquina)",
      "Cuádriceps (extensión / step-ups / prensa quad-bias)",
      "Abductores (máquina)",
      "Gemelos (variación disponible)",
      "Pallof press / Side plank",
      "Suitcase carry",
      "Cardio (8–12 min RPE 6–7)",
    ],
  },
  history: IMPORTED_HISTORY.length ? IMPORTED_HISTORY : [
    entry("2026-06-19", "Upper A", "Dead Bug (core)", "3*20", "7.5", "hold"),
    entry("2026-06-19", "Upper A", "Face Pull", "2*20", "50", "hold"),
    entry("2026-06-19", "Upper A", "Press inclinado con mancuernas", "4*10", "22.3", "hold"),
    entry("2026-06-19", "Upper A", "Jalón neutro / Dominadas", "4*8", "59", "hold"),
    entry("2026-06-19", "Upper A", "Press de pecho (máquina)", "3*12", "64", "hold"),
    entry("2026-06-19", "Upper A", "Remo sentado (cable)", "3*10", "64", "hold"),
    entry("2026-06-19", "Upper A", "Landmine press / Press hombro sentado", "3*15-11-12", "15", "hold"),
    entry("2026-06-23", "Upper B", "Jalón al pecho / Dominadas", "4*9-9-8-7", "59", "hold"),
    entry("2026-06-23", "Upper B", "Press plano con mancuernas", "3*10-10-8", "25", "hold"),
    entry("2026-06-23", "Upper B", "Fly (pec deck / DB fly / squeeze press)", "Máquina 45k", "", "hold"),
    entry("2026-06-23", "Upper B", "Elevaciones laterales", "3*12", "10", "hold"),
    entry("2026-06-23", "Upper B", "Pressdown", "", "41", "hold"),
    entry("2026-06-21", "Lower B", "Hip thrust (barra/máquina)", "4*12", "47.2", "hold"),
    entry("2026-06-21", "Lower B", "Cuádriceps (extensión / step-ups / prensa quad-bias)", "3*10", "32.7", "hold"),
    entry("2026-06-21", "Lower B", "Abductores (máquina)", "3*18", "32", "hold"),
    entry("2026-06-21", "Lower B", "Safety bar squad", "4*10", "15/lado", "hold"),
    entry("2026-06-24", "Lower A", "Squat safety bar", "4*10", "15", "hold"),
    entry("2026-06-04", "Lower A", "Goblet squat", "3*15", "28", "hold"),
  ],
  exerciseStats: {
    "Abductores (máquina)": { date: "2026-06-21", reps: "3*18", weight: "32", best: 32 },
    "Bulgarian split squat": { date: "2026-06-01", reps: "2*10", weight: "15", best: 16 },
    "Curl bíceps (opcional)": { date: "2026-02-24", reps: "3*10", weight: "8", best: 10 },
    "Curl femoral (máquina)": { date: "2026-06-01", reps: "3*10", weight: "", best: 41 },
    "Cuádriceps (extensión / step-ups / prensa quad-bias)": { date: "2026-06-21", reps: "3*10", weight: "32.7", best: 32.7 },
    "Dead Bug (core)": { date: "2026-06-19", reps: "3*20", weight: "7.5", best: 7.5 },
    "Dumbbell Single Arm Row": { date: "2026-05-01", reps: "3*15", weight: "17.5", best: 20 },
    "Elevaciones laterales": { date: "2026-06-23", reps: "3*12", weight: "10", best: 10 },
    "Face Pull": { date: "2026-06-19", reps: "2*20", weight: "50", best: 50 },
    "Fly (pec deck / DB fly / squeeze press)": { date: "2026-06-23", reps: "Máquina 45k", weight: "", best: 15.85 },
    "Gemelos (variación disponible)": { date: "2026-06-01", reps: "Pendiente", weight: "", best: 66 },
    "Glute bridge (calentamiento)": { date: "2026-05-01", reps: "3*15", weight: "20", best: 20 },
    "Goblet squat": { date: "2026-06-04", reps: "3*15", weight: "28", best: 28 },
    "Hip thrust (barra/máquina)": { date: "2026-06-21", reps: "4*12", weight: "47.2", best: 47.2 },
    "Jalón al pecho / Dominadas": { date: "2026-06-23", reps: "4*9-9-8-7", weight: "59", best: 59 },
    "Jalón neutro / Dominadas": { date: "2026-06-19", reps: "4*8", weight: "59", best: 59 },
    "Kickback mancuerna": { date: "2026-05-31", reps: "2*12", weight: "7.5", best: 7.5 },
    "Landmine press / Press hombro sentado": { date: "2026-06-19", reps: "3*15-11-12", weight: "15", best: 41 },
    "Pallof press": { date: "2026-05-25", reps: "Side plank", weight: "", best: 25 },
    "Pallof press / Side plank": { date: "2026-05-17", reps: "3*15", weight: "25", best: 32 },
    "Peso muerto rumano con mancuernas (RDL)": { date: "2026-06-01", reps: "2*12", weight: "", best: 27.5 },
    "Prensa de pierna": { date: "2026-06-01", reps: "3*11", weight: "73", best: 73 },
    "Press de pecho (máquina)": { date: "2026-06-19", reps: "3*12", weight: "64", best: 64 },
    "Press inclinado con mancuernas": { date: "2026-06-19", reps: "4*10", weight: "22.3", best: 22.3 },
    "Press plano con mancuernas": { date: "2026-06-23", reps: "3*10-10-8", weight: "25", best: 25 },
    "Pressdown": { date: "2026-06-23", reps: "", weight: "41", best: 41 },
    "Remo sentado (cable)": { date: "2026-06-19", reps: "3*10", weight: "64", best: 64 },
    "Remo sentado (máquina/cable)": { date: "2026-05-01", reps: "-", weight: "", best: 64 },
    "Safety bar squad": { date: "2026-06-21", reps: "4*10", weight: "15/lado", best: "" },
    "Sentadilla goblet / Smith squat": { date: "2026-05-01", reps: "3*15", weight: "28", best: 28 },
    "Squat safety bar": { date: "2026-06-24", reps: "4*10", weight: "15", best: 15 },
    "Suitcase carry": { date: "2026-05-17", reps: "Side plank 45segs", weight: "", best: 20 },
  },
  metrics: [
    { date: "2026-01-06", weight: 74.35, waist: "" },
    { date: "2026-01-17", weight: 73.85, waist: 87 },
    { date: "2026-01-22", weight: 73.5, waist: 88 },
    { date: "2026-02-07", weight: 74.6, waist: "" },
    { date: "2026-02-14", weight: 74, waist: "" },
    { date: "2026-02-20", weight: 73.1, waist: "" },
    { date: "2026-02-21", weight: 73.25, waist: "" },
    { date: "2026-02-22", weight: 74.8, waist: "" },
    { date: "2026-02-27", weight: 73.25, waist: "" },
    { date: "2026-02-28", weight: 74.1, waist: "" },
    { date: "2026-03-01", weight: 74.85, waist: "" },
  ],
};

let state = loadState();
let currentRoutine = state.lastRoutine && state.routines[state.lastRoutine] ? state.lastRoutine : Object.keys(state.routines)[0];
const drafts = new Map();
let sessionExercises = [];
let draftSaveTimer;
let sessionAddMode = "today";

const els = {
  screenTitle: document.querySelector("#screenTitle"),
  routineStrip: document.querySelector("#routineStrip"),
  routineSelect: document.querySelector("#routineSelect"),
  sessionDate: document.querySelector("#sessionDate"),
  sessionDuration: document.querySelector("#sessionDuration"),
  sessionNotes: document.querySelector("#sessionNotes"),
  sessionCount: document.querySelector("#sessionCount"),
  exerciseList: document.querySelector("#exerciseList"),
  template: document.querySelector("#exerciseCardTemplate"),
  saveSessionButton: document.querySelector("#saveSessionButton"),
  sessionExerciseInput: document.querySelector("#sessionExerciseInput"),
  addForTodayButton: document.querySelector("#addForTodayButton"),
  addToRoutineButton: document.querySelector("#addToRoutineButton"),
  addSessionExerciseButton: document.querySelector("#addSessionExerciseButton"),
  historySearch: document.querySelector("#historySearch"),
  historyList: document.querySelector("#historyList"),
  metricDate: document.querySelector("#metricDate"),
  bodyWeightInput: document.querySelector("#bodyWeightInput"),
  waistInput: document.querySelector("#waistInput"),
  saveMetricButton: document.querySelector("#saveMetricButton"),
  metricList: document.querySelector("#metricList"),
  bodyChart: document.querySelector("#bodyChart"),
  exportCsvButton: document.querySelector("#exportCsvButton"),
  exportJsonButton: document.querySelector("#exportJsonButton"),
  importJsonInput: document.querySelector("#importJsonInput"),
  dumbbellStep: document.querySelector("#dumbbellStep"),
  machineStep: document.querySelector("#machineStep"),
  emailSummaryEnabled: document.querySelector("#emailSummaryEnabled"),
  exerciseModal: document.querySelector("#exerciseModal"),
  modalTitle: document.querySelector("#modalTitle"),
  exerciseTimeline: document.querySelector("#exerciseTimeline"),
  newRoutineInput: document.querySelector("#newRoutineInput"),
  createRoutineButton: document.querySelector("#createRoutineButton"),
  routineManagerList: document.querySelector("#routineManagerList"),
  toast: document.querySelector("#toast"),
};

init();

function init() {
  restoreSessionDraft();
  els.sessionDate.value ||= today();
  els.metricDate.value = today();
  els.dumbbellStep.value = state.settings.dumbbellStep;
  els.machineStep.value = state.settings.machineStep;
  els.emailSummaryEnabled.checked = Boolean(state.settings.emailSummaryEnabled);

  renderRoutineControls();
  renderWorkout();
  renderHistory();
  renderMetrics();
  renderRoutineManager();
  bindEvents();
}

function entry(date, routine, exercise, reps, weight, decision, notes = "", extras = {}) {
  return { id: crypto.randomUUID(), date, routine, exercise, reps, weight, decision, notes, ...extras };
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(seed);
  try {
    const parsed = JSON.parse(stored);
    const merged = {
      ...structuredClone(seed),
      ...parsed,
      settings: { ...seed.settings, ...(parsed.settings || {}) },
    };
    if (parsed.seedVersion !== SEED_VERSION) {
      merged.history = mergeHistory(parsed.history || [], seed.history || []);
      merged.seedVersion = SEED_VERSION;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    }
    return merged;
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  state.seedVersion = SEED_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function persistCurrentRoutine() {
  state.lastRoutine = currentRoutine;
  saveState();
}

function mergeHistory(userHistory, importedHistory) {
  const seen = new Set();
  return [...userHistory, ...importedHistory]
    .filter((item) => {
      const key = historyKey(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function historyKey(item) {
  return [item.date, item.routine, item.exercise, item.reps, item.weight, item.notes]
    .map((value) => String(value || "").trim().toLowerCase())
    .join("|");
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  els.routineSelect.addEventListener("change", () => {
    currentRoutine = els.routineSelect.value;
    persistCurrentRoutine();
    saveSessionDraft();
    renderRoutineControls();
    renderWorkout();
  });

  els.sessionDate.addEventListener("change", saveSessionDraft);
  els.sessionDuration.addEventListener("input", saveSessionDraft);
  els.sessionNotes.addEventListener("input", saveSessionDraft);
  els.saveSessionButton.addEventListener("click", saveSession);
  els.addForTodayButton.addEventListener("click", () => setSessionAddMode("today"));
  els.addToRoutineButton.addEventListener("click", () => setSessionAddMode("routine"));
  els.addSessionExerciseButton.addEventListener("click", addSessionExercise);
  els.sessionExerciseInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addSessionExercise();
  });
  els.historySearch.addEventListener("input", renderHistory);
  els.saveMetricButton.addEventListener("click", saveMetric);
  els.exportCsvButton.addEventListener("click", exportCsv);
  els.exportJsonButton.addEventListener("click", exportJson);
  els.importJsonInput.addEventListener("change", importJson);
  els.createRoutineButton.addEventListener("click", createRoutine);
  els.newRoutineInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") createRoutine();
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeExerciseModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeExerciseModal();
  });

  [els.dumbbellStep, els.machineStep].forEach((input) => {
    input.addEventListener("change", () => {
      state.settings.dumbbellStep = toNumber(els.dumbbellStep.value) || seed.settings.dumbbellStep;
      state.settings.machineStep = toNumber(els.machineStep.value) || seed.settings.machineStep;
      saveState();
      renderWorkout();
    });
  });

  els.emailSummaryEnabled.addEventListener("change", () => {
    state.settings.emailSummaryEnabled = els.emailSummaryEnabled.checked;
    saveState();
  });
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === viewId));
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewId));
  const titles = {
    workoutView: "Entreno",
    historyView: "Historial",
    progressView: "Progreso",
    routinesView: "Rutinas",
    settingsView: "Ajustes",
  };
  els.screenTitle.textContent = titles[viewId];
  if (viewId === "progressView") drawChart();
}

function renderRoutineControls() {
  const routines = Object.keys(state.routines);
  els.routineStrip.innerHTML = "";
  els.routineSelect.innerHTML = "";

  routines.forEach((routine) => {
    const option = document.createElement("option");
    option.value = routine;
    option.textContent = routine;
    els.routineSelect.append(option);

    const chip = document.createElement("button");
    chip.className = `routine-chip${routine === currentRoutine ? " is-active" : ""}`;
    chip.type = "button";
    const latestDate = getLatestRoutineDate(routine);
    const exerciseCount = state.routines[routine].length;
    chip.innerHTML = `
      <strong>${escapeHtml(routine)}</strong>
      <span>${latestDate ? `Última ${formatShortDate(latestDate)}` : "Sin registros"}</span>
      <small>${exerciseCount} ${exerciseCount === 1 ? "ejercicio" : "ejercicios"}</small>
    `;
    chip.addEventListener("click", () => {
      currentRoutine = routine;
      els.routineSelect.value = routine;
      persistCurrentRoutine();
      saveSessionDraft();
      renderRoutineControls();
      renderWorkout();
    });
    els.routineStrip.append(chip);
  });

  els.routineSelect.value = currentRoutine;
}

function getLatestRoutineDate(routine) {
  return state.history
    .filter((item) => item.routine === routine && item.date)
    .map((item) => item.date)
    .sort((a, b) => b.localeCompare(a))[0];
}

function renderWorkout() {
  els.exerciseList.innerHTML = "";
  const exercises = getWorkoutExercises();

  exercises.forEach((exercise, index) => {
    const card = els.template.content.firstElementChild.cloneNode(true);
    const latest = getLatest(exercise);
    const best = getBest(exercise);
    const suggestion = getSuggestion(exercise);
    const draft = drafts.get(exercise) || {};
    const sets = getDraftSets(draft, latest);
    const completed = isExerciseComplete(draft);

    card.classList.toggle("is-open", index === 0);
    card.classList.toggle("is-complete", completed);
    card.dataset.exercise = exercise;
    card.querySelector(".exercise-name").textContent = exercise;
    card.querySelector(".exercise-stats").textContent = getExerciseCardStats(draft, latest);
    card.querySelector(".last-pill").textContent = latest ? `Último ${latest.weight || "-"} kg` : "Sin último peso";
    card.querySelector(".best-pill").textContent = best ? `Mejor ${best} kg` : "Sin mejor peso";
    card.querySelector(".suggest-pill").textContent = suggestion ? `Sugerido ${suggestion} kg` : "Sin sugerencia";
    const weightInput = card.querySelector(".weight-input");
    weightInput.value = draft.weight || "";
    weightInput.placeholder = suggestion ? `Sugerido ${suggestion} kg` : latest?.weight ? `Último ${latest.weight} kg` : "kg";
    card.querySelector(".notes-input").value = draft.notes || "";
    renderSetInputs(card, exercise, sets);
    renderPreviousSummary(card, latest);
    renderLegacyReps(card, draft);
    card.querySelector(".history-button").addEventListener("click", () => openExerciseModal(exercise));
    card.querySelector(".copy-previous-button").disabled = !latest;
    card.querySelector(".copy-previous-button").addEventListener("click", () => copyPreviousWorkout(exercise, latest));
    card.querySelector(".add-set-button").addEventListener("click", () => addSet(exercise, latest));
    card.querySelector(".remove-set-button").addEventListener("click", () => removeSet(exercise, latest));

    const selectedDecision = draft.decision || "hold";
    card.querySelectorAll(".decision-button").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.decision === selectedDecision);
      button.addEventListener("click", () => {
        updateDraft(exercise, { decision: button.dataset.decision, completed: true });
        card.classList.add("is-complete");
        card.querySelector(".exercise-stats").textContent = getExerciseCardStats(
          { ...(drafts.get(exercise) || {}), decision: button.dataset.decision, completed: true },
          latest,
        );
        card.querySelectorAll(".decision-button").forEach((item) => item.classList.remove("is-selected"));
        button.classList.add("is-selected");
      });
    });

    card.querySelector(".exercise-head").addEventListener("click", () => card.classList.toggle("is-open"));
    weightInput.addEventListener("input", (event) => updateDraft(exercise, { weight: event.target.value }));
    card.querySelector(".notes-input").addEventListener("input", (event) => updateDraft(exercise, { notes: event.target.value }));
    els.exerciseList.append(card);
  });

  updateSessionCount();
}

function getWorkoutExercises() {
  return uniqueExercises([...(state.routines[currentRoutine] || []), ...sessionExercises]);
}

function getExerciseCardStats(draft, latest) {
  if (isExerciseComplete(draft)) {
    const reps = formatDraftReps(draft);
    const weight = clean(draft.weight);
    const values = [reps, weight ? `${weight} kg` : "", decisionText(draft.decision)].filter(Boolean);
    return `✅ Completado${values.length ? ` · ${values.join(" · ")}` : ""}`;
  }
  return latest
    ? `${latest.date} · ${formatHistoryReps(latest) || "sin reps"} · ${latest.weight || "sin peso"}`
    : "Sin registros previos";
}

function renderSetInputs(card, exercise, sets) {
  const list = card.querySelector(".sets-list");
  list.innerHTML = "";
  sets.forEach((set, index) => {
    const label = document.createElement("label");
    label.className = "set-reps-row";
    label.innerHTML = `
      <span>Serie ${index + 1} reps</span>
      <input class="set-reps-input" inputmode="numeric" value="${escapeHtml(set.reps || "")}" />
    `;
    label.querySelector(".set-reps-input").addEventListener("input", (event) => {
      updateSetReps(exercise, index, event.target.value);
    });
    list.append(label);
  });
  card.querySelector(".remove-set-button").disabled = sets.length <= 1;
}

function renderPreviousSummary(card, latest) {
  const summary = card.querySelector(".previous-summary");
  if (!latest) {
    summary.textContent = "Sin registro anterior para copiar.";
    return;
  }
  const parts = [
    formatShortDate(latest.date),
    latest.weight ? `${latest.weight} kg` : "sin peso",
    formatHistoryReps(latest) || "sin reps",
  ];
  summary.innerHTML = `
    <strong>Anterior:</strong> ${escapeHtml(parts.join(" · "))}
    ${latest.notes ? `<small>${escapeHtml(latest.notes)}</small>` : ""}
  `;
}

function renderLegacyReps(card, draft) {
  const legacy = clean(draft.legacyReps);
  const box = card.querySelector(".legacy-reps");
  box.hidden = !legacy;
  box.innerHTML = legacy ? `<strong>Reps anteriores sin separar:</strong> ${escapeHtml(legacy)}` : "";
}

function getDraftSets(draft, latest) {
  if (Array.isArray(draft.sets) && draft.sets.length) return normalizeSets(draft.sets);
  const previousSets = getHistorySets(latest);
  if (previousSets.length) return createEmptySets(previousSets.length);
  return createEmptySets(3);
}

function normalizeSets(sets) {
  return sets
    .map((set) => (typeof set === "object" ? { reps: clean(set.reps) } : { reps: clean(set) }))
    .filter((set, index) => index === 0 || set.reps || sets.length <= 6);
}

function createEmptySets(count) {
  return Array.from({ length: Math.max(1, count) }, () => ({ reps: "" }));
}

function updateSetReps(exercise, index, value) {
  const draft = drafts.get(exercise) || { decision: "hold" };
  const latest = getLatest(exercise);
  const sets = getDraftSets(draft, latest);
  sets[index] = { reps: value };
  updateDraft(exercise, { sets, reps: formatSetsReps(sets), legacyReps: "" });
}

function addSet(exercise, latest) {
  const draft = drafts.get(exercise) || { decision: "hold" };
  updateDraft(exercise, { sets: [...getDraftSets(draft, latest), { reps: "" }] });
  renderWorkout();
}

function removeSet(exercise, latest) {
  const draft = drafts.get(exercise) || { decision: "hold" };
  const sets = getDraftSets(draft, latest);
  if (sets.length <= 1) return;
  const nextSets = sets.slice(0, -1);
  updateDraft(exercise, { sets: nextSets, reps: formatSetsReps(nextSets) });
  renderWorkout();
}

function copyPreviousWorkout(exercise, latest) {
  if (!latest) return;
  const draft = drafts.get(exercise) || {};
  if (hasWorkoutInput(draft) || draft.decision !== undefined || isExerciseComplete(draft)) {
    showToast("Borra este ejercicio antes de copiar el anterior");
    return;
  }
  const previousSets = getHistorySets(latest);
  const patch = {
    weight: clean(latest.weight),
    notes: clean(latest.notes),
    sets: previousSets.length ? previousSets : createEmptySets(3),
    reps: previousSets.length ? formatSetsReps(previousSets) : "",
    legacyReps: previousSets.length ? "" : clean(latest.reps),
    decision: "hold",
  };
  drafts.set(exercise, patch);
  saveSessionDraft();
  renderWorkout();
  showToast("Anterior copiado");
}

function setSessionAddMode(mode) {
  sessionAddMode = mode;
  els.addForTodayButton.classList.toggle("is-selected", mode === "today");
  els.addToRoutineButton.classList.toggle("is-selected", mode === "routine");
}

function addSessionExercise() {
  const exercise = cleanExerciseName(els.sessionExerciseInput.value);
  if (!exercise) {
    showToast("Escribe un ejercicio");
    return;
  }
  const baseExercises = state.routines[currentRoutine] || [];
  if (getWorkoutExercises().some((item) => sameName(item, exercise))) {
    showToast("Ese ejercicio ya está en la sesión");
    return;
  }

  if (sessionAddMode === "routine") {
    state.routines[currentRoutine] = [...baseExercises, exercise];
    saveState();
    renderRoutineControls();
    renderRoutineManager();
  } else {
    sessionExercises = uniqueExercises([...sessionExercises, exercise]);
    saveSessionDraft();
  }

  els.sessionExerciseInput.value = "";
  renderWorkout();
  showToast(sessionAddMode === "routine" ? "Ejercicio guardado en rutina" : "Ejercicio añadido");
}

function createRoutine() {
  const routine = cleanExerciseName(els.newRoutineInput.value);
  if (!routine) {
    showToast("Escribe una rutina");
    return;
  }
  if (state.routines[routine]) {
    showToast("Esa rutina ya existe");
    return;
  }
  state.routines[routine] = [];
  currentRoutine = routine;
  persistCurrentRoutine();
  els.newRoutineInput.value = "";
  saveState();
  saveSessionDraft();
  renderRoutineControls();
  renderWorkout();
  renderRoutineManager();
  showToast("Rutina creada");
}

function renderRoutineManager() {
  els.routineManagerList.innerHTML = "";
  Object.entries(state.routines).forEach(([routine, exercises]) => {
    const card = document.createElement("article");
    card.className = "routine-manager-card";
    card.dataset.routine = routine;

    const head = document.createElement("div");
    head.className = "routine-manager-head";

    const nameInput = document.createElement("input");
    nameInput.value = routine;
    nameInput.setAttribute("aria-label", `Nombre de ${routine}`);
    nameInput.addEventListener("change", () => renameRoutine(routine, nameInput.value));

    const deleteButton = document.createElement("button");
    deleteButton.className = "small-icon-button";
    deleteButton.type = "button";
    deleteButton.title = "Eliminar rutina";
    deleteButton.setAttribute("aria-label", `Eliminar ${routine}`);
    deleteButton.textContent = "×";
    deleteButton.addEventListener("click", () => deleteRoutine(routine));

    head.append(nameInput, deleteButton);
    card.append(head);

    const list = document.createElement("div");
    list.className = "routine-exercise-list";
    exercises.forEach((exercise) => {
      const row = document.createElement("div");
      row.className = "routine-exercise-row";
      row.innerHTML = `<span>${escapeHtml(exercise)}</span>`;
      const removeButton = document.createElement("button");
      removeButton.className = "small-icon-button";
      removeButton.type = "button";
      removeButton.title = "Quitar ejercicio";
      removeButton.setAttribute("aria-label", `Quitar ${exercise}`);
      removeButton.textContent = "×";
      removeButton.addEventListener("click", () => removeExerciseFromRoutine(routine, exercise));
      row.append(removeButton);
      list.append(row);
    });
    card.append(list);

    const addRow = document.createElement("div");
    addRow.className = "routine-add-row";
    const input = document.createElement("input");
    input.placeholder = "Añadir ejercicio";
    const addButton = document.createElement("button");
    addButton.className = "secondary-button";
    addButton.type = "button";
    addButton.textContent = "Añadir";
    const add = () => addExerciseToRoutine(routine, input);
    addButton.addEventListener("click", add);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") add();
    });
    addRow.append(input, addButton);
    card.append(addRow);

    els.routineManagerList.append(card);
  });
}

function renameRoutine(oldName, rawName) {
  const newName = cleanExerciseName(rawName);
  if (!newName || newName === oldName) {
    renderRoutineManager();
    return;
  }
  if (state.routines[newName]) {
    showToast("Esa rutina ya existe");
    renderRoutineManager();
    return;
  }
  const nextRoutines = {};
  Object.entries(state.routines).forEach(([routine, exercises]) => {
    nextRoutines[routine === oldName ? newName : routine] = exercises;
  });
  state.routines = nextRoutines;
  if (currentRoutine === oldName) currentRoutine = newName;
  persistCurrentRoutine();
  saveState();
  saveSessionDraft();
  renderRoutineControls();
  renderWorkout();
  renderRoutineManager();
  showToast("Rutina renombrada");
}

function deleteRoutine(routine) {
  if (Object.keys(state.routines).length <= 1) {
    showToast("Debe quedar una rutina");
    return;
  }
  delete state.routines[routine];
  if (currentRoutine === routine) currentRoutine = Object.keys(state.routines)[0];
  persistCurrentRoutine();
  saveState();
  saveSessionDraft();
  renderRoutineControls();
  renderWorkout();
  renderRoutineManager();
  showToast("Rutina eliminada");
}

function addExerciseToRoutine(routine, input) {
  const exercise = cleanExerciseName(input.value);
  if (!exercise) return;
  if ((state.routines[routine] || []).some((item) => sameName(item, exercise))) {
    showToast("Ese ejercicio ya existe");
    return;
  }
  state.routines[routine] = [...(state.routines[routine] || []), exercise];
  input.value = "";
  saveState();
  if (routine === currentRoutine) renderWorkout();
  renderRoutineControls();
  renderRoutineManager();
  showToast("Ejercicio añadido");
}

function removeExerciseFromRoutine(routine, exercise) {
  state.routines[routine] = (state.routines[routine] || []).filter((item) => item !== exercise);
  saveState();
  if (routine === currentRoutine) renderWorkout();
  renderRoutineControls();
  renderRoutineManager();
}

function updateDraft(exercise, patch) {
  drafts.set(exercise, { ...(drafts.get(exercise) || { decision: "hold" }), ...patch });
  updateSessionCount();
  saveSessionDraft();
}

function updateSessionCount() {
  const count = Array.from(drafts.values()).filter((draft) => isExerciseComplete(draft)).length;
  els.sessionCount.textContent = count;
}

function hasWorkoutInput(draft) {
  const hasSetReps = Array.isArray(draft.sets) && draft.sets.some((set) => clean(set?.reps || set));
  return hasSetReps || [draft.reps, draft.legacyReps, draft.weight, draft.notes].some((value) => clean(value));
}

function isExerciseComplete(draft) {
  return draft?.completed === true;
}

function restoreSessionDraft() {
  try {
    const stored = JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}");
    if (!stored || typeof stored !== "object") return;
    if (stored.routine && state.routines[stored.routine]) currentRoutine = stored.routine;
    if (stored.date) els.sessionDate.value = stored.date;
    if (stored.duration) els.sessionDuration.value = stored.duration;
    if (stored.sessionNotes) els.sessionNotes.value = stored.sessionNotes;
    sessionExercises = Array.isArray(stored.sessionExercises) ? uniqueExercises(stored.sessionExercises) : [];
    Object.entries(stored.drafts || {}).forEach(([exercise, draft]) => {
      if (draft && typeof draft === "object") drafts.set(exercise, draft);
    });
  } catch {
    localStorage.removeItem(DRAFT_KEY);
  }
}

function saveSessionDraft() {
  window.clearTimeout(draftSaveTimer);
  draftSaveTimer = window.setTimeout(() => {
    const draftEntries = Object.fromEntries(
      Array.from(drafts.entries()).filter(
        ([, draft]) => hasWorkoutInput(draft) || draft.decision !== "hold" || isExerciseComplete(draft),
      ),
    );
    const duration = clean(els.sessionDuration.value);
    const sessionNotes = clean(els.sessionNotes.value);
    if (!Object.keys(draftEntries).length && !sessionExercises.length && !duration && !sessionNotes) {
      localStorage.removeItem(DRAFT_KEY);
      return;
    }
    localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({
        date: els.sessionDate.value || today(),
        routine: currentRoutine,
        duration,
        sessionNotes,
        sessionExercises,
        drafts: draftEntries,
        updatedAt: new Date().toISOString(),
      }),
    );
  }, 150);
}

function clearSessionDraft() {
  window.clearTimeout(draftSaveTimer);
  localStorage.removeItem(DRAFT_KEY);
}

function saveSession() {
  const sessionDate = els.sessionDate.value || today();
  const sessionDuration = clean(els.sessionDuration.value);
  const sessionNotes = clean(els.sessionNotes.value);
  const rows = Array.from(drafts.entries())
    .map(([exercise, draft]) => ({ exercise, draft }))
    .filter(({ draft }) => hasWorkoutInput(draft));

  if (!rows.length) {
    showToast("Añade reps, peso o notas antes de guardar");
    return;
  }

  const savedRows = rows.map(({ exercise, draft }) => {
    const sets = normalizeSets(draft.sets || []).filter((set) => clean(set.reps));
    const reps = sets.length ? formatSetsReps(sets) : clean(draft.reps || draft.legacyReps);
    return entry(
      sessionDate,
      currentRoutine,
      exercise,
      reps,
      clean(draft.weight),
      draft.decision || "hold",
      clean(draft.notes),
      {
        sets,
        legacyReps: sets.length ? clean(draft.legacyReps) : clean(draft.legacyReps || draft.reps),
        sessionDuration,
        sessionNotes,
      },
    );
  });

  savedRows.forEach((row) => {
    state.history.unshift(row);
  });

  const summary = buildWorkoutSummary(savedRows, {
    routine: currentRoutine,
    date: sessionDate,
    duration: sessionDuration,
    sessionNotes,
  });

  drafts.clear();
  sessionExercises = [];
  els.sessionDuration.value = "";
  els.sessionNotes.value = "";
  clearSessionDraft();
  saveState();
  renderWorkout();
  renderHistory();
  showToast("Entreno guardado");
  maybeOpenEmailSummary(summary, currentRoutine, sessionDate);
}

function renderHistory() {
  const query = els.historySearch.value.trim().toLowerCase();
  els.historyList.innerHTML = "";
  const items = state.history
    .filter((item) => !query || `${item.exercise} ${item.routine} ${item.date}`.toLowerCase().includes(query))
    .slice(0, 120);

  if (!items.length) {
    els.historyList.innerHTML = `<div class="history-item">No hay registros con esa búsqueda.</div>`;
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "history-item";
    row.innerHTML = `
      <div class="history-top">
        <span>
          <strong>${escapeHtml(item.exercise)}</strong>
          <small>${escapeHtml(item.date)} · ${escapeHtml(item.routine)}</small>
        </span>
        <span class="status-badge status-${item.decision || "hold"}">${decisionText(item.decision)}</span>
      </div>
      <div class="history-detail">${escapeHtml(formatHistoryReps(item) || "-")} · ${escapeHtml(item.weight || "-")} kg${item.notes ? ` · ${escapeHtml(item.notes)}` : ""}</div>
    `;
    els.historyList.append(row);
  });
}

function openExerciseModal(exercise) {
  els.modalTitle.textContent = exercise;
  els.exerciseTimeline.innerHTML = "";
  const rows = getExerciseTimeline(exercise);

  if (!rows.length) {
    els.exerciseTimeline.innerHTML = `<div class="timeline-empty">Todavía no hay registros para este ejercicio.</div>`;
  } else {
    rows.forEach((item) => {
      const row = document.createElement("article");
      row.className = "timeline-row";
      row.innerHTML = `
        <div class="timeline-date">
          <strong>${escapeHtml(formatShortDate(item.date))}</strong>
          <span>${escapeHtml(item.routine || currentRoutine)}</span>
        </div>
        <div class="timeline-main">
          <strong>${escapeHtml(formatWeight(item.weight))}</strong>
          <span>${escapeHtml(formatHistoryReps(item) || "-")}</span>
          ${item.legacyReps ? `<small>Reps antiguas: ${escapeHtml(item.legacyReps)}</small>` : ""}
          ${item.notes ? `<small>${escapeHtml(item.notes)}</small>` : ""}
        </div>
        <span class="status-badge status-${item.decision || "hold"}">${decisionText(item.decision)}</span>
      `;
      els.exerciseTimeline.append(row);
    });
  }

  els.exerciseModal.classList.add("is-open");
  els.exerciseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeExerciseModal() {
  if (!els.exerciseModal.classList.contains("is-open")) return;
  els.exerciseModal.classList.remove("is-open");
  els.exerciseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function saveMetric() {
  const weight = toNumber(els.bodyWeightInput.value);
  const waist = toNumber(els.waistInput.value);
  if (!weight && !waist) {
    showToast("Añade peso corporal o cintura");
    return;
  }
  state.metrics.unshift({ date: els.metricDate.value || today(), weight: weight || "", waist: waist || "" });
  saveState();
  els.bodyWeightInput.value = "";
  els.waistInput.value = "";
  renderMetrics();
  showToast("Medida guardada");
}

function renderMetrics() {
  els.metricList.innerHTML = "";
  state.metrics
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .forEach((item) => {
      const row = document.createElement("article");
      row.className = "metric-item";
      row.innerHTML = `
        <strong>${escapeHtml(item.date)}</strong>
        <span>${item.weight ? `${item.weight} kg` : "-"} · ${item.waist ? `${item.waist} cm` : "-"}</span>
      `;
      els.metricList.append(row);
    });
  drawChart();
}

function drawChart() {
  const canvas = els.bodyChart;
  const ctx = canvas.getContext("2d");
  const data = state.metrics
    .filter((item) => item.weight)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (data.length < 2) {
    ctx.fillStyle = "#65706c";
    ctx.font = "28px sans-serif";
    ctx.fillText("Añade más medidas para ver tendencia", 40, 180);
    return;
  }

  const padding = 48;
  const values = data.map((item) => Number(item.weight));
  const min = Math.min(...values) - 0.5;
  const max = Math.max(...values) + 0.5;
  const width = canvas.width - padding * 2;
  const height = canvas.height - padding * 2;

  ctx.strokeStyle = "#d9ddd5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, padding + height);
  ctx.lineTo(padding + width, padding + height);
  ctx.stroke();

  ctx.strokeStyle = "#1f7a64";
  ctx.lineWidth = 5;
  ctx.beginPath();
  data.forEach((item, index) => {
    const x = padding + (index / (data.length - 1)) * width;
    const y = padding + height - ((Number(item.weight) - min) / (max - min)) * height;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  data.forEach((item, index) => {
    const x = padding + (index / (data.length - 1)) * width;
    const y = padding + height - ((Number(item.weight) - min) / (max - min)) * height;
    ctx.fillStyle = "#101313";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#65706c";
  ctx.font = "24px sans-serif";
  ctx.fillText(`${min.toFixed(1)} kg`, padding, padding + height + 32);
  ctx.fillText(`${max.toFixed(1)} kg`, padding, padding - 14);
}

function getLatest(exercise) {
  const latest = state.history
    .filter((item) => item.exercise === exercise)
    .sort((a, b) => b.date.localeCompare(a.date))[0];
  if (latest) return latest;
  const stat = state.exerciseStats?.[exercise];
  return stat ? { ...stat, exercise, routine: "" } : undefined;
}

function getExerciseTimeline(exercise) {
  const rows = state.history
    .filter((item) => item.exercise === exercise)
    .sort((a, b) => b.date.localeCompare(a.date));
  if (rows.length) return rows;
  const stat = state.exerciseStats?.[exercise];
  return stat ? [{ ...stat, exercise, routine: currentRoutine, decision: "hold", notes: "" }] : [];
}

function getBest(exercise) {
  const values = state.history
    .filter((item) => item.exercise === exercise)
    .map((item) => toNumber(item.weight))
    .filter(Boolean);
  const bestFromHistory = values.length ? Math.max(...values) : "";
  const bestFromSheet = state.exerciseStats?.[exercise]?.best;
  return Math.max(bestFromHistory || 0, Number(bestFromSheet) || 0) || "";
}

function getSuggestion(exercise) {
  const latest = getLatest(exercise);
  if (!latest || latest.decision !== "progress") return "";
  const weight = toNumber(latest.weight);
  if (!weight) return "";
  const step = /mancuerna|dumbbell|laterales|curl|kickback/i.test(exercise)
    ? Number(state.settings.dumbbellStep)
    : Number(state.settings.machineStep);
  return tidyNumber(weight + step);
}

function getHistorySets(item) {
  if (!item || !Array.isArray(item.sets)) return [];
  return normalizeSets(item.sets).filter((set) => clean(set.reps));
}

function formatDraftReps(draft) {
  const sets = normalizeSets(draft?.sets || []).filter((set) => clean(set.reps));
  if (sets.length) return formatSetsReps(sets);
  return clean(draft?.reps || draft?.legacyReps);
}

function formatHistoryReps(item) {
  const sets = getHistorySets(item);
  if (sets.length) return formatSetsReps(sets);
  return clean(item?.reps || item?.legacyReps);
}

function formatSetsReps(sets) {
  return normalizeSets(sets)
    .map((set) => clean(set.reps))
    .filter(Boolean)
    .join(" / ");
}

function buildWorkoutSummary(rows, session) {
  const header = [
    `${session.routine} · ${session.date}`,
    session.duration ? `Duración: ${session.duration} min` : "",
    session.sessionNotes ? `Notas generales: ${session.sessionNotes}` : "",
  ].filter(Boolean);
  const table = ["Ejercicio | Peso | Series | Reps | Notas"];
  rows.forEach((row) => {
    const sets = getHistorySets(row);
    table.push(
      [
        row.exercise,
        row.weight || "-",
        sets.length || "-",
        formatHistoryReps(row) || "-",
        row.notes || row.legacyReps || "-",
      ].join(" | "),
    );
  });
  const volume = estimateWorkoutVolume(rows);
  if (volume) header.push(`Volumen total estimado: ${tidyNumber(volume)} kg`);
  return [...header, "", ...table].join("\n");
}

function estimateWorkoutVolume(rows) {
  return rows.reduce((total, row) => {
    const weight = toNumber(row.weight);
    const reps = getHistorySets(row).reduce((sum, set) => sum + toNumber(set.reps), 0);
    return weight && reps ? total + weight * reps : total;
  }, 0);
}

function maybeOpenEmailSummary(body, routine, date) {
  if (!state.settings.emailSummaryEnabled) return;
  const subject = `${routine} · ${date}`;
  const mailto = `mailto:kelvinstarlin.feliz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (mailto.length < 1800) {
    window.location.href = mailto;
    return;
  }
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(body).then(
      () => showToast("Resumen muy largo: copiado al portapapeles"),
      () => showToast("Resumen muy largo: copia manual desde historial"),
    );
  } else {
    showToast("Resumen muy largo para abrir email");
  }
}

function exportCsv() {
  const headers = [
    "Fecha (YYYY-MM-DD)",
    "Rutina",
    "Ejercicio",
    "Serie (opcional)",
    "Series",
    "Reps",
    "Peso",
    "Notas",
    "Decision",
    "Reps antiguas",
    "Duracion",
    "Notas generales",
  ];
  const rows = state.history
    .slice()
    .reverse()
    .map((item) => {
      const sets = getHistorySets(item);
      return [
        item.date,
        item.routine,
        item.exercise,
        "",
        sets.length || "",
        formatHistoryReps(item),
        item.weight,
        item.notes,
        decisionText(item.decision),
        item.legacyReps || (!sets.length ? item.reps : ""),
        item.sessionDuration,
        item.sessionNotes,
      ];
    });
  download("registro-gym.csv", [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv");
}

function exportJson() {
  download("registro-gym-backup.json", JSON.stringify(state, null, 2), "application/json");
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = { ...structuredClone(seed), ...parsed, settings: { ...seed.settings, ...(parsed.settings || {}) } };
      currentRoutine = state.lastRoutine && state.routines[state.lastRoutine] ? state.lastRoutine : Object.keys(state.routines)[0];
      persistCurrentRoutine();
      els.dumbbellStep.value = state.settings.dumbbellStep;
      els.machineStep.value = state.settings.machineStep;
      els.emailSummaryEnabled.checked = Boolean(state.settings.emailSummaryEnabled);
      drafts.clear();
      sessionExercises = [];
      els.sessionDuration.value = "";
      els.sessionNotes.value = "";
      clearSessionDraft();
      renderRoutineControls();
      renderWorkout();
      renderHistory();
      renderMetrics();
      renderRoutineManager();
      showToast("Copia importada");
    } catch {
      showToast("No pude importar ese archivo");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value || "").replaceAll('"', '""')}"`;
}

function decisionText(decision) {
  return { progress: "Subir", hold: "Mantener", deload: "Bajar" }[decision] || "Mantener";
}

function clean(value) {
  return String(value || "").trim();
}

function cleanExerciseName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function sameName(a, b) {
  return cleanExerciseName(a).toLowerCase() === cleanExerciseName(b).toLowerCase();
}

function uniqueExercises(items) {
  const seen = new Set();
  return items.map(cleanExerciseName).filter((item) => {
    if (!item) return false;
    const key = item.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function toNumber(value) {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(",", ".").match(/-?\d+(\.\d+)?/);
  return normalized ? Number(normalized[0]) : 0;
}

function tidyNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function formatShortDate(value) {
  if (!value) return "-";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year.slice(2)}`;
}

function formatWeight(value) {
  const cleanValue = String(value || "").trim();
  return cleanValue ? `${cleanValue} kg` : "-";
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
