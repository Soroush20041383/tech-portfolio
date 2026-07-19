export default function TransformCard({ question, value, onAnswer, revealed }) {
  const isErrorCorrection = question.format === "error-correction";

  return (
    <div className="space-y-3">
      <p className="font-display text-lg leading-relaxed text-ink">{question.prompt}</p>
      {question.text && (
        <blockquote className="paper-margin rounded-r-md bg-white/50 px-4 py-3 font-body italic text-ink-soft">
          {question.text}
        </blockquote>
      )}
      <input
        type="text"
        disabled={revealed}
        value={value ?? ""}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder={isErrorCorrection ? "Write the corrected sentence…" : "Write the transformed sentence…"}
        className="w-full rounded-md border-2 border-paper-line bg-white/70 px-4 py-3 font-body text-ink focus:border-chalk focus:outline-none"
      />
      {revealed && (
        <p className="text-sm text-ink-soft">
          Correct answer: <span className="font-medium text-chalk-dark">{question.answer}</span>
        </p>
      )}
    </div>
  );
}
