import React from "react";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// react icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import Image from "next/image";

// images
import Logo from "@/assets/logo.png";

export default function Component() {
  return (
    <footer className="w-full pt-12 md:pt-24 lg:pt-32 footer_bg_color">
      <div className="container grid gap-6 px-4 text-sm md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            alt="Logo"
            className="w-[120px]"
            height="30"
            src={Logo}
            style={{
              aspectRatio: "120/30",
              objectFit: "cover",
            }}
            width="120"
          />
          <p className="text-white leading-6 md:pr-12 lg:pr-0 xl:leading-4 dark:text-gray-400">
            Accelerate the new community of jems specially made for you guys. We
            daily share our new updates and content on our social handles
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-semibold text-white">Contact Us</h5>
          <div className="flex flex-col gap-1">
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              support@example.com
            </Link>
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              +1 (123) 456-7890
            </Link>
            <p className="text-white dark:text-gray-400">
              123 Example St, City, Country
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="font-semibold text-white">Useful Links</h5>
          <nav className="flex flex-col gap-1">
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              FAQs
            </Link>
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white transition underline dark:text-gray-400 hover:underline"
              href="#"
            >
              Help
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-semibold">Connect</h5>
          <div className="flex gap-4">
            <Link
              className="flex items-center rounded-lg z px-3 py-2 text-white hover:bg-gray-100/90 dark:bg-gray-800 dark:text-gray-900 dark:hover:bg-gray-50"
              href="#"
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              className="flex items-center rounded-lg  px-3 py-2 text-white hover:bg-gray-100/90 dark:bg-gray-800 dark:text-gray-900 dark:hover:bg-gray-50"
              href="#"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              className="flex items-center rounded-lg  px-3 py-2 text-white hover:bg-gray-100/90 dark:bg-gray-800 dark:text-gray-900 dark:hover:bg-gray-50"
              href="#"
            >
              <SiLinkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              className="flex items-center rounded-lg  px-3 py-2 text-white hover:bg-gray-100/90 dark:bg-gray-800 dark:text-gray-900 dark:hover:bg-gray-50"
              href="#"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center">
        <div className="flex justify-center space-x-4">
          <Label className="sr-only" htmlFor="email">
            Enter your email
          </Label>
          <Input
            className="max-w-xs w-full rounded-full border-gray-200 dark:border-gray-800"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="px-8" type="submit">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
}
