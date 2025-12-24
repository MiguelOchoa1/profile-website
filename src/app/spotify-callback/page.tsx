"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SpotifyCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) {
      router.push("/");
      return;
    }

    // Exchange code for tokens via our server endpoint
    fetch("/api/spotify/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((r) => r.json())
      .then((data) => {
        // store tokens in localStorage for the client player
        localStorage.setItem("spotify_access_token", data.access_token);
        localStorage.setItem("spotify_refresh_token", data.refresh_token || "");
        router.push("/");
      })
      .catch(() => router.push("/"));
  }, [router]);

  return <div className="min-h-[60vh] flex items-center justify-center">Connecting to Spotify...</div>;
}
