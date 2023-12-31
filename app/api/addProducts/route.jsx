import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  const products = await req.json();

  await mongoose.connect(process.env.MONGO_URI);
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    let product = new Product({
      title: products[i].title,
      slug: products[i].slug,
      description: products[i].description,
      image: products[i].image,
      category: products[i].category,
      size: products[i].size,
      varient: products[i].varient,
      price: products[i].price,
      availableQty: products[i].availableQty,
    });
    await product.save();
  }

  try {
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
