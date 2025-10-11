import React from "react";
import css from "./NoteHub.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "404 — Page not found | NoteHub",
  description:
    "This page does not exist. Please check the URL or return to the NoteHub homepage.",
  openGraph: {
    title: "404 — Page not found | NoteHub",
    description:
      "This page does not exist. Please check the URL or return to the NoteHub homepage.",
    url: "https://notehub.example.com/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404 Page",
      },
    ],
    type: "website",
    siteName: "NoteHub",
  },
};
const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
