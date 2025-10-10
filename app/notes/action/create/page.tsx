"use client";

// import { useParams } from "next/navigation";
import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";
// import { useRouter } from "next/navigation";

const CreateNote = () => {
  //   const router = useRouter();
  //   const close = () => router.back();

  //   const { id } = useParams<{ id: string }>();

  //   const {
  //     data: note,
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["noteHubKeyById", id],
  //     queryFn: () => fetchNoteById(id),
  //     refetchOnMount: false,
  //   });

  //   if (isLoading) {
  //     return <p>Loading, please wait...</p>;
  //   }

  //   if (error || !note) {
  //     throw error;
  //   }

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
