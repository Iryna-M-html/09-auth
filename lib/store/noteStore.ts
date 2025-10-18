import { create } from "zustand";
import { NewNotePayload } from "../api/clientApi";
import { persist } from "zustand/middleware";
type NoteDraftStore = {
  draft: NewNotePayload;
  setDraft: (note: NewNotePayload) => void;
  clearDraft: () => void;
};

const initialDraft: NewNotePayload = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",

      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
