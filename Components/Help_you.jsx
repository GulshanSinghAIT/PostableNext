import React from "react";

const Help_you = () => {
  return (
    
      <section class="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
        <p class="relative max-w-4xl text-balance text-3xl font-normal tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px]">
          We help you create postable content that not only
          <span class="text-neutral-800"> looks great </span>but also
          <span class="text-neutral-800"> engages your audience</span>.
        </p>
        <a
          class="relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-md font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
          href="#input"
        >
          Get Started for FREE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right size-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </section>
    
  );
};

export default Help_you;
