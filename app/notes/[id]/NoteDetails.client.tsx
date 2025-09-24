// pages/notes/NotesPageClient.tsx
"use client";

import { useState } from "react";
import { fetchNotes } from "@/lib/api";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Pagination from "../../../components/Pagination/Pagination";
import NoteList from "../../../components/NoteList/NoteList";
import Modal from "../../../components/Modal/Modal";
import NoteForm from "../../../components/NoteForm/NoteForm";
import { NotesPageClientProps } from "../../../types/note";
import { Note } from "@/types/note";

export const NoteDetailsClient: React.FC<NotesPageClientProps> = ({
  initialNotes,
  initialTotalPages,
}: NotesPageClientProps) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
      <SearchBox value={query} onChange={handleSearchChange} />
      <Pagination
        pageCount={initialTotalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
      <NoteList notes={notes} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm onCancel={() => setIsModalOpen(false)} onCreated={() => {}} />
      </Modal>
    </div>
  );
};

export default NoteDetailsClient;

// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "next/navigation";
// import { getSingleNote } from "@/lib/api";
// import css from "./NoteDetails.module.css";

// const NoteDetailsClient = () => {
//   const { id } = useParams<{ id: string }>();

//   const {
//     data: note,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//     refetchOnMount: false,
//   });

//   if (isLoading) return <p>Loading, please wait...</p>;

//   if (error || !note) return <p>Something went wrong.</p>;

//   const formattedDate = note.updatedAt
//     ? `Updated at: ${note.updatedAt}`
//     : `Created at: ${note.createdAt}`;

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>Note title</h2>
//         </div>
//         <p className={css.content}>Note content</p>
//         <p className={css.date}>Created date</p>
//       </div>
//     </div>
//   );
// };

// export default NoteDetailsClient;
