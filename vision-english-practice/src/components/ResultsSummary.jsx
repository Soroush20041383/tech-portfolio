import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const SECTION_LABEL = { vocabulary: "Vocabulary", grammar: "Grammar", reading: "Reading", mixed: "Mixed" };

export default function ResultsSummary({ grade, lesson, section, result }) {
  const { total, autoGraded, selfCheck, correct, scorePercent, sectionStats } = result;

  const weakSections = Object.entries(sectionStats)
    .filter(([, stats]) => stats.total > 0 && stats.correct / stats.total < 0.7)
    .map(([id]) => id);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-paper-line bg-white/70 p-6 text-center">
        <p className="font-display text-sm uppercase tracking-wide text-ink-soft">Session score</p>
        <p className="font-display text-5xl font-semibold text-chalk-dark">
          {scorePercent === null ? "—" : `${scorePercent}%`}
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          {correct}/{autoGraded} auto-graded correct
          {selfCheck > 0 && ` · ${selfCheck} question${selfCheck > 1 ? "s" : ""} to self-check`}
          {` · ${total} total`}
        </p>
      </div>

      {Object.keys(sectionStats).length > 0 && (
        <div className="space-y-3 rounded-lg border border-paper-line bg-white/70 p-6">
          <p className="font-display text-sm font-semibold text-ink">By section</p>
          {Object.entries(sectionStats).map(([id, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={id} className="space-y-1">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span>{SECTION_LABEL[id] ?? id}</span>
                  <span>
                    {stats.correct}/{stats.total} ({pct}%)
                  </span>
                </div>
                <ProgressBar percent={pct} size="sm" />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          to={`/grade/${grade}/lesson/${lesson}/${section}`}
          className="rounded-md bg-chalk px-4 py-2.5 font-medium text-paper transition-colors hover:bg-chalk-light"
        >
          Practice again
        </Link>
        {weakSections.length > 0 && weakSections[0] !== section && (
          <Link
            to={`/grade/${grade}/lesson/${lesson}/${weakSections[0]}`}
            className="rounded-md border-2 border-margin px-4 py-2.5 font-medium text-margin transition-colors hover:bg-incorrect-bg"
          >
            Practice weak section: {SECTION_LABEL[weakSections[0]] ?? weakSections[0]}
          </Link>
        )}
        <Link
          to={`/grade/${grade}/lesson/${lesson}`}
          className="rounded-md border-2 border-paper-line px-4 py-2.5 font-medium text-ink transition-colors hover:border-chalk"
        >
          Back to lesson overview
        </Link>
      </div>
    </div>
  );
}
