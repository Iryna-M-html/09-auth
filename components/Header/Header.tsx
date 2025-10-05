// components/Header/Header.tsx
import css from "./Header.module.css";
import Link from "next/link";
// import { getCategories } from "@/lib/api";
import TagsMenu from "../TagsMenu/TagsMenu";

const Header = () => {
  // const categories = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu />
          </li>
          {/* <li>
            <Link href="/notes">Notes</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
