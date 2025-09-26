import { fetchNotes } from "@/lib/api";
import App from "./App";

interface Props {
  searchParams?: { query?: string; page?: string };
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const searchQuery = params?.query || "";
  const page = params?.page ? Number(params.page) : 1;

  // const searchQuery = "";
  // const page = 1;

  const notesData = await fetchNotes({ page, query: searchQuery });

  return <App notesData={notesData} searchQuery={searchQuery} page={page} />;
}
