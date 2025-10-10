import { tags } from "@/constans/tags";
import css from "../../../../components/SidebarNotes/SidebarNotes.module.css";
import Link from "next/link";
import { fetchNotes } from "@/lib/api";
import { type Note } from "../../../../types/note";

const SidebarNotes = () => {
  // const { notes } = await fetchNotes();
  return (
    <>
      <Link href="/notes/action/create">Create note</Link>
      {/* <ul>
        <li>
          <Link href={`/notes/filter/all`}>All notes</Link>
        </li>
        {notes.map((note: Note) => (
          <li key={note.id}>
            <Link href={`/notes/filter/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul> */}
      <ul className={css.menuList}>
        {tags.map((tag) => {
          const url =
            tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`;
          return (
            <li key={tag} className={css.menuItem}>
              <Link href={url} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SidebarNotes;
