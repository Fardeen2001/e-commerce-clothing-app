import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();

  return new Response(
    JSON.stringify({
      products,
    }),
    { status: 200 }
  );
}
