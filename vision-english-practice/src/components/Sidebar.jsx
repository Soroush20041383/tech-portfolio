import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGrades, SECTIONS } from "../data/curriculum";
import { useProgressStore } from "../store/progressStore";

function SectionDot({ progress }) {
  if (!progress) return <span className="h-2 w-2 rounded-full border border-paper-line" />;
  const color =
    progress.bestScore === null
      ? "bg-mustard"
      : progress.bestScore >= 80
        ? "bg-correct"
        : progress.bestScore >= 50
          ? "bg-mustard"
          : "bg-incorrect";
  return <span className={`h-2 w-2 rounded-full ${color}`} title={`Best: ${progress.bestScore ?? "—"}%`} />;
}

function LessonBlock({ grade, lesson, isOpen, onToggle, activeSection }) {
  const progressRecords = useProgressStore((s) => s.records);

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        disabled={!lesson.ready}
        className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-start font-body text-sm transition-colors ${
          lesson.ready ? "text-paper hover:bg-white/10" : "text-paper/40"
        }`}
      >
        <span>
          Lesson {lesson.id}
          {lesson.ready && <span className="text-paper/70"> · {lesson.title}</span>}
        </span>
        {!lesson.ready && <span className="text-[10px] uppercase tracking-wide">soon</span>}
      </button>

      {isOpen && lesson.ready && (
        <ul className="ms-3 mt-1 space-y-1 border-s border-white/15 ps-3">
          {SECTIONS.map((section) => {
            const key = `${grade}-${lesson.id}-${section.id}`;
            const progress = progressRecords[key];
            const to = `/grade/${grade}/lesson/${lesson.id}/${section.id}`;
            const isActive = activeSection?.grade === String(grade) && activeSection?.lesson === String(lesson.id) && activeSection?.section === section.id;
            return (
              <li key={section.id}>
                <Link
                  to={to}
                  className={`flex items-center justify-between gap-2 rounded px-2 py-1 text-sm transition-colors ${
                    isActive ? "bg-mustard text-chalk-dark font-semibold" : "text-paper/85 hover:bg-white/10"
                  }`}
                >
                  <span>{section.label}</span>
                  <SectionDot progress={progress} />
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to={`/grade/${grade}/lesson/${lesson.id}`}
              className="block rounded px-2 py-1 text-xs text-paper/60 hover:bg-white/10 hover:text-paper"
            >
              Lesson overview →
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default function Sidebar({ className = "" }) {
  const params = useParams();
  const currentGrade = params.grade;
  const currentLesson = params.lesson;
  const [openGrade, setOpenGrade] = useState(currentGrade ?? "10");
  const [openLesson, setOpenLesson] = useState(currentLesson ?? "1");

  return (
    <nav
      aria-label="Course syllabus"
      className={`flex h-full flex-col bg-chalk text-paper ${className}`}
    >
      <Link to="/" className="border-b border-white/10 px-4 py-5">
        <p className="font-display text-lg font-semibold leading-tight">Vision Practice</p>
        <p className="text-xs text-paper/60">Konkur &amp; year-final drills</p>
      </Link>

      <div className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {getGrades().map((grade) => {
          const isGradeOpen = openGrade === String(grade.grade);
          return (
            <div key={grade.grade} className="space-y-1">
              <button
                type="button"
                onClick={() => setOpenGrade(isGradeOpen ? null : String(grade.grade))}
                className="flex w-full items-center justify-between rounded-md bg-white/5 px-3 py-2 font-display text-sm font-semibold"
              >
                <span>
                  {grade.label} <span className="font-body font-normal text-paper/60">· {grade.book}</span>
                </span>
                <span className="text-paper/50">{isGradeOpen ? "−" : "+"}</span>
              </button>

              {isGradeOpen && (
                <div className="space-y-1 ps-1">
                  {grade.lessons.map((lesson) => (
                    <LessonBlock
                      key={lesson.id}
                      grade={grade.grade}
                      lesson={lesson}
                      isOpen={openLesson === String(lesson.id)}
                      onToggle={() => setOpenLesson(openLesson === String(lesson.id) ? null : String(lesson.id))}
                      activeSection={{ grade: currentGrade, lesson: currentLesson, section: params.section }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
