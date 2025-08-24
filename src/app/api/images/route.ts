import { NextResponse } from "next/server";

export async function GET() {
// TODO: fetch images from storage

// TODO: return image by id from query params
  return NextResponse.json({ images: [
    { id: 1, url: "/images/sample1.jpg" },
    { id: 2, url: "/images/sample2.jpg" },
    { id: 3, url: "/images/sample3.jpg" },
  ] });
}

export async function DELETE() {
    // TODO: delete image by id from query params
    return NextResponse.json({ message: "Image deleted successfully" });
}
