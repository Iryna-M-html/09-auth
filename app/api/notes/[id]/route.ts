import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { cookies } from "next/headers";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const cookieStore = await cookies();
    const { data } = await api.get(`/notes/${id}`, {
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
interface PropsNoteid {
  params: Promise<{ id: string }>;
}
export async function DELETE(request: NextRequest, { params }: PropsNoteid) {
  const { id } = await params;
  try {
    const cookieStore = await cookies();
    const { data } = await api.delete(`/notes/${id}`, {
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
