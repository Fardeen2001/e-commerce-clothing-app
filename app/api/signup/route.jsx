import User from "@/models/User";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);
  const userData = await req.json();

  let user = new User(userData);
  await user.save();
  mongoose.disconnect();
  try {
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
