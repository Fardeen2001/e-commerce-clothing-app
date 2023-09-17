import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req) {
  const products = await req.json();

  await mongoose.connect(process.env.MONGO_URI);
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    let product = await Product.findByIdAndUpdate(products[i]._id, products[i]);
  }

  try {
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
