import { fetchNotes } from "@/lib/api/serverApi";
import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import type { NoteTag } from "@/types/note";

interface FiltersPageProps {
  params: Promise<{ slug: string[] }>;
}
export async function generateMetadata({
  params,
}: FiltersPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug?.[0] || "All";

  const title =
    tag === "All"
      ? "All Notes | NoteHub"
      : `Notes tagged with "${tag}" | NoteHub`;

  const description =
    tag === "All"
      ? "Browse all notes created in NoteHub. Easily organize and manage your thoughts."
      : `Browse all notes in the "${tag}" category on NoteHub. Create, organize, and manage your notes effortlessly.`;

  const url = `https://notehub.example.com/notes/${tag}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub preview",
        },
      ],
      type: "website",
      siteName: "NoteHub",
    },
  };
}
const FilterPage = async ({ params }: FiltersPageProps) => {
  const queryClient = new QueryClient();

  const page = 1;
  const search = "";
  const perPage = 12;

  const { slug } = await params;

  const tag: NoteTag | undefined =
    slug[0] === "All" ? undefined : (slug[0] as NoteTag);
  await queryClient.prefetchQuery({
    queryKey: ["notes", page, perPage, search, tag],
    queryFn: () => fetchNotes(page, perPage, search, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
};

export default FilterPage;
