"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./NoteDetails.module.css";
import { fetchNoteById } from "@/lib/api/clientApi";

interface NoteDetailsClientProps {
  id: string;
}

export default function NoteDetailsClient({ id }: NoteDetailsClientProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <p className={css.text}>Завантаження...</p>;
  }

  if (isError) {
    return <p className={css.text}>Помилка завантаження нотатки.</p>;
  }

  if (!data) {
    return <p className={css.text}>Нотатку не знайдено.</p>;
  }

  const formattedDate = data.updatedAt
    ? `Updated at: ${data.updatedAt}`
    : `Created at: ${data.createdAt}`;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{data.title}</h2>
        </div>
        <p className={css.content}>{data.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
