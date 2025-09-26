"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

import css from "./page.module.css";

interface Props {
  searchQuery: string;
  page: number;
  notesData: {
    notes: any[];
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

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onChange={handleSearchChange} />
        {notesData.totalPages > 1 && (
          <Pagination
            pageCount={notesData.totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        )}
        <button className={css.button} onClick={() => setModalOpen(true)}>
          Create note +
        </button>
      </header>

      <main>
        {notesData.notes.length > 0 && (
          <NoteList notes={notesData.notes} onDeleted={() => {}} />
        )}
      </main>
      <footer className={css.footer}>
        <div className={css.content}>
          <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
          <div className={css.wrap}>
            <p>Developer: Iryna</p>
            <p>
              Contact us:
              <a href="mailto:student@notehub.app">student@notehub.app</a>
            </p>
          </div>
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <NoteForm
          onSave={() => setModalOpen(false)}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Modal>
    </div>
  );
}
