import User from "@/models/User";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);

  const { email, password } = await req.json();

  const user = await User.findOne({ email: email });

  if (user) {
    if (email === user.email && password === user.password) {
      return NextResponse.json(
        { success: true, email: user.email, name: user.name },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "invalid Credentials" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { success: false, error: "invalid user" },
      { status: 400 }
    );
  }
}
