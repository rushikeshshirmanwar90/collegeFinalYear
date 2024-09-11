import React from "react";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { successTost } from "../tost/all-tost";

interface SkillProps {
  skill: string;
  company: string;
  desc: string;
}

export const Skills: React.FC<SkillProps> = ({ skill, company, desc }) => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BracketsIcon className="text-black h-6 w-6" />
            <span className="font-bold">{skill}</span>
          </div>
          <span className="text-sm">{company}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{desc}</p>
        <div className="flex items-center space-x-2 mb-4">
          <CalendarIcon className="text-gray-500 h-5 w-5" />
          <span className="text-sm text-gray-500">Posted on 8 Jan 2024</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="ml-auto"
          onClick={() => {
            successTost("Added to wishlist successfully");
          }}
        >
          {" "}
          Add to wish-list{" "}
        </Button>
      </CardFooter>
    </Card>
  );
};

function BracketsIcon(props: any) {
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
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  );
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
