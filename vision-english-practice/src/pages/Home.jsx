import { Link } from "react-router-dom";
import { getGrades } from "../data/curriculum";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Vision English Practice</h1>
        <p className="mt-2 text-ink-soft">
          Practice Konkur-style multiple choice and year-final-style mixed questions, lesson by lesson.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {getGrades().map((grade) => (
          <Link
            key={grade.grade}
            to={`/grade/${grade.grade}`}
            className="paper-margin rounded-lg border border-paper-line bg-white/70 p-5 transition-colors hover:border-chalk"
          >
            <p className="font-display text-xl font-semibold text-chalk-dark">{grade.label}</p>
            <p className="text-sm text-ink-soft">{grade.book}</p>
            <p className="mt-3 text-sm text-ink-soft">
              {grade.lessons.filter((l) => l.ready).length} of {grade.lessons.length} lessons ready
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
