import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // TODO: upload file to storage, disk for now 
    return NextResponse.json({ message: "File uploaded successfully" });
}
