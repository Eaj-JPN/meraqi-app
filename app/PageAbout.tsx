import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const PageAbout = () => {
  return (
    <>
      <MaxWidthWrapper id="About" className="flex flex-row h-fit">
        <div className="min-h-screen flex justify-center items-center mr-4 lg:mr-16 w-24 sm:w-48 md:w-3/5">
          <div className="bg-black opacity-20 h-[90%] lg:h-[80%] w-full"></div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-center">
          {/* Title */}
          <div className="text-5xl lg:text-8xl">About Us</div>

          {/* Description */}
          <div className="gap-4 flex flex-col w-full text-sm lg:text-base">
            <div>
              Anand and Heena co-founded Meraqi together in the year 2014.
              Started out from a small Martabak Stall, they both shared the love
              to create something meaningful than just selling food. There was
              so much dedication and energy that they put together to create a
              single recipe.
            </div>
            <div>
              Soon they found a home for their next adventure, Hause Rooftop.
              This oasis sits a special place in the heart of the co-founders,
              hence the name Heena & Anand’s House, in short Hause. A lot of
              Love and Passion was put into this, with no background in
              hospitality, they thrive to make the place grow and become one of
              the rooftop icon in Jakarta. Many more adventures continued from
              here, a rollercoaster ride that resulted in open and close down of
              few ventures. Which only add to more learning and growth through
              out the process.
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <div className="">
        <section id="About" className="min-h-screen h-fit flex">
          <div className="min-h-screen flex justify-center items-center mr-4 lg:mr-16 w-24 sm:w-48 md:w-3/5">
            <div className="bg-black opacity-20 h-4/5 w-full"></div>
          </div>

          <div className="min-h-screen w-full lg:w-3/5 flex flex-col justify-center mr-16">
            <h1 className="text-5xl lg:text-8xl inline-block">About Us</h1>

            <p className="text-sm lg:text-base inline-block pb-4">
              Anand and Heena co-founded Meraqi together in the year 2014.
              Started out from a small Martabak Stall, they both shared the love
              to create something meaningful than just selling food. There was
              so much dedication and energy that they put together to create a
              single recipe.
            </p>
            <p className="text-sm lg:text-base inline-block pb-4">
              Soon they found a home for their next adventure, Hause Rooftop.
              This oasis sits a special place in the heart of the co-founders,
              hence the name Heena & Anand’s House, in short Hause. A lot of
              Love and Passion was put into this, with no background in
              hospitality, they thrive to make the place grow and become one of
              the rooftop icon in Jakarta. Many more adventures continued from
              here, a rollercoaster ride that resulted in open and close down of
              few ventures. Which only add to more learning and growth through
              out the process.
            </p>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default PageAbout;
