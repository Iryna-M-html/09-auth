import { NextResponse, NextRequest } from "next/server";
import { api, ApiError } from "../api";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const perPage = request.nextUrl.searchParams.get("perPage");
  const search = request.nextUrl.searchParams.get("search");
  const tag = request.nextUrl.searchParams.get("tag");

  console.log("Query parameters:", {
    page,
    perPage,
    search,
    tag,
  });

  try {
    const cookieStore = await cookies();
    const { data } = await api.get("/notes", {
      params: { page, perPage, search, tag },
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}

export async function POST(request: NextRequest) {
  const noteData = await request.json();

  try {
    const { data } = await api.post(`/notes`, noteData);
    return NextResponse.json(data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}
