import React from "react";

const PageVision = () => {
  return (
    <div className="">
      {/* Vision Mission */}

      <section id="VissionMission">
        <div className="flex md:flex-row-reverse flex-col mx-8 my-40">
          <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-l-2 md:border-b-0 border-b-2 border-l-0 border-dashed border-black flex items-center justify-center">
            Vision & Mission
          </div>

          <div className="flex-1 p-8 flex flex-col gap-12 lg:text-xl text-center md:text-right justify-center items-end">
            <div className="">
              We dedicate ourselves to provide great hospitality with great
              product, in our ventures and our day to day. It is about Learning
              and growing everyday with humility and excitement. We see
              ourselves with more ventures that align with our core and belief
              till the end of times.
            </div>

            {/* <div>
              <div className="font-bold text-3xl md:text-6xl mb-4">Vision</div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
                leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel ligula
                ut orci tempus sodales nec in quam
              </div>
            </div>

            <div>
              <div className="font-bold text-3xl md:text-6xl mb-4">Mission</div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
                leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel ligula
                ut orci tempus sodales nec in quam
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageVision;
