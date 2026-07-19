# Vision English Practice

A practice app for Iranian high-school English (Vision 1/2/3, grades 10–12), built around two
question styles: **Konkur-style** (heavy MCQ) and **year-final-style** (mixed formats).

## Stack

- React + Vite
- React Router (real per-lesson/section URLs)
- Tailwind CSS v4 (notebook/schoolbook design tokens in `src/index.css`)
- Zustand (quiz session state + persisted per-section progress)
- Local JSON lesson data (`src/data/gradeXX/lessonY.json`)

## Getting started

```bash
npm install
npm run dev
```

## Project layout

```
src/
├── data/                  # curriculum.js manifest + per-lesson JSON question banks
├── components/
│   ├── QuestionCard/       # one renderer per question format + a format-dispatching index
│   ├── Sidebar.jsx          # grade → lesson → section syllabus nav with progress dots
│   ├── ProgressBar.jsx
│   ├── ResultsSummary.jsx
│   └── Layout.jsx            # sidebar + breadcrumb shell used by every route
├── pages/                 # Home, GradeOverview, LessonOverview, Quiz, Results
├── lib/
│   ├── loadLesson.js         # lazy-loads a lesson's JSON via import.meta.glob
│   ├── questionSelector.js   # applies the 80/20 konkur/final mix, shuffles, filters by section
│   └── grading.js            # auto-grades mcq/fill/transform/error-correction/matching
└── store/
    ├── quizStore.js           # in-memory current session (questions, responses, position)
    └── progressStore.js       # localStorage-persisted best/last score per grade+lesson+section
```

## Question data schema

Every question is one JSON object (see `src/data/grade10/lesson1.json` for a full set covering
every format). Key fields:

- `format`: `mcq | tf | fill | matching | transform | error-correction | reading | short-answer`
  (`tf` is a true/false question — rendered as a 2-option MCQ; `error-correction` questions may
  either carry `options` — rendered as MCQ — or omit them for free-text correction)
- `style`: `konkur` (single best-answer MCQ) or `final` (mixed formats, school year-final style)
- `section`: `vocabulary | grammar | reading | mixed`
- `answer`: string for `mcq`/`tf`/`fill`/`transform`/`error-correction`/`short-answer`; an array of
  `[left, right]` pairs for `matching`; for the nested `reading` format, each sub-question in
  `questions[]` carries its own `answer`
- `passage`: optional. Reading-comprehension questions can either use the nested `reading` format
  (one `passage` + several `questions[]`), or — as used in the Lesson 1 data — tag a flat
  `mcq`/`tf` question with its own `passage` field, repeated across every question drawn from the
  same text. `QuestionCard` renders whichever shape it finds.

Any `mcq`/`tf`/`error-correction` question with a non-null `options[]` array is always rendered as
multiple choice, regardless of its exact `format` value.

## Content status

All four Grade 10 lessons ship with full 100-question banks (400 questions total), each split 30
vocabulary / 50 grammar / 10 reading-comprehension / 10 mixed-review, 80 konkur-style / 20
final-style, matching the project brief's ratio. Every MCQ-style answer has been checked
programmatically against its `options[]`, and question IDs are confirmed unique across all four
files.

- Lesson 1 — Saving Nature (future tense: `will` / `going to`, error correction, wh-questions)
- Lesson 2 — Wonders of Creation (comparative/superlative adjectives, irregular forms, `as...as`)
- Lesson 3 — The Value of Knowledge (past progressive, reflexive pronouns, action vs. state verbs)
- Lesson 4 — Traveling the World (modals `can`/`may`/`must`/`should`, prepositions, adverbs of manner)

All of grades 11–12 are still stubbed as "coming soon" in `src/data/curriculum.js` and have no
question files yet.

## Adding a new lesson

1. Add the lesson's metadata (`id`, `title`, `ready: true`) to the right grade in
   `src/data/curriculum.js`.
2. Create `src/data/gradeXX/lessonY.json` as an array of questions matching the schema above.
3. It's picked up automatically — no other wiring needed.
