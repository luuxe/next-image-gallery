import { NextRequest, NextResponse } from "next/server";
import { ListImagesResponse } from "@/app/types/api";
import fs from "fs";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/images/[fileName]">
) {
  const { fileName } = await ctx.params;

  const filePath = process.cwd() + `/public/uploads/${fileName}`;
  if (fs.existsSync(filePath)) {
    return NextResponse.json<ListImagesResponse>({
      images: [
        {
          fileName,
          url: `/uploads/${fileName}`,
        },
      ],
    });
  } else {
    return NextResponse.json(
      { message: `Could not find ${fileName}` },
      { status: 404 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  ctx: RouteContext<"/api/images/[fileName]">
) {
  const { fileName } = await ctx.params;

  const filePath = process.cwd() + `/public/uploads/${fileName}`;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  } else {
    return NextResponse.json(
      { message: `${fileName} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: `${fileName} deleted successfully` });
}
