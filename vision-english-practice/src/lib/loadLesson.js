const lessonModules = import.meta.glob("../data/grade*/lesson*.json", { eager: true });

/** Returns the raw question array for a grade/lesson, or [] if not authored yet. */
export function loadLesson(grade, lesson) {
  const key = Object.keys(lessonModules).find((path) =>
    path.endsWith(`/grade${grade}/lesson${lesson}.json`)
  );
  if (!key) return [];
  const mod = lessonModules[key];
  return mod.default ?? mod;
}
