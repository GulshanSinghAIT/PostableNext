import React from "react";
import Image from "next/image";
import one from "../assests/one.webp";
const One = () => {
  return (
    <section class="relative mb-[55em] md:mb-[32em] z-0 w-full overflow-hidden rounded-[64px] bg-neutral-950 drop-shadow-2xl">
      <div class="mt-12 flex flex-col items-center md:mt-28">
        <h3 class="mb-4 text-3xl font-[750] tracking-[-0.2px] text-white md:mb-6 md:text-[60px] md:font-[850] md:leading-[54px] md:tracking-[-1px]">
          One-Click to Create
        </h3>
        <p class="mb-2 max-w-md text-balance text-center text-md font-normal leading-relaxed text-neutral-400 md:max-w-2xl md:text-lg">
          Postable is built with simplicity and fun at its core. No design
          skills? No problem. We handle the heavy lifting so you can
          effortlessly create stunning posts.
        </p>
        <a
          class="relative my-8 inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
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
      </div>
      <div class="relative mx-auto w-full max-w-7xl">
        <Image
          src={one}
          alt="Last Section"
        />
      </div>
    </section>
  );
};

export default One;
