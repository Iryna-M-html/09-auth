import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface FiltersPageProps {
  params: Promise<{ slug: string[] }>;
}

const FilterPage = async ({ params }: FiltersPageProps) => {
  console.log("123");
  const queryClient = new QueryClient();

  const page = 1;
  const search = "";
  const perPage = 12;

  const { slug } = await params;
  const tag = slug[0] == "All" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, perPage, search],
    queryFn: () => fetchNotes(page, perPage, search, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} noteClientPage={page} noteClientSearch={search} />
    </HydrationBoundary>
  );
};

export default FilterPage;
