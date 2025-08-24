import { Image, ListImagesResponse } from "@/app/types/api";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  const images: Image[] = [];
  const uploadDir = path.resolve(process.cwd(), "uploads");

  if (fs.existsSync(uploadDir)) {
    const files = fs.readdirSync(uploadDir);
    const filteredFiles = search
      ? files.filter((file) =>
          file.toLowerCase().includes(search.toLowerCase())
        )
      : files;

    filteredFiles.forEach((file) => {
      images.push({
        fileName: file,
        url: `/api/images/${file}`,
      });
    });
  }

  return NextResponse.json<ListImagesResponse>({ images });
}
