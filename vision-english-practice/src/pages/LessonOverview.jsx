import { Link, useParams } from "react-router-dom";
import { getGrade, getLesson, SECTIONS, MODES } from "../data/curriculum";
import { useProgressStore } from "../store/progressStore";
import ProgressBar from "../components/ProgressBar";

export default function LessonOverview() {
  const { grade, lesson } = useParams();
  const gradeInfo = getGrade(grade);
  const lessonInfo = getLesson(grade, lesson);
  const records = useProgressStore((s) => s.records);

  if (!gradeInfo || !lessonInfo) return <p className="text-ink-soft">Lesson not found.</p>;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-wide text-ink-soft">
          {gradeInfo.label} · {gradeInfo.book}
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink">
          Lesson {lessonInfo.id}: {lessonInfo.title}
        </h1>
      </div>

      <div>
        <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Practice by section
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {SECTIONS.map((section) => {
            const progress = records[`${grade}-${lesson}-${section.id}`];
            return (
              <Link
                key={section.id}
                to={`/grade/${grade}/lesson/${lesson}/${section.id}`}
                className="rounded-lg border border-paper-line bg-white/70 p-4 transition-colors hover:border-chalk"
              >
                <p className="font-display font-semibold text-chalk-dark">{section.label}</p>
                <div className="mt-2">
                  <ProgressBar percent={progress?.bestScore ?? 0} size="sm" />
                  <p className="mt-1 text-xs text-ink-soft">
                    {progress ? `Best: ${progress.bestScore ?? "—"}%` : "Not started"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Full practice modes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODES.map((mode) => (
            <Link
              key={mode.id}
              to={`/grade/${grade}/lesson/${lesson}/mixed?mode=${mode.id}`}
              className="rounded-lg border-2 border-chalk/20 bg-chalk/5 p-4 transition-colors hover:border-chalk"
            >
              <p className="font-display font-semibold text-chalk-dark">{mode.label}</p>
              <p className="text-sm text-ink-soft">{mode.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
