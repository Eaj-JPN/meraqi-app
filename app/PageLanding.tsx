import React from "react";
import PageHeader from "@/components/PageHeader";

const pageLanding = () => {
  return (
    <div className="">
      {/* Landing Page */}
      <section id="Landing">
        {/* Background */}
          <div className="ml-32 flex flex-col pt-2 bg-black bg-opacity-20 px-8 min-h-screen">

            {/* Header */}
            <PageHeader />

            {/* Details */}
            <div className="flex-1 flex flex-col justify-center ml-8 gap-y-16">

              <h1 className="text-5xl lg:text-8xl inline-block">
                meraqi Movement
              </h1>

              <p className="text-sm lg:text-base inline-block md:w-5/6 lg:w-1/2 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum vulputate ex, vel malesuada felis venenatis eget.
                Maecenas fringilla nibh vitae nulla semper, id maximus erat
                pharetra. Nulla eleifend ligula quis mi varius semper.
                Vestibulum posuere tristique interdum. Nam aliquet urna lacus,
                at mattis odio scelerisque vel. Cras vitae ligula nec lectus
                interdum aliquam vitae nec dui. Curabitur auctor vulputate
                euismod.
              </p>
            </div>

          </div>
      </section>
    </div>
  );
};

export default pageLanding;
