import MCQCard from "./MCQCard";
import FillBlankCard from "./FillBlankCard";
import MatchingCard from "./MatchingCard";
import TransformCard from "./TransformCard";
import ReadingCard from "./ReadingCard";

const FORMAT_COMPONENTS = {
  mcq: MCQCard,
  tf: MCQCard,
  fill: FillBlankCard,
  "short-answer": FillBlankCard,
  matching: MatchingCard,
  transform: TransformCard,
  "error-correction": TransformCard,
  reading: ReadingCard,
};

const STYLE_LABEL = { konkur: "Konkur", final: "Year-final" };
const SECTION_LABEL = { vocabulary: "Vocabulary", grammar: "Grammar", reading: "Reading", mixed: "Mixed" };

export default function QuestionCard({ question, value, onAnswer, revealed, index, total }) {
  // A question tagged mcq/tf/error-correction with an options[] list is always
  // rendered as multiple choice, regardless of its declared format.
  const Component = Array.isArray(question.options) ? MCQCard : FORMAT_COMPONENTS[question.format];

  return (
    <div className="rounded-lg border border-paper-line bg-white/70 p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-soft">
        {typeof index === "number" && (
          <span className="rounded-full bg-chalk px-2.5 py-1 text-white">
            {index + 1} / {total}
          </span>
        )}
        <span className="rounded-full bg-mustard-light/60 px-2.5 py-1 text-chalk-dark">
          {SECTION_LABEL[question.section] ?? question.section}
        </span>
        <span className="rounded-full border border-paper-line px-2.5 py-1">
          {STYLE_LABEL[question.style] ?? question.style}
        </span>
        {question.grammarPoint && (
          <span className="rounded-full border border-paper-line px-2.5 py-1 normal-case">
            {question.grammarPoint}
          </span>
        )}
      </div>

      {question.format !== "reading" && question.passage && (
        <div className="paper-ruled paper-margin mb-4 rounded-md p-4">
          <p className="whitespace-pre-line font-body leading-8 text-ink">{question.passage}</p>
        </div>
      )}

      {Component ? (
        <Component question={question} value={value} onAnswer={onAnswer} revealed={revealed} />
      ) : (
        <p className="text-incorrect">Unsupported question format: {question.format}</p>
      )}
    </div>
  );
}
