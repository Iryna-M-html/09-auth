import { User } from "@/types/user";
import { nextServerApi, SessionResponse } from "./api";
import { cookies } from "next/headers";
import type { Note } from "../../types/note";
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
