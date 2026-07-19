import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getGrade, getLesson } from "../data/curriculum";

function Breadcrumb() {
  const { grade, lesson, section } = useParams();
  const gradeInfo = grade ? getGrade(grade) : null;
  const lessonInfo = grade && lesson ? getLesson(grade, lesson) : null;

  const crumbs = [
    gradeInfo && `${gradeInfo.label} · ${gradeInfo.book}`,
    lessonInfo && `Lesson ${lessonInfo.id}: ${lessonInfo.title}`,
    section && section[0].toUpperCase() + section.slice(1),
  ].filter(Boolean);

  if (crumbs.length === 0) return <span className="font-display font-semibold">Vision Practice</span>;
  return <span className="truncate font-body text-sm text-ink-soft">{crumbs.join(" › ")}</span>;
}

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-dvh">
      <aside className="hidden w-72 shrink-0 lg:block">
        <div className="fixed h-dvh w-72">
          <Sidebar className="h-full" />
        </div>
      </aside>

      {drawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close syllabus"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div className="absolute inset-y-0 start-0 w-72 max-w-[85vw]">
            <Sidebar className="h-full" />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-paper-line bg-paper/95 px-4 py-3 backdrop-blur lg:px-8">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="rounded-md border border-paper-line bg-white/60 px-3 py-1.5 font-display text-sm font-medium text-chalk-dark lg:hidden"
          >
            Syllabus
          </button>
          <Breadcrumb />
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 lg:px-8 lg:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
