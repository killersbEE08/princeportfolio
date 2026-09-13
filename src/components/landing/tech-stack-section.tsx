"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { techGroups, type TechItem } from "@/config/tech-stack";

function TechChip({ item }: { item: TechItem }) {
  const [failed, setFailed] = useState(false);
  const isUrl = item.icon.startsWith("http") || item.icon.startsWith("/");
  const src = isUrl ? item.icon : `https://cdn.simpleicons.org/${item.icon}`;
  const showIcon = Boolean(item.icon) && !failed;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-2.5 py-1.5 text-sm font-medium text-foreground">
      {showIcon && (
        <span className="flex size-4 shrink-0 items-center justify-center">
          <Image
            src={src}
            alt=""
            width={16}
            height={16}
            className="size-4"
            unoptimized
            onError={() => setFailed(true)}
          />
        </span>
      )}
      {item.name}
    </span>
  );
}

export function TechStackSection() {
  return (
    <Container>
      <SectionHeading title="Tech Stack" uppercase />
      <div className="flex flex-col gap-5">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-secondary">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechChip key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
