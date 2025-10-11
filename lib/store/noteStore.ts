import { create } from "zustand";
import { NewNotePayload } from "../api";

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

export const useNoteDraftStore = create<NoteDraftStore>()((set) => ({
  draft: initialDraft,
  setDraft: (note) => set(() => ({ draft: note })),
  clearDraft: () => set(() => ({ draft: initialDraft })),
}));
