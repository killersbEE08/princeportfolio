"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { favoriteTrack } from "@/config/music";
import { cn } from "@/lib/utils";

const track = {
  title: favoriteTrack.title,
  artist: favoriteTrack.artist,
  album: favoriteTrack.album,
  albumArt: favoriteTrack.albumArt,
  songUrl: favoriteTrack.songUrl,
  previewUrl: favoriteTrack.audioSrc || null,
};

const APPLE_MUSIC_RED = "#FA233B";

export function AppleMusicCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playable = track.previewUrl;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !playable) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, playable]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => audio.removeEventListener("ended", handleEnded);
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
      <audio ref={audioRef} src={playable ?? undefined} preload="metadata" />

      <div className="flex items-center gap-3">
        <div className="relative flex h-[84px] w-[108px] shrink-0 items-center">
          <button
            type="button"
            onClick={() => setIsPlaying((current) => !current)}
            disabled={!playable}
            className="group relative z-20 size-20 overflow-hidden rounded-full bg-black shadow-[0_10px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/15 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed"
            aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
          >
            <Image
              src={track.albumArt}
              alt={`${track.title} album art`}
              fill
              sizes="80px"
              className={cn(
                "rounded-full object-cover",
                isPlaying && "animate-vinyl-spin",
              )}
              priority={false}
            />
          </button>

          <div
            className={cn(
              "pointer-events-none absolute right-1 top-2 z-30 h-4 w-10 origin-right transition-transform duration-700 ease-out",
              isPlaying ? "rotate-0" : "rotate-[18deg]",
            )}
          >
            <span className="absolute right-0 top-1/2 size-4 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
            <span className="absolute right-2 top-1/2 h-1 w-9 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_2px_4px_rgba(0,0,0,0.18)]" />
            <span
              className="absolute -left-0.5 top-1/2 size-2.5 -translate-y-1/2 rounded-full shadow-sm"
              style={{ backgroundColor: APPLE_MUSIC_RED }}
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[10px] font-medium text-secondary">
            <span
              className="size-1.5 rounded-full"
              style={{ backgroundColor: APPLE_MUSIC_RED }}
            />
            Apple Music
          </p>

          <Link
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 block truncate text-sm font-semibold text-foreground hover:underline"
          >
            {track.title}
          </Link>
          <p className="truncate text-xs text-secondary">{track.artist}</p>

          <Link
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block truncate text-[10px] text-secondary underline-offset-2 hover:text-foreground hover:underline"
          >
            My favorite · {track.album}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((current) => !current)}
          disabled={!playable}
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: APPLE_MUSIC_RED }}
          aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
        >
          {isPlaying ? (
            <Pause className="size-4" weight="fill" />
          ) : (
            <Play className="ml-0.5 size-4" weight="fill" />
          )}
        </button>
      </div>

      {!playable && (
        <p className="mt-2 text-[10px] leading-relaxed text-secondary">
          Add an audio preview to enable playback.
        </p>
      )}
    </LiquidGlassCard>
  );
}
