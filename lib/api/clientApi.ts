import type { Note, NoteTag } from "../../types/note";
import { User, RegisterRequest, LoginRequest, EditRequest } from "@/types/user";
import { nextServerApi, SessionResponse } from "./api";

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
  const response = await nextServerApi.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, search, tag },
  });
  return response.data;
}

export const createNote = async (noteData: NewNotePayload): Promise<Note> => {
  const response = await nextServerApi.post<Note>("/notes", noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  if (!id) {
    throw new Error("Note ID is required for deletion");
  }
  const response = await nextServerApi.delete<Note>(`/notes/${id}`);
  return response.data;
};
export const fetchNoteById = async (id: string): Promise<Note> => {
  if (!id) {
    throw new Error("Note ID is required");
  }
  const response = await nextServerApi.get<Note>(`/notes/${id}`);
  return response.data;
};

export const getSingleNote = fetchNoteById;

// export interface RegisterRequest {
//   email: string;
//   password: string;
//   //username: string;
// }
export const register = async (body: RegisterRequest) => {
  const { data } = await nextServerApi.post<User>(`/auth/register`, body);
  return data;
};

// export interface LoginRequest {
//   email: string;
//   password: string;
// }
export const login = async (body: LoginRequest) => {
  const { data } = await nextServerApi.post<User>(`/auth/login`, body);
  return data;
};

// export interface EditRequest {
//   // email: string;
//   username: string;
// }
export const editUser = async (body: EditRequest) => {
  const { data } = await nextServerApi.patch<User>(`/users/me`, body);
  return data;
};

export const checkSession = async (): Promise<SessionResponse> => {
  const { data } = await nextServerApi.get<SessionResponse>(`/auth/session`);
  return data;
};

export const getMe = async () => {
  const { data } = await nextServerApi.get<User>(`/users/me`);
  return data;
};

export const logOut = async () => {
  await nextServerApi.post(`/auth/logout`);
};
