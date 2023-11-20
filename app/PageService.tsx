import React from "react";

const PageService = () => {
  return (
    <div className="">
      {/* Service */}
      <section id="Service" className="min-h-screen h-fit flex">
        {/* Heading */}
        <div className="h-screen px-4 lg:w-5/12 flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-8xl text-left font-bold md:font-normal inline-block lg:w-2/3">
            Our Services
          </h1>
        </div>

        {/* Dividers */}
        <div className="h-screen w-1/12 flex justify-center items-center">
          <div className="h-full flex justify-center w-1 items-center text-black">
            | | | | | | | | | | | | | | | | | | | | | | | | |
          </div>
        </div>

        {/* List */}
        <div className="h-screen pl-4 lg:w-6/12 flex justify-center items-center pr-2">
          <ul>
            {/* List Item */}
            <li className="pb-10">
              <h1 className="text-base md:text-2xl inline-block font-bold pb-2">
                Lorem Ipsum
              </h1>
              <p className="text-sm md:text-base lg:w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dui leo, luctus sed nulla sed, gravida ultrices nisl. Integer
                vel ligula ut orci tempus sodales nec in quam.
              </p>
            </li>

            {/* List Item */}
            <li className="pb-10">
              <h1 className="text-base md:text-2xl inline-block font-bold pb-2">
                Lorem Ipsum
              </h1>
              <p className="text-sm md:text-base lg:w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dui leo, luctus sed nulla sed, gravida ultrices nisl. Integer
                vel ligula ut orci tempus sodales nec in quam.
              </p>
            </li>

            {/* List Item */}
            <li className="pb-10">
              <h1 className="text-base md:text-2xl inline-block font-bold pb-2">
                Lorem Ipsum
              </h1>
              <p className="text-sm md:text-base lg:w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dui leo, luctus sed nulla sed, gravida ultrices nisl. Integer
                vel ligula ut orci tempus sodales nec in quam.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PageService;
