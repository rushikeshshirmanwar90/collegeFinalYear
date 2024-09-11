"use client";
import { Skills } from "@/components/custom/skill-section";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <HeartIcon className="w-6 h-6" />
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>
      <div className="grid gap-4">
        <Skills
          company="IBM"
          skill="Cyber Security"
          desc="We provide comprehensive cybersecurity solutions to clients across various industries, ensuring their digital assets remain secure and resilient. As a Cybersecurity Analyst, you will be an integral part of our team, safeguarding our clients' systems and information from cyber attacks."
        />
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
