import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  return new Response(JSON.stringify([561202, 572101, 578901, 57102]), {
    status: 200,
  });
}
