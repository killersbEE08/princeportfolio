"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { techStack } from "@/config/tech-stack";

export function TechStackSection() {
  return (
    <Container>
      <SectionHeading title="Tech Stack" uppercase />
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Tooltip key={tech.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label={tech.name}
                className="flex size-[52px] items-center justify-center rounded-xl border border-dashed border-border bg-card/60 transition-colors hover:border-foreground/25 hover:bg-card dark:border-border dark:bg-white/95 dark:hover:bg-white"
              >
                {tech.icon ? (
                  <Image
                    src={
                      tech.icon.startsWith("http") || tech.icon.startsWith("/")
                        ? tech.icon
                        : `https://cdn.simpleicons.org/${tech.icon}`
                    }
                    alt={tech.name}
                    width={26}
                    height={26}
                    className="size-[26px] shrink-0"
                    unoptimized
                  />
                ) : (
                  <span className="px-1 text-center font-mono text-[10px] font-semibold leading-tight text-secondary dark:text-neutral-700">
                    {tech.name}
                  </span>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>{tech.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
