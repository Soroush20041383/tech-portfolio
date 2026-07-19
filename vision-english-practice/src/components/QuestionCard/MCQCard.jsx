export default function MCQCard({ question, value, onAnswer, revealed }) {
  return (
    <div className="space-y-3">
      <p className="font-display text-lg leading-relaxed text-ink">{question.prompt}</p>
      <div className="grid gap-2">
        {question.options.map((option) => {
          const isSelected = value === option;
          const isCorrect = option === question.answer;

          let stateClasses = "border-paper-line bg-white/60 hover:border-chalk-light";
          if (revealed) {
            if (isCorrect) stateClasses = "border-correct bg-correct-bg";
            else if (isSelected) stateClasses = "border-incorrect bg-incorrect-bg";
          } else if (isSelected) {
            stateClasses = "border-chalk bg-mustard-light/40";
          }

          return (
            <button
              key={option}
              type="button"
              disabled={revealed}
              onClick={() => onAnswer(option)}
              className={`rounded-md border-2 px-4 py-3 text-start font-body text-ink transition-colors disabled:cursor-default ${stateClasses}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
