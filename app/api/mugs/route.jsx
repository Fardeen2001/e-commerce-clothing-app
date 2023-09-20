import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();

  let mugsCat = products.filter((item) => item.category === "Mugs");
  let mugs = {};
  for (let items of mugsCat) {
    if (items.title in mugs) {
      if (
        !mugs[items.title].varient.includes(items.varient) &&
        items.availableQty > 0
      ) {
        mugs[items.title].varient.push(items.varient);
      }
      if (
        !mugs[items.title].size.includes(items.size) &&
        items.availableQty > 0
      ) {
        mugs[items.title].size.push(items.size);
      }
    } else {
      mugs[items.title] = JSON.parse(JSON.stringify(items));
      if (items.availableQty > 0) {
        mugs[items.title].varient = [items.varient];
        mugs[items.title].size = [items.size];
      }
    }
  }

  return new Response(
    JSON.stringify({
      mugs,
    }),
    { status: 200 }
  );
}
