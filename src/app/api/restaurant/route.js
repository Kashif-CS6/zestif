import mongoose from "mongoose";
import { connectionStr } from "../../lib/db";
import { NextResponse } from "next/server";
import { Restaurant } from "../../lib/restaurantModel";

console.log(connectionStr);

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await Restaurant.find();
  console.log(data);
  return NextResponse.json({ result: "Database connected Successfully!" });
}
