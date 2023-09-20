import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();

  let hoodieCat = products.filter((item) => item.category === "Hoodie");
  let hoodies = {};
  for (let items of hoodieCat) {
    if (items.title in hoodies) {
      if (
        !hoodies[items.title].varient.includes(items.varient) &&
        items.availableQty > 0
      ) {
        hoodies[items.title].varient.push(items.varient);
      }
      if (
        !hoodies[items.title].size.includes(items.size) &&
        items.availableQty > 0
      ) {
        hoodies[items.title].size.push(items.size);
      }
    } else {
      hoodies[items.title] = JSON.parse(JSON.stringify(items));
      if (items.availableQty > 0) {
        hoodies[items.title].varient = [items.varient];
        hoodies[items.title].size = [items.size];
      }
    }
  }

  return new Response(
    JSON.stringify({
      hoodies,
    }),
    { status: 200 }
  );
}
