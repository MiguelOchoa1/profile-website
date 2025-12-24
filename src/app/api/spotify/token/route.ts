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

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const tokenJson = await tokenRes.json();
  return NextResponse.json(tokenJson);
}
