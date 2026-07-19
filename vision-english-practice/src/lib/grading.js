export function normalize(str) {
  return String(str ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,!?]/g, "");
}

/** Returns true/false for auto-gradable formats, or null when the format is open-ended (self-check). */
export function gradeAnswer(question, response) {
  switch (question.format) {
    case "mcq":
    case "tf":
    case "fill":
    case "transform":
    case "error-correction":
      return normalize(response) === normalize(question.answer);

    case "matching": {
      if (!response || typeof response !== "object" || !Array.isArray(question.answer)) return false;
      const answerMap = Object.fromEntries(question.answer);
      const leftItems = Object.keys(answerMap);
      if (Object.keys(response).length !== leftItems.length) return false;
      return leftItems.every((left) => normalize(response[left]) === normalize(answerMap[left]));
    }

    case "reading":
    case "short-answer":
      return null;

    default:
      return null;
  }
}

/** Grades a full session, splitting results into auto-graded and self-check. */
export function gradeSession(questions, responses) {
  let correct = 0;
  let autoGraded = 0;
  let selfCheck = 0;

  const details = questions.map((q) => {
    const response = responses[q.id];
    const result = gradeAnswer(q, response);
    if (result === null) {
      selfCheck += 1;
      return { id: q.id, section: q.section, result: "self-check" };
    }
    autoGraded += 1;
    if (result) correct += 1;
    return { id: q.id, section: q.section, result: result ? "correct" : "incorrect" };
  });

  const sectionStats = {};
  for (const d of details) {
    if (d.result === "self-check") continue;
    sectionStats[d.section] ??= { correct: 0, total: 0 };
    sectionStats[d.section].total += 1;
    if (d.result === "correct") sectionStats[d.section].correct += 1;
  }

  return {
    total: questions.length,
    autoGraded,
    selfCheck,
    correct,
    scorePercent: autoGraded > 0 ? Math.round((correct / autoGraded) * 100) : null,
    sectionStats,
    details,
  };
}
