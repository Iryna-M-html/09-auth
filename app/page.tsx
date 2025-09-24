import { fetchNotes } from "@/lib/api";

import NoteList from "../components/NoteList/NoteList";
import SearchBox from "../components/SearchBox/SearchBox";
import Pagination from "../components/Pagination/Pagination";
import Modal from "../components/Modal/Modal";
import NoteForm from "../components/NoteForm/NoteForm";

import css from "./page.module.css";

interface Props {
  searchQuery?: string;
  page?: number;
}

const App = async ({ searchQuery = "", page = 1 }: Props) => {
  const notesData = await fetchNotes({ page, query: searchQuery });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* SearchBox и Pagination теперь должны быть client components */}
        <SearchBox value={searchQuery} onChange={() => {}} />
        {notesData.totalPages > 1 && (
          <Pagination
            pageCount={notesData.totalPages}
            currentPage={page}
            onPageChange={() => {}}
          />
        )}
        {/* Создание заметки также потребует client component */}
        <button className={css.button} onClick={() => {}}>
          Create note +
        </button>
      </header>

      <main>
        {notesData.notes.length > 0 && (
          <NoteList notes={notesData.notes} onDeleted={() => {}} />
        )}
      </main>
    </div>
  );
};

export default App;

// import { useEffect, useState } from "react";
// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { useDebounce } from "use-debounce";
// import toast from "react-hot-toast";

// import { fetchNotes } from "@/lib/api";

// import NoteList from "../components/NoteList/NoteList";
// import SearchBox from "../components/SearchBox/SearchBox";
// import Pagination from "../components/Pagination/Pagination";
// import Modal from "../components/Modal/Modal";
// import NoteForm from "../components/NoteForm/NoteForm";

// import css from "./page.module.css";

// const App = () => {
//   const [page, setPage] = useState<number>(1);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [debouncedQuery] = useDebounce(searchQuery, 500);

//   useEffect(() => {
//     setPage(1);
//   }, [debouncedQuery]);

//   const {
//     data: notesData,

//     error,
//   } = useQuery({
//     queryKey: ["notes", page, debouncedQuery],
//     queryFn: () => fetchNotes({ page, query: debouncedQuery }),
//     placeholderData: keepPreviousData,
//   });

//   const handlePageClick = (event: { selected: number }): void => {
//     setPage(event.selected + 1);
//   };

//   const openModal = (): void => setIsModalOpen(true);
//   const closeModal = (): void => setIsModalOpen(false);

//   const handleCreated = () => {
//     toast.success("Note created successfully!");
//   };
//   const handleDeleted = () => {
//     toast.success("Note deleted successfully!");
//   };

//   return (
//     <div className={css.app}>
//       <header className={css.toolbar}>
//         <SearchBox value={searchQuery} onChange={setSearchQuery} />
//         {notesData && notesData.totalPages > 1 && (
//           <Pagination
//             pageCount={notesData.totalPages}
//             currentPage={page}
//             onPageChange={handlePageClick}
//           />
//         )}
//         <button className={css.button} onClick={openModal}>
//           Create note +
//         </button>
//       </header>

//       <main>
//         {notesData && notesData.notes.length > 0 && (
//           <NoteList notes={notesData.notes} onDeleted={handleDeleted} />
//         )}
//       </main>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <NoteForm onCancel={closeModal} onCreated={handleCreated} />
//       </Modal>
//     </div>
//   );
// };

// export default App;
