import React from "react";

const SkeletonCard = ({ i }) => (
  <div
    className="flex flex-col bg-card rounded-3xl border border-border overflow-hidden"
    style={{ animationDelay: `${i * 0.07}s` }}
  >
    <div className="h-52 bg-muted animate-pulse" />
    <div className="p-6 space-y-4">
      <div className="h-4 bg-muted rounded-full animate-pulse w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded-full animate-pulse" />
        <div className="h-3 bg-muted rounded-full animate-pulse w-5/6" />
      </div>
      <div className="flex gap-2">
        {[40, 52, 44].map((w, j) => (
          <div
            key={j}
            className="h-6 bg-muted rounded-lg animate-pulse"
            style={{ width: w }}
          />
        ))}
      </div>
      <div className="flex gap-3 pt-1">
        <div className="flex-1 h-10 bg-muted rounded-xl animate-pulse" />
        <div className="flex-1 h-10 bg-muted rounded-xl animate-pulse" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
