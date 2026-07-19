// Central manifest of what exists in the app. Question data itself lives in
// per-lesson JSON files under ./gradeXX/lessonY.json and is loaded lazily by
// lib/loadLesson.js — this file only describes the navigable structure.

export const SECTIONS = [
  { id: "vocabulary", label: "Vocabulary" },
  { id: "grammar", label: "Grammar" },
  { id: "reading", label: "Reading" },
  { id: "mixed", label: "Mixed" },
];

export const MODES = [
  { id: "konkur", label: "Full Konkur Mode", description: "Pure MCQ, single best answer" },
  { id: "final", label: "Full Final Mode", description: "Mixed formats, school year-final style" },
];

export const CURRICULUM = {
  10: {
    grade: 10,
    label: "Grade 10",
    book: "Vision 1",
    lessons: [
      { id: 1, title: "Saving Nature", ready: true },
      { id: 2, title: "Wonders of Creation", ready: true },
      { id: 3, title: "The Value of Knowledge", ready: true },
      { id: 4, title: "Traveling the World", ready: true },
    ],
  },
  11: {
    grade: 11,
    label: "Grade 11",
    book: "Vision 2",
    lessons: [
      { id: 1, title: "Lesson 1", ready: false },
      { id: 2, title: "Lesson 2", ready: false },
      { id: 3, title: "Lesson 3", ready: false },
    ],
  },
  12: {
    grade: 12,
    label: "Grade 12",
    book: "Vision 3",
    lessons: [
      { id: 1, title: "Lesson 1", ready: false },
      { id: 2, title: "Lesson 2", ready: false },
      { id: 3, title: "Lesson 3", ready: false },
    ],
  },
};

export function getGrades() {
  return Object.values(CURRICULUM);
}

export function getGrade(grade) {
  return CURRICULUM[grade];
}

export function getLesson(grade, lesson) {
  const g = CURRICULUM[grade];
  if (!g) return undefined;
  return g.lessons.find((l) => String(l.id) === String(lesson));
}
