// app/notes/[id]/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
interface NoteDetailsClientProps {
  params: { id: string };
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsClientProps) {
  const queryClient = new QueryClient();

  const id = Number(params.id);

  // префетч даних на сервері
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
