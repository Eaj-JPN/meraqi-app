"use client";

import React from "react";
import Link from "next/link";

const PageFooter = () => {
  return (
    <div className="">
      {/* Footer */}
      <section className="">

          <div className="flex flex-col pt-2 bg-black bg-opacity-50 min-h-fit p-8">

            <div className="w-full h-16 text-sm md:text-sm lg:text-xl text-center p-2 text-white justify-center">
            © 2023 meraqi | Terms of Service | <Link href={'#'}>Contact</Link> | <Link href={'#'}>Instagram</Link> | <Link href={'#'}>Facebook</Link> | <Link href={'#'}>Twitter</Link>
              
              </div>
          </div>
          
      </section>
    </div>
  );
};

export default PageFooter;
