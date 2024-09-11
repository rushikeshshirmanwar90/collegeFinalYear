"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"Welcome to JEMS - Your Gateway to Career Success!

Empowering students to conquer unemployment hurdles and navigate the maze of skills demanded by today's employers. Join us on the journey to unlock your potential and secure your dream career. Let's bridge the gap between education and employment together!"
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
