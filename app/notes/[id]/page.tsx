// app/notes/[id]/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const queryClient = new QueryClient();

  const { id } = await params;
  const noteId = Number(id);

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });
  const note = queryClient.getQueryData<Note>(["note", id]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient
        initialNotes={note ? [note] : []}
        initialTotalPages={1}
      />
    </HydrationBoundary>
  );
}
