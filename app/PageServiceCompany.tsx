import React from "react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PageServiceCompany = () => {
  return (
    <>
      <MaxWidthWrapper
        id="Companies"
        className="flex flex-col justify-center items-center gap-y-8 h-fit px-2.5"
      >
        <div className="text-5xl lg:text-8xl text-center">
          Our Service & Companies
        </div>
        {/* Container Logo */}
        <div className="h-fit flex flex-col justify-center items-center border-dashed border-2 border-black p-8 rounded-3xl">
          {/* Restaurants */}
          <div className="text-4xl lg:text-5xl text-center pb-8">
            Restaurants / Bar
          </div>
          <div className="flex flex-col lg:flex-row w-full h-fit justify-center items-center place-content-center pb-12 space-x-0 lg:space-x-16 space-y-4 lg:space-y-0">
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col justify-center items-center"
            >
              <Image
                src="/assets/LogoHause.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">Hause Rooftop</p>
            </Link>
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col justify-center items-center"
            >
              <Image
                src="/assets/LogoBTS.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">Between The Sips</p>
            </Link>
          </div>

          {/* FnB */}
          <div className="text-4xl lg:text-5xl text-center pb-8">
            FnB Supply
          </div>
          <div className="flex flex-col lg:flex-row w-full h-fit justify-center items-center place-content-center pb-12 space-x-0 lg:space-x-16 space-y-4 lg:space-y-0">
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col justify-center items-center"
            >
              <Image
                src="/assets/LogoHybrid.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">Hybrid Ice</p>
            </Link>
          </div>

          {/* IT */}
          <div className="text-4xl lg:text-5xl text-center pb-8">I.T.</div>
          <div className="flex flex-col lg:flex-row w-full h-fit justify-center items-center place-content-center pb-4 space-x-0 lg:space-x-16 space-y-4 lg:space-y-0">
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col items-center justify-center"
            >
              <Image
                src="/assets/Logo1.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">
                Zeuss Internet Service Provider
              </p>
            </Link>
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col items-center justify-center"
            >
              <Image
                src="/assets/Logo1.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">
                iBenerin Hardware Repair and Services
              </p>
            </Link>
            <Link
              href={"#"}
              className="hover:shadow-lg rounded-sm flex flex-col items-center justify-center"
            >
              <Image
                src="/assets/Logo1.png"
                alt=""
                width={750}
                height={500}
                className="w-24 md:w-48"
              />
              <p className="pt-2 text-center">Botnix Cloud Hosting services</p>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <div className="">
        <section id="Companies" className="min-h-screen h-fit ">
          <div className="min-h-screen h-fit flex flex-col justify-center items-center">
            <h1 className="text-6xl lg:text-8xl font-bold md:font-normal pb-16 p-8 text-center">
              Our Services & Companies
            </h1>

            <div className="h-fit flex flex-col justify-center items-center border-dashed border-2 border-black p-8 rounded-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
                Restaurants / Bar
              </h1>
              <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-16 gap-y-16 w-fit lg:h-64 p-16 place-items-center">
                <Link href={"#"} className="w-24 md:w-48 text-center">
                  <Image
                    src="/assets/LogoHause.png"
                    alt=""
                    width={750}
                    height={500}
                  />
                  <p className="pt-2">Hause Rooftop</p>
                </Link>

                <Link href={"#"} className="w-24 md:w-48 text-center">
                  <Image
                    src="/assets/LogoBTS.png"
                    alt=""
                    width={750}
                    height={500}
                  />
                  <p className="pt-2">Between the Sips</p>
                </Link>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
                FnB Supply
              </h1>
              <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-1 gap-16 gap-y-16 w-fit lg:h-64 p-16 place-items-center">
                <Link href={"#"} className="w-24 md:w-48 text-center">
                  <Image
                    src="/assets/LogoHybrid.png"
                    alt=""
                    width={750}
                    height={500}
                  />
                  <p className="pt-2">Hybrid Ice</p>
                </Link>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold md:font-normal pb-8 lg:pb-16 p-8 text-center">
                I.T.
              </h1>
              <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-16 gap-y-16 w-fit h-fit lg:h-64 p-16 place-items-center">
                <Link href={"#"} className="w-24 md:w-48 text-center">
                  <Image
                    src="/assets/Logo1.png"
                    alt=""
                    width={750}
                    height={500}
                  />
                  <p className="pt-2">Zeuss Internet Service Provider</p>
                </Link>

                <Link href={"#"} className="w-24 md:w-48 text-center">
                  <Image
                    src="/assets/Logo1.png"
                    alt=""
                    width={750}
                    height={500}
                  />
                  <p className="pt-2">iBenerin Hardware Repair and Services</p>
                </Link>

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
      </div> */}
    </>
  );
};

export default PageServiceCompany;
