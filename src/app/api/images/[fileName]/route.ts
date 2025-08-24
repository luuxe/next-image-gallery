import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime";

// shout out to this guy: https://stackoverflow.com/questions/70490959/next-js-serving-static-files-that-are-not-included-in-the-build-or-source-code
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ fileName: string }> }
) {
  const { fileName } = await params;

  const filePath = path.resolve(process.cwd(), `uploads/${fileName}`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { message: `Could not find ${fileName}` },
      { status: 404 }
    );
  }

  const buffer = fs.readFileSync(filePath);
  const contentType = mime.getType(filePath) || "application/octet-stream";

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${fileName}"`,
    },
  });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ fileName: string }> }
) {
  const { fileName } = await params;

  const filePath = process.cwd() + `/uploads/${fileName}`;
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
