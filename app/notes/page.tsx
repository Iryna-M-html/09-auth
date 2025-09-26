"use client";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

import css from "../page.module.css";
import { Note } from "@/types/note";

interface Props {
  searchQuery: string;
  page: number;
  notesData: {
    notes: Note[];
    totalPages: number;
  };
}

export default function App({ searchQuery, page, notesData }: Props) {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  // Обработчик смены страницы
  const handlePageChange = ({ selected }: { selected: number }) => {
    const nextPage = selected + 1;
    router.push(`?query=${searchQuery}&page=${nextPage}`);
  };

  // Обработчик поиска
  const handleSearchChange = (value: string) => {
    router.push(`?query=${value}&page=1`);
  };

  // Закрытие модалки
  const handleModalClose = () => setModalOpen(false);

  return (
    <section>
      <div className={css.app}>
        <header className={css.toolbar}>
          {/* <h1>Notes List</h1> */}
          {/* {response?.notes?.length > 0 && <NoteList notes={response.notes} />} */}
          <SearchBox value={searchQuery} onChange={handleSearchChange} />

          {notesData.totalPages > 1 && (
            <Pagination
              pageCount={notesData.totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}

          <button className={css.button} onClick={() => setModalOpen(true)}>
            Создать заметку +
          </button>
        </header>

        <main>
          {notesData.notes.length > 0 ? (
            <NoteList notes={notesData.notes} onDeleted={() => {}} />
          ) : (
            <p>Заметок пока нет</p>
          )}
        </main>

        <footer className={css.footer}></footer>

        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <NoteForm onSave={handleModalClose} onCancel={handleModalClose} />
        </Modal>
      </div>
    </section>
  );
}
