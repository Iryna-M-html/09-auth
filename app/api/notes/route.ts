import { NextResponse, NextRequest } from "next/server";
import { api, ApiError } from "../api";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const perPage = request.nextUrl.searchParams.get("perPage");
  const search = request.nextUrl.searchParams.get("search");
  const tag = request.nextUrl.searchParams.get("tag");
  try {
    const { data } = await api("/notes", {
      params: { page, perPage, search, tag },
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
