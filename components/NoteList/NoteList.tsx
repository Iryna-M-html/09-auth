// import { Note } from "@/lib/api";
// import NoteItem from "../NoteItem/NotItem";

// type Props = {
//   notes: Note[];
// };

// const NoteList = ({ notes }: Props) => {
//   return (
//     <ul>
//       {notes.map((note) => (
//         <NoteItem key={note.id} item={note} />
//       ))}
//     </ul>
//   );
// };

// export default NoteList;

import type { Note } from "../../types/note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api";
import css from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
  onDeleted?: (note: Note) => void;
}

const NoteList = ({ notes, onDeleted }: NoteListProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });

      onDeleted?.(data);
    },
  });

  return (
    <ul className={css.list}>
      {notes.map(({ id, title, content, tag }) => (
        <li key={id} className={css.listItem}>
          <div>
            <h2 className={css.title}>{title}</h2>
            <p className={css.content}>{content}</p>
          </div>
          <div className={css.footer}>
            <span className={css.tag}>{tag}</span>
            <button
              className={css.button}
              onClick={() => deleteMutation.mutate(id)}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
