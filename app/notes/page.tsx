// export default function NotesPage() {
//   return (
//     <div>
//       <h1>Notes page</h1>
//       <p>This is the Note route in Next.js.</p>
//     </div>
//   );
// }

// // 1. Імпортуємо функцію
// import { getNotes } from "@/lib/api";

// // 2. Робимо фукнцію асинхронною
// const Notes = async () => {
//   // 3. Виконуємо запит
//   const notes = await getNotes();
//   console.log("notes", notes);

//   return <div>Notes page</div>;
// };

// export default Notes;
// "use client";
// import { getNotes } from "@/lib/api";
// import NoteList from "@/components/NoteList/NoteList";

// const Notes = async () => {
//   const response = await getNotes();

//   return (
//     <section>
//       <h1>Notes List</h1>
//       {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
//     </section>
//   );
// };

// export default Notes;
"use client";

import { useState } from "react";
import NoteList from "@/components/NoteList/NoteList";
import { getNotes, Note } from "@/lib/api";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleClick = async () => {
    const response = await getNotes();
    if (response?.notes) {
      setNotes(response.notes);
    }
  };

  return (
    <section>
      <h1>Notes List</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
};

export default Notes;
