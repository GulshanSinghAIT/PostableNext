"use client";
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import step_3 from "../assests/step-3.webp";
import step_2 from "../assests/step-2.webp";
import step_1 from "../assests/step-1.webp";

const ROTATION_RANGE = 50; 
const HALF_ROTATION_RANGE = ROTATION_RANGE / 3;

const How = () => {
  const createMotionValues = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 200, damping: 20 });
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    return { x, y, transform };
  };

  const handleMouseMove = (e, ref, x, y) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const rX = ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = (x, y) => {
    x.set(0);
    y.set(0);
  };

  // Create refs and motion values for each card
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const card1Motion = createMotionValues();
  const card2Motion = createMotionValues();
  const card3Motion = createMotionValues();

  return (
    <div className="max-w-6xl py-20 my-2 mx-auto">
        <h1 className=" text-4xl mb-8 text-black/80 font-semibold">
        How it works?

        </h1>
      <div className="flex gap-4 overflow-y-visible overflow-x-scroll px-4 pb-4 lg:overflow-x-visible lg:pb-4 lg:pe-4 lg:ps-0">
        <motion.div
          ref={ref1}
          style={{
            transformStyle: "preserve-3d",
            transform: card1Motion.transform,
          }}
          onMouseMove={(e) => handleMouseMove(e, ref1, card1Motion.x, card1Motion.y)}
          onMouseLeave={() => handleMouseLeave(card1Motion.x, card1Motion.y)}
          className="gap-4 transition-transform ease-linear will-change-transform flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] bg-neutral-100/70 p-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={step_1}
              alt="Copy tweet's link"
              className="w-full rounded-3xl transition-transform"
            />
          </div>
          <div className="flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8">
            <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
              Step 1
            </span>
            <h1 className="mb-4 text-md font-medium text-neutral-800 md:mb-5 md:text-lg">
              Copy tweet's link
            </h1>
            <p className="text-sm text-neutral-1000">
              On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          style={{
            transformStyle: "preserve-3d",
            transform: card2Motion.transform,
          }}
          onMouseMove={(e) => handleMouseMove(e, ref2, card2Motion.x, card2Motion.y)}
          onMouseLeave={() => handleMouseLeave(card2Motion.x, card2Motion.y)}
          className="gap-4 transition-transform ease-linear will-change-transform flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] bg-neutral-100/70 p-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={step_2}
              alt="Customize Design"
              className="w-full rounded-3xl transition-transform"
            />
          </div>
          <div className="flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8">
            <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
              Step 2
            </span>
            <h1 className="mb-4 text-md font-medium text-neutral-800 md:mb-5 md:text-lg">
              Customize Design
            </h1>
            <p className="text-sm text-neutral-1000">
              Choose social media sizes, adjust the style, set the border radius, and customize the design to your liking and preferred branding—all with a single click.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          style={{
            transformStyle: "preserve-3d",
            transform: card3Motion.transform,
          }}
          onMouseMove={(e) => handleMouseMove(e, ref3, card3Motion.x, card3Motion.y)}
          onMouseLeave={() => handleMouseLeave(card3Motion.x, card3Motion.y)}
          className="gap-4 transition-transform ease-linear will-change-transform flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] bg-neutral-100/70 p-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={step_3}
              alt="Export!"
              className="w-full rounded-3xl transition-transform"
            />
          </div>
          <div className="flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8">
            <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
              Step 3
            </span>
            <h1 className="mb-4 text-md font-medium text-neutral-800 md:mb-5 md:text-lg">
              Export!
            </h1>
            <p className="text-sm text-neutral-1000">
              Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default How;
