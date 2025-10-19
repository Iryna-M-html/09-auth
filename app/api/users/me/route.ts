import { NextResponse } from "next/server";
import { api } from "../../api";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { logErrorResponse } from "@/app/api/auth/utils/logErrorResponse";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  try {
    const apiRes = await api.get("/users/me", {
      headers: { Cookie: cookieStore.toString() },
    });

    return NextResponse.json(apiRes.data, { status: apiRes.status });
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

export async function PATCH(request: Request) {
  const cookieStore = await cookies();
  const body = await request.json();

  try {
    const apiRes = await api.patch("/users/me", body, {
      headers: { Cookie: cookieStore.toString() },
    });

    return NextResponse.json(apiRes.data, { status: apiRes.status });
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
