"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { recentTracks } from "@/config/music";

const APPLE_MUSIC_RED = "#FA233B";

export function AppleMusicCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingIndex === null) {
      audio.pause();
      return;
    }

    const src = recentTracks[playingIndex]?.previewUrl;
    if (!src) return;

    if (audio.src !== src) audio.src = src;
    audio.play().catch(() => setPlayingIndex(null));
  }, [playingIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setPlayingIndex(null);
    audio.addEventListener("ended", onEnded);

    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const toggle = (index: number) =>
    setPlayingIndex((current) => (current === index ? null : index));

  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="sm"
      borderRadius="14px"
      blurIntensity="sm"
      className="w-full p-3"
      contentClassName="relative z-10"
    >
      <audio ref={audioRef} preload="none" />

      <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium text-secondary">
        <span
          className="size-1.5 rounded-full"
          style={{ backgroundColor: APPLE_MUSIC_RED }}
        />
        Recently played · Apple Music
      </div>

      <div className="flex flex-col gap-0.5">
        {recentTracks.map((track, index) => {
          const isPlaying = playingIndex === index;

          return (
            <div
              key={track.songUrl}
              className="group flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-muted/60"
            >
              <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={track.albumArt}
                  alt={`${track.title} album art`}
                  fill
                  sizes="40px"
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
                onClick={() => toggle(index)}
                aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition hover:scale-105"
                style={{ backgroundColor: APPLE_MUSIC_RED }}
              >
                {isPlaying ? (
                  <Pause className="size-3.5" weight="fill" />
                ) : (
                  <Play className="ml-0.5 size-3.5" weight="fill" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </LiquidGlassCard>
  );
}
