import { create } from "zustand";
import { persist } from "zustand/middleware";

/** Persisted best/last scores per grade+lesson+section, so the sidebar can show progress. */
export const useProgressStore = create(
  persist(
    (set, get) => ({
      records: {},

      recordResult: (grade, lesson, section, scorePercent) =>
        set((state) => {
          const key = `${grade}-${lesson}-${section}`;
          const prev = state.records[key];
          return {
            records: {
              ...state.records,
              [key]: {
                lastScore: scorePercent,
                bestScore:
                  scorePercent === null
                    ? (prev?.bestScore ?? null)
                    : Math.max(prev?.bestScore ?? 0, scorePercent),
                attempts: (prev?.attempts ?? 0) + 1,
                completedAt: Date.now(),
              },
            },
          };
        }),

      getProgress: (grade, lesson, section) => get().records[`${grade}-${lesson}-${section}`],
    }),
    { name: "vision-practice-progress" }
  )
);
