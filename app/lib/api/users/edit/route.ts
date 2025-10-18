import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { Console } from "console";

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  try {
    const cookieStore = await cookies();
    const apiRes = await api.patch("users/me", body, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(apiRes.data);
  } catch (err) {
    const error = err as ApiError;

    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    );
  }
}
