import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";

const PageNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <div className="flex w-full h-24 md:px-8 py-2 space-x-8">
        <Image
          src="/assets/Logo1.png"
          className="w-16 h-16 lg:w-20 lg:h-20"
          alt=""
          width={750}
          height={500}
        />

        {/* List of Nav Items */}
        <div className="invisible lg:visible flex flex-row justify-center items-center h-full w-fit space-x-4 text-2xl">
          <Link
            href="/"
            activeClass="active"
            spy={true}
            to="Landing"
            smooth={true}
            offset={0}
            duration={1000}
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            href="/"
            activeClass="active"
            spy={true}
            to="About"
            smooth={true}
            offset={0}
            duration={1000}
            className="hover:underline"
          >
            About
          </Link>
          <Link
            href="/"
            activeClass="active"
            spy={true}
            to="Companies"
            smooth={true}
            offset={0}
            duration={1000}
            className="hover:underline"
          >
            Services & Companies
          </Link>
          <Link
            href="/"
            activeClass="active"
            spy={true}
            to="VissionMission"
            smooth={true}
            offset={0}
            duration={1000}
            className="hover:underline"
          >
            Vision & Mission
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            className={`fixed top-4 right-4 z-10 rounded-full p-7 outline-none transition-opacity duration-1000 bg-black bg-opacity-50
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <AlignJustify className="text-white" />
          </SheetTrigger>

          <SheetTrigger className="visible lg:invisible fixed top-4 right-4 z-10 rounded-full p-7 outline-none bg-opacity-50">
            <AlignJustify className="text-black" />
          </SheetTrigger>

          <SheetContent className="gap-y-16">
            <SheetHeader className="items-center">
              <Image
                src="/assets/Logo1.png"
                width={1000}
                height={1000}
                alt="Logo"
                className="w-20 h-auto"
              />
            </SheetHeader>
            <div className="flex flex-col gap-y-8 py-4">
              <Link
                href="/"
                activeClass="active"
                spy={true}
                to="Landing"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:underline"
              >
                Home
              </Link>
              <Link
                href="/"
                activeClass="active"
                spy={true}
                to="About"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:underline"
              >
                About
              </Link>
              <Link
                href="/"
                activeClass="active"
                spy={true}
                to="Companies"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:underline"
              >
                Services & Companies
              </Link>
              <Link
                href="/"
                activeClass="active"
                spy={true}
                to="VissionMission"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:underline"
              >
                Vision & Mission
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default PageNav;
