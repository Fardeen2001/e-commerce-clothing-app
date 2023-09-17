import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  // const products = await req.json();
  await mongoose.connect(process.env.MONGO_URI);
  for (let i = 0; i <= req.body.length; i++) {
    let product = new Product({
      title: req.body[i].title,
      slug: req.body[i].slug,
      description: req.body[i].description,
      image: req.body[i].image,
      category: req.body[i].category,
      size: req.body[i].size,
      varient: req.body[i].varient,
      price: req.body[i].price,
      availableQty: req.body[i].availableQty,
    });
    await product.save();
  }

  try {
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
