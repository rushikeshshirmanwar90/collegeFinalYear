"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Resume() {
  const { push } = useRouter();
  const [selectedSkill, setSelectedSkill] = useState(""); // State to hold the selected skill

  // Function to handle skill selection change
  const handleSkillChange = (event: any) => {
    setSelectedSkill(event.target.value);
    console.log(selectedSkill);
  };

  useEffect(() => {
    console.log(selectedSkill); // This will log the updated value of selectedSkill whenever it changes
  }, [selectedSkill]);

  const handleTest = (selectedSkill: any) => {
    push('/exam/react');
  };

  return (
    <div className="w-full py-12 space-y-2">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-3xl gap-4 mx-auto">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
              Rushikesh Shrimanwar
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
          <Separator />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <a
                  className="text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  jane@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <HomeIcon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  San Francisco, CA
                </span>
              </div>
            </div>
            <div className="space-y-2 text-right md:text-left">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <a
                  className="text-sm font-medium text-gray-900 dark:text-gray-50"
                  href="#"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Education</h2>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold">
                    Master of Computer Science
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Stanford University
                  </span>
                </div>
                <span className="text-sm font-medium">2012 - 2014</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold">
                    Bachelor of Computer Science
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    University of California, Berkeley
                  </span>
                </div>
                <span className="text-sm font-medium">2008 - 2012</span>
              </div>
            </div>
            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-lg font-semibold">Skills</h2>
                <Dialog>
                  <DialogTrigger>
                    <Button>Add Skills</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Select the Skills</DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-full mt-10">
                            <SelectValue placeholder="Select a skills" />
                          </SelectTrigger>
                          <SelectContent onChange={handleSkillChange}>
                            <SelectGroup>
                              <SelectLabel>skills</SelectLabel>
                              <SelectItem value="apple">
                                React web Developer
                              </SelectItem>
                              <SelectItem value="banana">Nodejs</SelectItem>
                              <SelectItem value="blueberry">
                                React Native
                              </SelectItem>
                              <SelectItem value="grapes">VB.net</SelectItem>
                              <SelectItem value="pineapple">
                                PHP Developer
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </DialogDescription>
                    </DialogHeader>
                    <Button
                      onClick={() => {
                        handleTest(selectedSkill);
                      }}
                    >
                      Take a Test
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
              <ul className="grid grid-cols-2 gap-4 text-sm list-disc list-inside `md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
