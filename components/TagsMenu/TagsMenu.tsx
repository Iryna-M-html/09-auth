"use client";
import { useState } from "react";
import Link from "next/link";
import css from "./TagsMenu.module.css";
import { tags } from "@/constans/tags";

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuBtn}>
        Notes
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => {
            const url =
              tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`;
            return (
              <li key={tag} className={css.menuItem}>
                <Link onClick={toggle} href={url} className={css.menuLink}>
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
