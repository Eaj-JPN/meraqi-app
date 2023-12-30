import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const pageLanding = () => {
  return (
    <>
      <MaxWidthWrapper id="Landing" className="">
        <div className="ml-16 md:ml-32 flex flex-col pt-2 min-h-screen bg-black bg-opacity-20">
          <PageNav />

          <div className="flex-1 flex flex-col justify-center gap-12 p-6">
            {/* Title */}
            <div className="text-5xl lg:text-8xl">meraqi Movement</div>

            {/* Description */}
            <div className="gap-4 flex flex-col w-3/4 text-sm lg:text-lg">
              <div>
                Meraqi Comes from the Greek work Meraki : To do something with
                soul, creativity, or love; to put something of yourself in your
                work. To love what you do, is to do it well.
              </div>
              <div>
                We Love what we do and we pour all our heart and soul in all our
                ventures. Our main line of work is in Food and Beverages, that
                comes from Heena’s love and passion for Food. Together Anand and
                Heena have assembled like-minded individuals to embark together
                in this extraordinary journey.
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <div className="">
        <section id="Landing">
          <div className="ml-16 md:ml-32 flex flex-col pt-2 bg-black bg-opacity-20 px-8 min-h-screen p-8">
            <PageNav />
            <div className=" flex-1 flex items-center">
              <div className="flex flex-col gap-12">
                <div className="md:text-8xl text-4xl">meraqi Movement</div>

                <div className="max-w-4xl">
                  Meraqi Comes from the Greek work Meraki : To do something with
                  soul, creativity, or love; to put something of yourself in
                  your work. To love what you do, is to do it well.
                </div>
                <div className="max-w-4xl">
                  We Love what we do and we pour all our heart and soul in all
                  our ventures. Our main line of work is in Food and Beverages,
                  that comes from Heena’s love and passion for Food. Together
                  Anand and Heena have assembled like-minded individuals to
                  embark together in this extraordinary journey.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default pageLanding;
