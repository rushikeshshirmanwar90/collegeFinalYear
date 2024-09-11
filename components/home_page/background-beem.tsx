"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffectDemo } from "./autoTextgenerate";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <TextGenerateEffectDemo />
      </div>
      <BackgroundBeams />
    </div>
  );
}
