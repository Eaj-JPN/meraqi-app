import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const PageVision = () => {
  return (
    <>
      <MaxWidthWrapper
        id="VissionMission"
        className="flex flex-col justify-center items-center"
      >
        <div className="flex md:flex-row-reverse flex-col mx-8 my-8">
          <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-l-2 md:border-b-0 border-b-2 border-l-0 border-dashed border-black flex items-center justify-center">
            Vision & Mission
          </div>

          <div className="flex-1 p-8 flex flex-col gap-12 lg:text-xl text-center md:text-right justify-center items-end">
            <div className="">
              We dedicate ourselves to provide great hospitality with great
              product, in our ventures and our day to day. It is about Learning
              and growing everyday with humility and excitement. We see
              ourselves with more ventures that align with our core and belief
              till the end of times.
            </div>
          </div>
        </div>

        <div className="w-full h-fit pt-4 lg:pt-16">
          <p className="text-base lg:text-2xl text-center justify-center items-center px-4">
            It is a concoction of Soul, Creativity and Love; Shaken harmoniously
            and poured all over our Actions.
          </p>
        </div>
      </MaxWidthWrapper>

      {/* <div className="">

        <section id="VissionMission">
          <div className="flex md:flex-row-reverse flex-col mx-8 my-8">
            <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-l-2 md:border-b-0 border-b-2 border-l-0 border-dashed border-black flex items-center justify-center">
              Vision & Mission
            </div>

            <div className="flex-1 p-8 flex flex-col gap-12 lg:text-xl text-center md:text-right justify-center items-end">
              <div className="">
                We dedicate ourselves to provide great hospitality with great
                product, in our ventures and our day to day. It is about
                Learning and growing everyday with humility and excitement. We
                see ourselves with more ventures that align with our core and
                belief till the end of times.
              </div>
            </div>
          </div>

          <div className="w-full h-fit">
            <p className="text-base lg:text-2xl text-center justify-center items-center px-4">
              It is a concoction of Soul, Creativity and Love; Shaken
              harmoniously and poured all over our Actions.
            </p>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default PageVision;
