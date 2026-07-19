import { Link, useParams } from "react-router-dom";
import { getGrade, SECTIONS } from "../data/curriculum";
import { useProgressStore } from "../store/progressStore";
import ProgressBar from "../components/ProgressBar";

export default function GradeOverview() {
  const { grade } = useParams();
  const gradeInfo = getGrade(grade);
  const records = useProgressStore((s) => s.records);

  if (!gradeInfo) return <p className="text-ink-soft">Grade not found.</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">{gradeInfo.label}</h1>
        <p className="text-ink-soft">{gradeInfo.book}</p>
      </div>

      <div className="grid gap-4">
        {gradeInfo.lessons.map((lesson) => {
          const scores = SECTIONS.map((s) => records[`${grade}-${lesson.id}-${s.id}`]?.bestScore).filter(
            (v) => typeof v === "number"
          );
          const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;

          const card = (
            <div
              className={`rounded-lg border p-5 transition-colors ${
                lesson.ready
                  ? "border-paper-line bg-white/70 hover:border-chalk"
                  : "border-dashed border-paper-line bg-white/30 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-chalk-dark">
                  Lesson {lesson.id}: {lesson.title}
                </p>
                {!lesson.ready && <span className="text-xs uppercase tracking-wide text-ink-soft">Coming soon</span>}
              </div>
              {lesson.ready && (
                <div className="mt-3 space-y-1">
                  <ProgressBar percent={avg ?? 0} size="sm" />
                  <p className="text-xs text-ink-soft">
                    {avg === null ? "Not started" : `Average best score: ${avg}%`}
                  </p>
                </div>
              )}
            </div>
          );

          return lesson.ready ? (
            <Link key={lesson.id} to={`/grade/${grade}/lesson/${lesson.id}`}>
              {card}
            </Link>
          ) : (
            <div key={lesson.id}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
