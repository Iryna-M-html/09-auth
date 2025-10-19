import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { isAxiosError } from "axios";
import { logErrorResponse } from "@/app/api/auth/utils/logErrorResponse";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const apiRes = await api.post("/auth/login", body);
    const cookieStore = await cookies();
    const setCookie = apiRes.headers["set-cookie"];

    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };
        if (parsed.accessToken)
          cookieStore.set("accessToken", parsed.accessToken, options);
        if (parsed.refreshToken)
          cookieStore.set("refreshToken", parsed.refreshToken, options);
      }

      return NextResponse.json(apiRes.data, { status: apiRes.status });
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
