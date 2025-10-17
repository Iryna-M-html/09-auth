import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const { data } = await api.get(`/notes/${id}`);
    return NextResponse.json(data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}
interface PropsNoteid {
  params: Promise<{ noteId: string }>;
}
export async function DELETE(request: NextRequest, { params }: PropsNoteid) {
  const { noteId } = await params;
  try {
    const { data } = await api.get(`/notes/${noteId}`);
    return NextResponse.json(data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}
