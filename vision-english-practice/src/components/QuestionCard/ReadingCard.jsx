export default function ReadingCard({ question, value, onAnswer, revealed }) {
  const answers = value ?? {};
  const handleChange = (subId, text) => onAnswer({ ...answers, [subId]: text });

  return (
    <div className="space-y-4">
      <div className="paper-ruled paper-margin rounded-md p-4">
        <p className="whitespace-pre-line font-body leading-8 text-ink">{question.passage}</p>
      </div>
      <div className="space-y-4">
        {question.questions.map((sub, i) => (
          <div key={sub.id} className="space-y-1">
            <p className="font-medium text-ink">
              {i + 1}. {sub.prompt}
            </p>
            <input
              type="text"
              disabled={revealed}
              value={answers[sub.id] ?? ""}
              onChange={(e) => handleChange(sub.id, e.target.value)}
              placeholder="Your answer…"
              className="w-full rounded-md border-2 border-paper-line bg-white/70 px-4 py-2 font-body text-ink focus:border-chalk focus:outline-none"
            />
            {revealed && (
              <p className="text-sm text-ink-soft">
                Sample answer: <span className="font-medium text-chalk-dark">{sub.answer}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
