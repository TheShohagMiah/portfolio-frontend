import React from "react";

const ServiceCardSkeleton = ({ tall }) => (
  <div
    className={`rounded-3xl border border-border bg-card animate-pulse ${tall ? "min-h-[320px]" : "min-h-[240px]"} p-7 flex flex-col justify-between`}
  >
    <div className="w-11 h-11 rounded-2xl bg-muted" />
    <div className="space-y-3 mt-auto">
      <div className="h-5 bg-muted rounded-full w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded-full" />
        <div className="h-3 bg-muted rounded-full w-5/6" />
      </div>
    </div>
  </div>
);

export default ServiceCardSkeleton;
