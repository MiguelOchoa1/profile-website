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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15 second timeout

    fetch("/api/spotify/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
      signal: controller.signal,
    })
      .then((r) => {
        clearTimeout(timeout);
        if (!r.ok) {
          console.error("Spotify token error:", r.status);
          throw new Error(`Token request failed with status ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        if (data.error) {
          console.error("Spotify API error:", data.error);
          throw new Error(data.error);
        }
        // store tokens in localStorage for the client player
        localStorage.setItem("spotify_access_token", data.access_token);
        localStorage.setItem("spotify_refresh_token", data.refresh_token || "");
        router.push("/");
      })
      .catch((error) => {
        clearTimeout(timeout);
        console.error("Spotify auth failed:", error.message);
        router.push("/");
      });
  }, [router]);

  return <div className="min-h-[60vh] flex items-center justify-center">Connecting to Spotify...</div>;
}
