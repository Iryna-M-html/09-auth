// pages/notes/NotesPageClient.tsx
"use client";

import { useState } from "react";
import { fetchNotes } from "@/lib/api";
// import SearchBox from "../../../components/SearchBox/SearchBox";
// import Pagination from "../../../components/Pagination/Pagination";
import NoteList from "../../../components/NoteList/NoteList";
// import Modal from "../../../components/Modal/Modal";
// import NoteForm from "../../../components/NoteForm/NoteForm";
import { NotesPageClientProps } from "../../../types/note";
import { Note } from "@/types/note";

export const NoteDetailsClient: React.FC<NotesPageClientProps> = ({
  initialNotes,
  initialTotalPages,
}: NotesPageClientProps) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePageChange = async ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setPage(newPage);
    const data = await fetchNotes({ page: newPage, query });
    setNotes(data.notes);
  };

  const handleSearchChange = async (value: string) => {
    setQuery(value);
    setPage(1);
    const data = await fetchNotes({ page: 1, query: value });
    setNotes(data.notes);
  };

  return (
    <div>
      {/* <SearchBox value={query} onChange={handleSearchChange} /> */}
      {/* <Pagination
        pageCount={initialTotalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      /> */}
      <NoteList notes={notes} />
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm
          onCancel={() => setIsModalOpen(false)}
          onCreated={() => {}}
          onSave={() => {}}
        />
      </Modal> */}
    </div>
  );
};

export default NoteDetailsClient;
