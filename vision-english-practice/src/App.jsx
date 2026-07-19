import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GradeOverview from "./pages/GradeOverview";
import LessonOverview from "./pages/LessonOverview";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/grade/:grade" element={<GradeOverview />} />
          <Route path="/grade/:grade/lesson/:lesson" element={<LessonOverview />} />
          <Route path="/grade/:grade/lesson/:lesson/:section" element={<Quiz />} />
          <Route path="/grade/:grade/lesson/:lesson/:section/results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
