"use client";

import React, { useState } from "react";
import Image from "next/image";

// clerk
import { UserButton, useUser } from "@clerk/nextjs";
import { FaHeart } from "react-icons/fa";
// Logo
import Logo from "@/assets/logo.png";
import Link from "next/link";

// react icons
import { FaShoppingCart } from "react-icons/fa";
import TemporaryDrawer from "@/components/material/drawer";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  // console.log(open);

  interface NavItem {
    href: string;
    label: string;
  }

  const icon_size = "25";

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-10">
      <div className="shadow-2xl h-[5.2rem] bg-white text-white flex items-center justify-between lg:px-10 sm:px-6 z-30">
        <div className="logo flex items-center justify-center">
          <div>
            <TemporaryDrawer />
          </div>
        </div>
        <Link href="/">
          <Image src={Logo} alt="Logo" height={95} width={125} />
        </Link>

        <div className="flex items-center justify-center gap-5 ">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <ul className="flex items-center justify-evenly lg:text-xl md:text-xl">
              <Link
                className="hover:underline lg:text-xl md:text-lg sm:text-sm px-5"
                href="/sign-up"
              >
                <FaUser size={30} color={"black"} />
              </Link>
            </ul>
          )}
          <Link href={"/wise_list"}>
            <FaHeart size={30} color="black" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
