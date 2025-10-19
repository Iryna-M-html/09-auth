import { NextResponse } from "next/server";
import { api } from "../../api";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { logErrorResponse } from "../../auth/utils/logErrorResponse";
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
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    if (isAxiosError(err)) {
      logErrorResponse(err);
      return NextResponse.json(
        { error: err.response?.data?.error ?? err.message },
        { status: err.response?.status ?? 500 }
      );
    }

    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
