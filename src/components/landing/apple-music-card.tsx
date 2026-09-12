"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { recentTracks } from "@/config/music";

const APPLE_MUSIC_RED = "#FA233B";

// One track per part of the day. Indexes map into `recentTracks`:
// 0 God Mode Begins · 1 Raga of Revenge · 2 Closer · 3 changes
function pickByHour(hour: number): { index: number; label: string } {
  if (hour >= 5 && hour < 12) return { index: 1, label: "Morning" }; // Raga of Revenge
  if (hour >= 12 && hour < 17) return { index: 2, label: "Afternoon" }; // Closer
  if (hour >= 17 && hour < 21) return { index: 3, label: "Evening" }; // changes
  return { index: 0, label: "Night" }; // God Mode Begins
}

export function AppleMusicCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Deterministic first render (Night) to avoid hydration mismatch; the real
  // local-time pick is applied right after mount.
  const [pick, setPick] = useState(() => pickByHour(21));

  useEffect(() => {
    setPick(pickByHour(new Date().getHours()));
  }, []);

  const track = recentTracks[pick.index];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Stop playback when the featured track changes.
  useEffect(() => {
    setIsPlaying(false);
  }, [pick.index]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="sm"
      borderRadius="14px"
      blurIntensity="sm"
      className="w-full p-3"
      contentClassName="relative z-10"
    >
      <audio ref={audioRef} src={track.previewUrl} preload="none" />

      <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium text-secondary">
        <span
          className="size-1.5 rounded-full"
          style={{ backgroundColor: APPLE_MUSIC_RED }}
        />
        {pick.label} pick · Apple Music
      </div>

      <div className="flex items-center gap-3">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={track.albumArt}
            alt={`${track.title} album art`}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <Link
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block truncate text-sm font-semibold text-foreground hover:underline"
          >
            {track.title}
          </Link>
          <p className="truncate text-xs text-secondary">{track.artist}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((current) => !current)}
          aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition hover:scale-105"
          style={{ backgroundColor: APPLE_MUSIC_RED }}
        >
          {isPlaying ? (
            <Pause className="size-4" weight="fill" />
          ) : (
            <Play className="ml-0.5 size-4" weight="fill" />
          )}
        </button>
      </div>
    </LiquidGlassCard>
  );
}
