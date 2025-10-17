import axios from "axios";

export const nextServerApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});
export interface SessionResponse {
  success: boolean;
}
