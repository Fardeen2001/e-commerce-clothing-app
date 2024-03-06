import Orders from "@/models/Orders";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req, res) {
  await mongoose.connect(process.env.MONGO_URI);
  const { cartItems, total, oid, name, email, address, phone, pincode } =
    await req.json();

  let order = new Orders({
    name: name,
    email: email,
    orderId: oid,
    products: cartItems,
    address: address,
    phone: phone,
    pincode: pincode,
    amount: total,
  });
  await order.save();

  let TRX_ID = Math.floor(Math.random() * Date.now() * 100000000);
  mongoose.disconnect();
  try {
    return NextResponse.json({ success: true, TRX_ID, oid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
