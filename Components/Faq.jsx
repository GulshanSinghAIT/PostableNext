import React from "react";
import Faq from "../Components/FAQ/Faq";
const Faqq = () => {
  return (
    <div className="max-w-6xl  mx-auto py-[6em] my-5">
      <header className="max-w-sm text-neutral-950">
        <h3 className="text-2xl px-5 md:px-0 font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          FAQ
        </h3>
        <p className="hidden text-balance text-xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
          Let’s help you with some of your frequently asked questions.
        </p>
      </header>
      <Faq />
    </div>
  );
};

export default Faqq;
