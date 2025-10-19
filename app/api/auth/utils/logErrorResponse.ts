import { isAxiosError } from "axios";

export function logErrorResponse(error: unknown) {
  if (isAxiosError(error)) {
    console.error(
      "Axios error:",
      error.response?.status,
      error.response?.data || error.message
    );
  } else {
    console.error("Unexpected error:", error);
  }
}
