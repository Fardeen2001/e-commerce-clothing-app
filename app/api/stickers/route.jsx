import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();

  let stickersCat = products.filter((item) => item.category === "Stickers");
  let stickers = {};
  for (let items of stickersCat) {
    if (items.title in stickers) {
      if (
        !stickers[items.title].varient.includes(items.varient) &&
        items.availableQty > 0
      ) {
        stickers[items.title].varient.push(items.varient);
      }
      if (
        !stickers[items.title].size.includes(items.size) &&
        items.availableQty > 0
      ) {
        stickers[items.title].size.push(items.size);
      }
    } else {
      stickers[items.title] = JSON.parse(JSON.stringify(items));
      if (items.availableQty > 0) {
        stickers[items.title].varient = [items.varient];
        stickers[items.title].size = [items.size];
      }
    }
  }

  return new Response(
    JSON.stringify({
      stickers,
    }),
    { status: 200 }
  );
}
