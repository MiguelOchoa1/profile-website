"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
    Spotify?: any;
  }
}

export default function SpotifyWebPlayer() {
  const [token, setToken] = useState<string | null>(null);
  const [player, setPlayer] = useState<any>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [paused, setPaused] = useState(true);
  const [track, setTrack] = useState<any>(null);

  useEffect(() => {
    const t = localStorage.getItem("spotify_access_token");
    if (t) setToken(t);
  }, []);

  useEffect(() => {
    if (!token) return;

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Website Player",
        getOAuthToken: (cb: (t: string) => void) => {
          cb(token);
        },
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }: { device_id: string }) => {
        setDeviceId(device_id);
      });

      player.addListener("player_state_changed", (state: any) => {
        if (!state) return;
        setPaused(state.paused);
        setTrack(state.track_window.current_track);
      });

      player.connect();
    };

    return () => {
      // cleanup
      if (window.Spotify && player) player.disconnect();
    };
  }, [token]);

  const transferPlayback = async () => {
    if (!deviceId || !token) return;
    await fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ device_ids: [deviceId], play: true }),
    });
  };

  const togglePlay = async () => {
    if (!player) return;
    const state = await player.getCurrentState();
    if (!state) return;
    if (state.paused) {
      player.resume();
    } else {
      player.pause();
    }
  };

  const next = async () => player?.nextTrack();
  const prev = async () => player?.previousTrack();

  if (!token) {
    return (
      <div>
        <a href="/api/spotify/login" className="inline-flex items-center gap-2 rounded-md border px-3 py-2">
          Connect Spotify
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button onClick={togglePlay} className="px-3 py-2 rounded bg-emerald-600 text-white">
          {paused ? "Play/Pause" : "Pause"}
        </button>
        <button onClick={prev} className="px-3 py-2 rounded border">
          Prev
        </button>
        <button onClick={next} className="px-3 py-2 rounded border">
          Next
        </button>
        <button onClick={transferPlayback} className="px-3 py-2 rounded border">
          Transfer to this device
        </button>
      </div>
      {track && (
        <div className="text-sm">
          Now playing: {track.name} — {track.artists.map((a: any) => a.name).join(", ")}
        </div>
      )}
    </div>
  );
}
