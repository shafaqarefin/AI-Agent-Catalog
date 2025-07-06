import { NextResponse } from "next/server";
import agents from "@/data/mock-agents.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json(agents);
}
