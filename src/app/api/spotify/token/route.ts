import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const code = body.code as string;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotify-callback";

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: "Missing Spotify client credentials" }, { status: 500 });
  }

  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!tokenRes.ok) {
      const error = await tokenRes.text();
      return NextResponse.json({ error: error || "Failed to get token" }, { status: tokenRes.status });
    }

    const tokenJson = await tokenRes.json();
    return NextResponse.json(tokenJson);
  } catch (error: any) {
    clearTimeout(timeout);
    if (error.name === "AbortError") {
      return NextResponse.json({ error: "Request timeout - Spotify API took too long to respond" }, { status: 504 });
    }
    return NextResponse.json({ error: "Failed to fetch token", details: error.message }, { status: 500 });
  }
}
