import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageServiceCompany = () => {
  return (
    <div className="">
      {/* Companies */}
      <section id="Companies" className="min-h-screen h-fit ">
        <div className="min-h-screen h-fit flex flex-col justify-center items-center">
          {/* Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold md:font-normal pb-16 p-8 text-center">
            Our Services & Companies
          </h1>

          {/* Container Logo */}
          <div className="h-fit flex flex-col justify-center items-center border-dashed border-2 border-black p-8 rounded-3xl">
            {/* Restaurant */}
            <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
              Restaurants / Bar
            </h1>
            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-16 gap-y-16 w-fit lg:h-64 p-16 place-items-center">
              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">Hause Rooftop</p>
              </Link>

              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">Between the Sips</p>
              </Link>
            </div>

            {/* FnB */}
            <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
              FnB Supply
            </h1>
            {/* FnB Grid */}
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-1 gap-16 gap-y-16 w-fit lg:h-64 p-16 place-items-center">
              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">Hybrid Ice</p>
              </Link>
            </div>

            {/* IT */}
            <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
              I.T.
            </h1>
            {/* IT Grid */}
            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-16 gap-y-16 w-fit h-fit lg:h-64 p-16 place-items-center">
              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">Zeuss Internet Service Provider</p>
              </Link>

              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">iBenerin Hardware Repair and Services</p>
              </Link>

              {/* Logo */}
              <Link href={"#"} className="w-24 md:w-48 text-center">
                <Image
                  src="/assets/Logo1.png"
                  alt=""
                  width={750}
                  height={500}
                />
                <p className="pt-2">Botnix Cloud Hosting services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageServiceCompany;
