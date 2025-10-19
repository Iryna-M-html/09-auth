import { NextResponse, NextRequest } from "next/server";
import { api } from "../api";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { logErrorResponse } from "@/app/api/auth/utils/logErrorResponse";
export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") ?? "1";
  const perPage = request.nextUrl.searchParams.get("perPage") ?? "10";
  const search = request.nextUrl.searchParams.get("search") ?? "";
  const tag = request.nextUrl.searchParams.get("tag") ?? "";

  const params: Record<string, string> = { page, perPage };
  if (search) params.search = search;
  if (tag && tag !== "All") params.tag = tag;

  try {
    const cookieStore = await cookies();
    const apiRes = await api.get("/notes", {
      params,
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

export async function POST(request: NextRequest) {
  const noteData = await request.json();

  try {
    const cookieStore = await cookies();
    const apiRes = await api.post(`/notes`, noteData, {
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
