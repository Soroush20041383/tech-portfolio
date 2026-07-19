import { useEffect } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { selectQuestions } from "../lib/questionSelector";
import { gradeSession } from "../lib/grading";
import { useQuizStore } from "../store/quizStore";
import { useProgressStore } from "../store/progressStore";
import { getLesson } from "../data/curriculum";

const DEFAULT_COUNT = 10;

export default function Quiz() {
  const { grade, lesson, section } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const navigate = useNavigate();
  const location = useLocation();
  const recordResult = useProgressStore((s) => s.recordResult);

  const sessionKey = useQuizStore((s) => s.sessionKey);
  const questions = useQuizStore((s) => s.questions);
  const responses = useQuizStore((s) => s.responses);
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const startSession = useQuizStore((s) => s.startSession);
  const answer = useQuizStore((s) => s.answer);
  const next = useQuizStore((s) => s.next);
  const prev = useQuizStore((s) => s.prev);
  const goTo = useQuizStore((s) => s.goTo);

  // location.key is unique per navigation entry, so revisiting the same
  // grade/lesson/section (e.g. via "Practice again") always starts a fresh,
  // freshly-shuffled session instead of reusing a finished one.
  const key = `${grade}-${lesson}-${section}-${mode ?? "mix"}-${location.key}`;

  useEffect(() => {
    if (sessionKey !== key) {
      const selected = selectQuestions({
        grade,
        lesson,
        section,
        count: mode ? undefined : DEFAULT_COUNT,
        mode: mode ?? undefined,
      });
      startSession(key, selected);
    }
  }, [key, sessionKey, grade, lesson, section, mode, location.key, startSession]);

  const lessonInfo = getLesson(grade, lesson);
  const current = questions[currentIndex];
  const answeredCount = Object.keys(responses).length;

  const handleSubmit = () => {
    const result = gradeSession(questions, responses);
    recordResult(grade, lesson, section, result.scorePercent);
    navigate(`/grade/${grade}/lesson/${lesson}/${section}/results`, { state: { result } });
  };

  if (!lessonInfo) return <p className="text-ink-soft">Lesson not found.</p>;
  if (sessionKey !== key) return null;
  if (questions.length === 0) {
    return <p className="text-ink-soft">No questions are authored for this section yet.</p>;
  }
  if (!current) return null;

  const isLast = currentIndex === questions.length - 1;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-ink-soft">
          Lesson {lessonInfo.id}: {lessonInfo.title}
          {mode && ` · Full ${mode === "konkur" ? "Konkur" : "Final"} Mode`}
        </p>
        <ProgressBar percent={(answeredCount / questions.length) * 100} />
      </div>

      <QuestionCard
        question={current}
        value={responses[current.id]}
        onAnswer={(value) => answer(current.id, value)}
        index={currentIndex}
        total={questions.length}
      />

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={currentIndex === 0}
          className="rounded-md border-2 border-paper-line px-4 py-2 font-medium text-ink transition-colors disabled:opacity-40"
        >
          Previous
        </button>

        {questions.length <= 24 ? (
          <div className="flex flex-wrap justify-center gap-1.5">
            {questions.map((q, i) => (
              <button
                key={q.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to question ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-chalk" : responses[q.id] !== undefined ? "bg-mustard" : "bg-paper-line"
                }`}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-ink-soft">
            {answeredCount}/{questions.length} answered
          </p>
        )}

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-chalk px-4 py-2 font-medium text-paper transition-colors hover:bg-chalk-light"
          >
            Finish
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="rounded-md bg-chalk px-4 py-2 font-medium text-paper transition-colors hover:bg-chalk-light"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
