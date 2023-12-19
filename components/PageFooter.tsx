"use client";

import React from "react";
import Link from "next/link";

const PageFooter = () => {
  return (
    <div className="">
      {/* Footer */}
      <section className="">
        <div className="bg-black bg-opacity-50 min-h-fit h-16 flex flex-row items-center justify-center">
          <div className="w-full h-full text-sm md:text-sm lg:text-xl text-center p-2 text-white justify-center pt-6">
            © 2023 meraqi | Terms of Service | <Link href={"#"}>Contact</Link> |{" "}
            <Link href={"#"}>Instagram</Link> | <Link href={"#"}>Facebook</Link>{" "}
            | <Link href={"#"}>Twitter</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageFooter;
