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
          <div className="ml-32 flex flex-col pt-2 bg-black bg-opacity-20 px-8 min-h-screen">
            <PageHeader />
              <div className=" flex-1 flex items-center">
                <div className="flex flex-col gap-12">

                  {/* Title */}
                  <div className="md:text-8xl text-4xl">
                    meraqi Movement
                  </div>

                  {/* Description */}
                  <div className="max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    interdum vulputate ex, vel malesuada felis venenatis eget.
                    Maecenas fringilla nibh vitae nulla semper, id maximus erat
                    pharetra. Nulla eleifend ligula quis mi varius semper. Vestibulum
                    posuere tristique interdum. Nam aliquet urna lacus, at mattis odio
                    scelerisque vel. Cras vitae ligula nec lectus interdum aliquam
                    vitae nec dui. Curabitur auctor vulputate euismod.
                  </div>
                    
                </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default pageLanding;
