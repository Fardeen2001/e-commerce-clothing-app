import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();
  let tshirts = {};
  for (let items of products) {
    if (items.title in tshirts) {
      if (
        !tshirts[items.title].varient.includes(items.varient) &&
        items.availableQty > 0
      ) {
        tshirts[items.title].varient.push(items.varient);
      }
      if (
        !tshirts[items.title].size.includes(items.size) &&
        items.availableQty > 0
      ) {
        tshirts[items.title].size.push(items.size);
      }
    } else {
      tshirts[items.title] = JSON.parse(JSON.stringify(items));
      if (items.availableQty > 0) {
        tshirts[items.title].varient = [items.varient];
        tshirts[items.title].size = [items.size];
      }
    }
  }

  return new Response(
    JSON.stringify({
      tshirts,
    }),
    { status: 200 }
  );
}
