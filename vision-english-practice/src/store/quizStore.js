import { create } from "zustand";

/** Ephemeral state for the question currently on screen — reset each time a session starts. */
export const useQuizStore = create((set) => ({
  sessionKey: null,
  questions: [],
  responses: {},
  currentIndex: 0,

  startSession: (sessionKey, questions) =>
    set({ sessionKey, questions, responses: {}, currentIndex: 0 }),

  answer: (questionId, value) =>
    set((state) => ({ responses: { ...state.responses, [questionId]: value } })),

  goTo: (index) => set({ currentIndex: index }),
  next: () =>
    set((state) => ({ currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1) })),
  prev: () => set((state) => ({ currentIndex: Math.max(state.currentIndex - 1, 0) })),
}));
