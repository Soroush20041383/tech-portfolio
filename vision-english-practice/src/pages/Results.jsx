import { Navigate, useLocation, useParams } from "react-router-dom";
import ResultsSummary from "../components/ResultsSummary";

export default function Results() {
  const { grade, lesson, section } = useParams();
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <Navigate to={`/grade/${grade}/lesson/${lesson}/${section}`} replace />;
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-semibold text-ink">Results</h1>
      <ResultsSummary grade={grade} lesson={lesson} section={section} result={result} />
    </div>
  );
}
