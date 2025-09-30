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
  page: number;
  totalPages: number;
}

interface FetchNotesParams {
  page?: number;
  query?: string;
}

export interface NewNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function fetchNotes(
  page = 1,
  perPage = 12,
  search = ""
): Promise<FetchNotesResponse> {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  const response = await axios.get<FetchNotesResponse>(
    
    "https://notehub-public.goit.study/api/notes",
    {
      params: { page, perPage, search },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export const createNote = async (noteData: NewNotePayload): Promise<Note> => {
  const response = await apiClient.post<Note>("/notes", noteData);
  return response.data;
};

///////
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
