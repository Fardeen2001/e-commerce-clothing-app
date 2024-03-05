import Orders from "@/models/Orders";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
  await mongoose.connect(process.env.MONGO_URI);
  let orders = await Orders.find();

  return new Response(
    JSON.stringify({
      orders,
    }),
    { status: 200 }
  );
}
