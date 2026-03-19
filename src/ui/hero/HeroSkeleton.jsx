import React from "react";

const HeroSkeleton = () => (
  <div className="relative min-h-screen w-full bg-background flex items-center justify-center overflow-hidden">
    {/* Grid bg */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(to right,  color-mix(in oklch, var(--foreground) 4%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 4%, transparent) 1px, transparent 1px)
        `,
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,var(--background)_100%)]" />

    <div className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-3xl">
      {/* Badge */}
      <div className="w-52 h-7 rounded-full bg-muted animate-pulse" />
      {/* Title */}
      <div className="space-y-4 w-full flex flex-col items-center">
        <div className="w-[70%] h-16 md:h-24 rounded-2xl bg-muted animate-pulse" />
        <div className="w-[50%] h-16 md:h-24 rounded-2xl bg-muted animate-pulse" />
      </div>
      {/* Subtitle */}
      <div className="w-48 h-5 rounded-full bg-muted animate-pulse" />
      {/* Description */}
      <div className="space-y-2.5 w-full max-w-xl flex flex-col items-center">
        <div className="w-full h-4 rounded-full bg-muted animate-pulse" />
        <div className="w-5/6 h-4 rounded-full bg-muted animate-pulse" />
        <div className="w-4/6 h-4 rounded-full bg-muted animate-pulse" />
      </div>
      {/* Buttons */}
      <div className="flex gap-4">
        <div className="w-40 h-14 rounded-2xl bg-muted animate-pulse" />
        <div className="w-40 h-14 rounded-2xl bg-muted animate-pulse" />
      </div>
      {/* Tech tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {[60, 72, 64, 80].map((w, i) => (
          <div
            key={i}
            className="h-8 rounded-xl bg-muted animate-pulse"
            style={{ width: w }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default HeroSkeleton;
