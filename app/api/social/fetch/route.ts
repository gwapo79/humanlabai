import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("Starting Social Feed Fetch...");

        // MVP: Fetch Instagram
        await fetchInstagram();

        // MVP: Fetch YouTube
        await fetchYouTube();

        return NextResponse.json({ success: true, message: "Feeds updated" });
    } catch (error) {
        console.error("Feed fetch error:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}

async function fetchInstagram() {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!token || token.includes("placeholder")) {
        console.log("Skipping real Instagram fetch (No Token).");
        return;
    }

    // Real logic would be here:
    // const res = await fetch(`https://graph.instagram.com/me/media?fields...&access_token=${token}`);
    // const data = await res.json();
    // Loop and upsert into ActivityLog
}

async function fetchYouTube() {
    const key = process.env.YOUTUBE_API_KEY;
    if (!key || key.includes("placeholder")) {
        console.log("Skipping real YouTube fetch (No Key).");
        return;
    }

    // Real logic would be here
}
