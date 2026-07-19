import { normalize } from "../../lib/grading";

export default function MatchingCard({ question, value, onAnswer, revealed }) {
  const map = value ?? {};
  const { left, right } = question.pairs;
  const answerMap = revealed ? Object.fromEntries(question.answer) : null;

  const handleSelect = (leftItem, rightItem) => {
    onAnswer({ ...map, [leftItem]: rightItem });
  };

  return (
    <div className="space-y-3">
      <p className="font-display text-lg leading-relaxed text-ink">{question.prompt}</p>
      <div className="space-y-2">
        {left.map((leftItem) => {
          const chosen = map[leftItem] ?? "";
          const isCorrect = revealed && normalize(chosen) === normalize(answerMap[leftItem]);

          return (
            <div key={leftItem} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-ink sm:min-w-32">{leftItem}</span>
              <select
                disabled={revealed}
                value={chosen}
                onChange={(e) => handleSelect(leftItem, e.target.value)}
                className={`w-full rounded-md border-2 bg-white/70 px-3 py-2 font-body text-ink ${
                  revealed
                    ? isCorrect
                      ? "border-correct bg-correct-bg"
                      : "border-incorrect bg-incorrect-bg"
                    : "border-paper-line"
                }`}
              >
                <option value="" disabled>
                  Choose a match…
                </option>
                {right.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {revealed && !isCorrect && (
                <span className="whitespace-nowrap text-sm text-ink-soft">→ {answerMap[leftItem]}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
