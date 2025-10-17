import { NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  try {
    await api.post(
      "/auth/logout",
      {},
      { headers: { Cookie: cookieStore.toString() } }
    );

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    return NextResponse.json({});
  } catch (err) {
    const error = err as ApiError;

    // --- Detailed logging for debugging ---
    console.error("----- API POST ERROR -----");
    //console.error("Request body:", body);

    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      console.error("Response data:", error.response.data);
    } else {
      console.error("No response received, error message:", error.message);
    }

    console.error("Full error object:", error);
    console.error("--------------------------");

    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}
