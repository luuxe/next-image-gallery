import { UploadResponse } from "@/app/types/api";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// export async function POST(req: Request) {
//     // TODO: upload file to storage, disk for now 
//     return NextResponse.json<UploadResponse>({ success: false }, { status: 400 });
// }

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
        return NextResponse.json<UploadResponse>({ success: false }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public", "uploads");

    try {
        await writeFile(path.join(uploadDir, file.name), buffer);
    } catch (error) {
        console.error("Error writing file:", error);
        return NextResponse.json<UploadResponse>({ success: false }, { status: 500 });
    }

    const fileUrl = `/uploads/${file.name}`;

    console.log("file url", fileUrl);

    return NextResponse.json<UploadResponse>({ success: true, url: fileUrl });
}