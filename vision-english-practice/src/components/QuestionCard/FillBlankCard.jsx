export default function FillBlankCard({ question, value, onAnswer, revealed }) {
  const isShortAnswer = question.format === "short-answer";

  return (
    <div className="space-y-3">
      <p className="font-display text-lg leading-relaxed text-ink">{question.prompt}</p>
      <input
        type="text"
        disabled={revealed}
        value={value ?? ""}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Type your answer…"
        className="w-full rounded-md border-2 border-paper-line bg-white/70 px-4 py-3 font-body text-ink focus:border-chalk focus:outline-none"
      />
      {revealed && (
        <p className="text-sm text-ink-soft">
          {isShortAnswer ? "Sample answer: " : "Correct answer: "}
          <span className="font-medium text-chalk-dark">{question.answer}</span>
        </p>
      )}
    </div>
  );
}
