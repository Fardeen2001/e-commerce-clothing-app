import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
  const { productDetailsId } = context.params;

  await mongoose.connect(process.env.MONGO_URI);
  let product = await Product.findOne({ slug: productDetailsId });

  let varients = await Product.find({ title: product.title });

  let colorSlug = {};
  for (let item of varients) {
    if (Object.keys(colorSlug).includes(item.varient)) {
      colorSlug[item.varient][item.size] = { productDetailsId: item.slug };
    } else {
      colorSlug[item.varient] = {};
      colorSlug[item.varient][item.size] = { productDetailsId: item.slug };
    }
  }

  return new Response(
    JSON.stringify({
      product,
      colorSlug,
    }),
    { status: 200 }
  );
}
