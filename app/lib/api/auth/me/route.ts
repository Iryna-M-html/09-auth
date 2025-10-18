import { NextResponse } from "next/server";
import { api, ApiError } from "../../api";
import { cookies } from "next/headers";

export async function GET() {
  console.log("test get");
  //return NextResponse.json({ message: "ok" });
  const cookieStore = await cookies();
  try {
    const { data } = await api.get("/users/me", {
      headers: { Cookie: cookieStore.toString() },
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
