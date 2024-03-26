import Orders from "@/models/Orders";
import mongoose from "mongoose";
var jwt = require("jsonwebtoken");
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  const { token } = await req.json();
  const data = jwt.verify(token, process.env.AES_SECRET);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    let orders = await Orders.find({ email: data.email });

    if (!orders) {
      throw new Error("order not found");
    }
    return NextResponse.json({ orders: orders }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "order not found" }, { status: 404 });
  }
}
