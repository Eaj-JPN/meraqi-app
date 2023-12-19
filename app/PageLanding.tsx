import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const pageLanding = () => {
  return (
    <div className="">
      {/* Landing Page */}
      <section id="Landing">
        {/* Background */}
        <div className="ml-16 md:ml-32 flex flex-col pt-2 bg-black bg-opacity-20 px-8 min-h-screen p-8">
          <PageHeader />
          <div className=" flex-1 flex items-center">
            <div className="flex flex-col gap-12">
              {/* Title */}
              <div className="md:text-8xl text-4xl">meraqi Movement</div>

              {/* Description */}
              <div className="max-w-4xl">
                Meraqi Comes from the Greek work Meraki : To do something with
                soul, creativity, or love; to put something of yourself in your
                work. To love what you do, is to do it well.
              </div>
              <div className="max-w-4xl">
                We Love what we do and we pour all our heart and soul in all our
                ventures. Our main line of work is in Food and Beverages, that
                comes from Heena’s love and passion for Food. Together Anand and
                Heena have assembled like-minded individuals to embark together
                in this extraordinary journey.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default pageLanding;
