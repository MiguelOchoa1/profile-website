import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotify-callback";

  if (!clientId) {
    return NextResponse.json({ error: "Missing Spotify client ID" }, { status: 500 });
  }

  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
  ];

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    state: Math.random().toString(36).substring(7), // Simple state for CSRF protection
  });

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  return NextResponse.redirect(spotifyAuthUrl);
}
