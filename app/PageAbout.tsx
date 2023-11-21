import React from "react";

const PageAbout = () => {
  return (
    <div className="">
      {/* About */}
      <section id="About" className="min-h-screen h-fit flex">
        {/* Image */}
        <div className="min-h-screen flex justify-center items-center mr-16 w-24 sm:w-48 md:w-3/5">
          <div className="bg-black opacity-20 h-4/5 w-full"></div>
        </div>

        {/* Details */}
        <div className="min-h-screen w-3/5 flex flex-col justify-center mr-16">
          <h1 className="text-5xl lg:text-8xl inline-block">About Us</h1>

          <p className="text-sm lg:text-base inline-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum vulputate ex, vel malesuada felis venenatis eget. Maecenas
            fringilla nibh vitae nulla semper, id maximus erat pharetra. Nulla
            eleifend ligula quis mi varius semper. Vestibulum posuere tristique
            interdum. Nam aliquet urna lacus, at mattis odio scelerisque vel.
            Cras vitae ligula nec lectus interdum aliquam vitae nec dui.
            Curabitur auctor vulputate euismod.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PageAbout;
