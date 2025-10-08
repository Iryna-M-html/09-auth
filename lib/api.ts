import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const apiClient = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

apiClient.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface FetchNotesResponse {
  notes: Note[];

  totalPages: number;
}

interface FetchNotesParams {
  page?: number;
  search?: string;
  perPage?: number;
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
  const response = await apiClient.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, search, tag },
  });
  const notes = response.data;
  if (!tag) return notes;

  const notes_filtered = notes;
  notes_filtered.notes = notes.notes.filter((note) => note.tag === tag);
  return notes_filtered;
}

export const createNote = async (noteData: NewNotePayload): Promise<Note> => {
  const response = await apiClient.post<Note>("/notes", noteData);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  if (!noteId) {
    throw new Error("Note ID is required for deletion");
  }
  const response = await apiClient.delete<Note>(`/notes/${noteId}`);
  return response.data;
};
export const fetchNoteById = async (id: string): Promise<Note> => {
  if (!id) {
    throw new Error("Note ID is required");
  }
  const response = await apiClient.get<Note>(`/notes/${id}`);
  return response.data;
};

export const getSingleNote = fetchNoteById;
