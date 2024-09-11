"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroHomeSection() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden mt-2">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <div className="flex flex-col gap-5">
          <span>Know the Mission</span> <span> But </span>{" "}
          <span>Need a Track</span>
        </div>
      </h1>
    </div>
  );
}
