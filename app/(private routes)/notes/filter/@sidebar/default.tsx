import { tags } from "@/constans/tags";
import css from "@/components/SidebarNotes/SidebarNotes.module.css";
import Link from "next/link";
import { fetchNotes } from "@/lib/api/clientApi";
import { type Note } from "@/types/note";

const SidebarNotes = () => {
  return (
    <>
      <Link href="/notes/action/create" className={css.menuLink}>
        Create note
      </Link>

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
