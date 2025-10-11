"use client";

import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create a New Note | NoteHub",
  description:
    "Create a new note in NoteHub. Add a title, content, and tag to organize your ideas easily.",
  openGraph: {
    title: "Create a New Note | NoteHub",
    description:
      "Start writing a new note in NoteHub. Capture your thoughts and organize them with tags.",
    url: "https://notehub.example.com/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Create Note in NoteHub",
      },
    ],
    type: "website",
    siteName: "NoteHub",
  },
};
const CreateNote = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm onCancel={() => {}} />
      </div>
    </main>
  );
};

export default CreateNote;
