import Orders from "@/models/Orders";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
  const { orderId } = context.params;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    let orders = await Orders.findById(orderId);

    if (!orders) {
      throw new Error("order not found");
    }
    return new Response(
      JSON.stringify({
        orders: orders,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify("order not found"), { status: 404 });
  }
}
