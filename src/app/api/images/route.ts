import { Image, ListImagesResponse } from "@/app/types/api";
import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const images: Image[] = [];

  const uploadDir = process.cwd() + "/public/uploads";

  if (fs.existsSync(uploadDir)) {
    const files = fs.readdirSync(uploadDir);

    console.log("files in upload dir", files);

    files.forEach((file) => {
      images.push({
        fileName: file,
        url: `/uploads/${file}`,
      });
    });
  }

  return NextResponse.json<ListImagesResponse>({ images });
}
