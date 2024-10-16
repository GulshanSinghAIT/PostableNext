import React from "react";
import Image from "next/image";
import feature1 from "../assests/feature1.webp";
import feature2 from "../assests/feature2.webp";
import feature3 from "../assests/feature3.webp";
import feature4 from "../assests/feature4.webp";
import feature5 from "../assests/feature5.webp";

const Features = () => {
  return (
    <section className="relative flex w-full flex-col items-start py-12 md:py-24">
      <h3 className="mx-auto w-full text-black/80 max-w-6xl px-4 text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0">
        Our Features
      </h3>
      <div className="relative flex w-full gap-4 overflow-scroll px-4 pb-4 pt-3 xl:ps-0 xl:pt-4">
        <div className="min-w-72 md:ml-[11.5em] max-w-fit select-none md:min-w-96">
          <Image src={feature1} alt="Feature 1" draggable="false" />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <Image src={feature2} alt="Feature 2" draggable="false" />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <Image src={feature3} alt="Feature 3" draggable="false" />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <Image src={feature4} alt="Feature 4" draggable="false" />
        </div>
        <div className="min-w-72 max-w-fit select-none md:min-w-96">
          <Image src={feature5} alt="Feature 5" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default Features;
