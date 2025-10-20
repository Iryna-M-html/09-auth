import { User } from "@/types/user";
import type { Note, NoteTag } from "../../types/note";
import { nextServerApi, SessionResponse } from "./api";
import { cookies } from "next/headers";

export const getServerMe = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServerApi.get<User>(`/users/me`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServerApi.get<SessionResponse>(`/auth/session`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return res;
};
export const getServerNoteById = async (id: string): Promise<Note> => {
  if (!id) {
    throw new Error("Note ID is required");
  }

  const cookieStore = await cookies();
  const { data } = await nextServerApi.get<Note>(`/notes/${id}`, {
    headers: { Cookie: cookieStore.toString() },
  });

  return data;
};
export interface FetchNotesResponse {
  notes: Note[];

  totalPages: number;
}

export interface NewNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function fetchNotes(
  page = 1,
  perPage = 12,
  search = "",
  tag?: NoteTag
): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();
  const response = await nextServerApi.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, search, tag },
    headers: { Cookie: cookieStore.toString() },
  });
  return response.data;
}

export const fetchNoteById = async (id: string): Promise<Note> => {
  if (!id) {
    throw new Error("Note ID is required");
  }
  const cookieStore = await cookies();
  const response = await nextServerApi.get<Note>(`/notes/${id}`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return response.data;
};

export const getSingleNote = fetchNoteById;
