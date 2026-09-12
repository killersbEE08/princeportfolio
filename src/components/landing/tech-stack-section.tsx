"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { techStack, type TechItem } from "@/config/tech-stack";

function TechButton({ tech }: { tech: TechItem }) {
  const [failed, setFailed] = useState(false);
  const isUrl = tech.icon.startsWith("http") || tech.icon.startsWith("/");
  const src = isUrl ? tech.icon : `https://cdn.simpleicons.org/${tech.icon}`;
  const showText = !tech.icon || failed;

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={tech.name}
          className="flex size-[52px] items-center justify-center rounded-xl border border-dashed border-border bg-card/60 transition-colors hover:border-foreground/25 hover:bg-card dark:border-border dark:bg-white/95 dark:hover:bg-white"
        >
          {showText ? (
            <span className="px-1 text-center font-mono text-[10px] font-semibold leading-tight text-secondary dark:text-neutral-700">
              {tech.name}
            </span>
          ) : (
            <Image
              src={src}
              alt={tech.name}
              width={26}
              height={26}
              className="size-[26px] shrink-0"
              unoptimized
              onError={() => setFailed(true)}
            />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>{tech.name}</TooltipContent>
    </Tooltip>
  );
}

export function TechStackSection() {
  return (
    <Container>
      <SectionHeading title="Tech Stack" uppercase />
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <TechButton key={tech.name} tech={tech} />
        ))}
      </div>
    </Container>
  );
}
