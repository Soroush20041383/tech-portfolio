import { loadLesson } from "./loadLesson";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Builds a fresh practice session: filters by section, then mixes
 * konkur-style / final-style questions at the given ratio and shuffles.
 *
 * mode: "konkur" | "final" forces a single style regardless of mix (used by
 * "Full Konkur Mode" / "Full Final Mode").
 */
export function selectQuestions({
  grade,
  lesson,
  section = "mixed",
  count,
  mix = { konkur: 0.8, final: 0.2 },
  mode,
}) {
  const all = loadLesson(grade, lesson);
  const bySection =
    section === "mixed" || section === "all" ? all : all.filter((q) => q.section === section);

  if (mode === "konkur" || mode === "final") {
    const pool = shuffle(bySection.filter((q) => q.style === mode));
    return count ? pool.slice(0, count) : pool;
  }

  const konkurPool = shuffle(bySection.filter((q) => q.style === "konkur"));
  const finalPool = shuffle(bySection.filter((q) => q.style === "final"));
  const total = count ?? bySection.length;
  const konkurCount = Math.round(total * mix.konkur);
  const finalCount = total - konkurCount;

  const selected = [
    ...konkurPool.slice(0, konkurCount),
    ...finalPool.slice(0, finalCount),
  ];

  const shortfall = total - selected.length;
  if (shortfall > 0) {
    const usedIds = new Set(selected.map((q) => q.id));
    const leftovers = shuffle(bySection.filter((q) => !usedIds.has(q.id)));
    selected.push(...leftovers.slice(0, shortfall));
  }

  return shuffle(selected);
}
