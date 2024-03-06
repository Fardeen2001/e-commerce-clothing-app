import Orders from "@/models/Orders";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URI);
  const { TRX_ID, orderId } = await req.json();

  const data = await Orders.findOneAndUpdate(
    { orderId: orderId },
    { trxId: TRX_ID, orderStatus: "paid" }
  );

  return NextResponse.json({ data }, { status: 201 });
}
