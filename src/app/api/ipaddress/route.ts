import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const ip = request.headers.get("x-forwarded-for");

  return NextResponse.json(
    { ipaddress: ip },
    {
      status: 200,
    }
  );
}
