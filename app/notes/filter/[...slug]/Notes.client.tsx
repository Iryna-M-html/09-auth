"use client";

import css from "../../../page.module.css";
import { useDebounce } from "use-debounce";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNotes, FetchNotesResponse } from "@/lib/api";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";
import { useEffect, useState } from "react";
import LoadingIndicator from "../../../loading";
import ErrorMessage from "./error";
import { NoteTag } from "@/types/note";

interface NoteClientProps {
  tag?: NoteTag | undefined;
}

export default function NotesClient({ tag }: NoteClientProps) {
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const { data, isLoading, isError, error } = useQuery<FetchNotesResponse>({
    queryKey: ["notes", page, perPage, debouncedSearchTerm, tag],
    queryFn: () => fetchNotes(page, perPage, debouncedSearchTerm, tag),
    placeholderData: keepPreviousData,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const totalPages = data?.totalPages ?? 1;
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
        {totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(selectedPage) => setPage(selectedPage)}
          />
        )}
        {/* <button className={css.button} onClick={openModal}>
          Create note +
        </button> */}
      </header>
      {isLoading && <LoadingIndicator />}
      {isError && <ErrorMessage error={error as Error} />}
      {data && data.notes.length === 0 && (
        <ErrorMessage error={new Error("No notes found.")} />
      )}
      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
      {isModalOpen && (
        <Modal onClose={closeModal} isOpen={true}>
          <NoteForm onCancel={closeModal} />
        </Modal>
      )}
    </div>
  );
}
