"use client";
import NoteList from "@/components/NoteList/NoteList";
//import { fetchNotes } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

import css from "../page.module.css";
import { Note } from "@/types/note";
//import Page from "../page";
//import type PropsPar from "../page";

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

  const handlePageChange = ({ selected }: { selected: number }) => {
    const nextPage = selected + 1;
    router.push(`?query=${searchQuery}&page=${nextPage}`);
  };

  const handleSearchChange = (value: string) => {
    router.push(`?query=${value}&page=1`);
  };

  const handleModalClose = () => setModalOpen(false);

  return (
    <section>
      <div className={css.app}>
        <header className={css.toolbar}>
          {/* <h1>Notes List</h1> */}
          {/* {response?.notes?.length > 0 && <NoteList notes={response.notes} />} */}

          <SearchBox value={searchQuery} onChange={handleSearchChange} />
          {notesData?.totalPages > 1 && (
            <Pagination
              pageCount={notesData.totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}
          {/* {notesData.totalPages > 1 &&  (
            <Pagination
              pageCount={notesData.totalPages}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )} */}
          <button className={css.button} onClick={() => setModalOpen(true)}>
            Создать заметку +
          </button>
        </header>

        <main>
          {notesData?.notes?.length > 0 ? (
            <NoteList
              notes={notesData.notes}
              onDeleted={() => router.refresh()}
            />
          ) : (
            <p>You don’t have any notes yet</p>
          )}
        </main>

        <footer className={css.footer}></footer>

        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <NoteForm
            onSave={() => {
              handleModalClose();
              router.refresh();
            }}
            onCancel={() => {
              handleModalClose();
              router.refresh();
            }}
          />
        </Modal>
      </div>
    </section>
  );
  ////
}
