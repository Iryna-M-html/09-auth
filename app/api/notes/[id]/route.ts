import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { logErrorResponse } from "@/app/api/auth/utils/logErrorResponse";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const cookieStore = await cookies();
    const apiRes = await api.get(`/notes/${id}`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
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

interface PropsNoteid {
  params: Promise<{ id: string }>;
}

export async function DELETE(request: NextRequest, { params }: PropsNoteid) {
  const { id } = await params;
  try {
    const cookieStore = await cookies();
    const apiRes = await api.delete(`/notes/${id}`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
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

export async function PATCH(request: NextRequest, { params }: PropsNoteid) {
  const { id } = await params;
  const cookieStore = await cookies();
  const body = await request.json();

  try {
    const apiRes = await api.patch(`/notes/${id}`, body, {
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
