import React from "react";

const AboutSkeleton = () => (
  <section className="py-28 bg-background overflow-hidden relative">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <div className="w-32 h-3 bg-muted rounded-full animate-pulse" />
          <div className="w-80 h-10 bg-muted rounded-2xl animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="w-28 h-8 bg-muted rounded-full animate-pulse" />
            <div className="space-y-3 w-full max-w-md">
              <div className="h-8 bg-muted rounded-xl animate-pulse w-3/4" />
              <div className="h-8 bg-muted rounded-xl animate-pulse w-5/6" />
            </div>
            <div className="space-y-3">
              {[1, 0.9, 0.7].map((w, i) => (
                <div
                  key={i}
                  className="h-4 bg-muted rounded-full animate-pulse"
                  style={{ width: `${w * 100}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-28 rounded-2xl bg-muted animate-pulse"
                />
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-44 h-8 bg-muted rounded-full animate-pulse" />
            <div className="pl-8 space-y-10">
              {[0, 1].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="w-28 h-3 bg-muted rounded-full animate-pulse" />
                  <div className="w-48 h-6 bg-muted rounded-xl animate-pulse" />
                  <div className="w-full h-20 bg-muted rounded-2xl animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSkeleton;
