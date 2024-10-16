"use client";
import React from "react";
import Image from "next/image";
import textures1 from "../assests/textures1.webp";
import textures4 from "../assests/textures4.webp";
import { motion } from "framer-motion";
const Optimixed = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-4 pt-7 md:pt-24 xl:pe-4 xl:ps-0">
        <h3 className="mb-5 max-w-sm text-2xl text-black/90 font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          Optimized for all social media
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <p className="max-w-xl text-xs leading-[20px] text-neutral-700 md:text-balance md:text-sm">
            We've meticulously designed each template to meet the specific
            guidelines and format requirements of all social media platforms. By
            preserving safe zones and adhering to platform standards, we ensure
            that your posts will always be visually striking, no matter where
            you share them.
          </p>
          <ul className="flex flex-row gap-4 md:flex-col md:gap-1.5">
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
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
                className="lucide lucide-check size-3 text-purple-400 md:size-3.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>{" "}
              Readable
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
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
                className="lucide lucide-check size-3 text-purple-400 md:size-3.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>{" "}
              Visible
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
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
                className="lucide lucide-check size-3 text-purple-400 md:size-3.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>{" "}
              Accessible
            </li>
          </ul>
        </div>
      </section>
      <div className="mx-auto relative my-[7em] flex w-full max-w-6xl px-4 xl:pe-4 xl:ps-0">
        <motion.div
          initial={{ x: -100 , rotate: 3 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.16 }}
          className="flex flex-col rotate-3"
        >
          <h4 className="flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[#80C0EE]">
            <svg
              className="size-4 text-white md:size-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM6.16465 18H8.95143V9.90327H6.16465V18ZM7.53997 8.79766H7.55813C8.52995 8.79766 9.13476 8.17598 9.13476 7.399C9.11661 6.60449 8.52995 6 7.57664 6C6.62332 6 6 6.60449 6 7.399C6 8.17598 6.60481 8.79766 7.53997 8.79766ZM16.2136 18H19V13.3574C19 10.8704 17.6252 9.71324 15.7917 9.71324C14.3132 9.71324 13.6506 10.498 13.2803 11.0497V9.90327H10.4937C10.5302 10.6629 10.4937 18 10.4937 18H13.2803V13.4784C13.2803 13.2365 13.2983 12.9947 13.372 12.8217C13.5734 12.3382 14.0319 11.8375 14.8017 11.8375C15.8101 11.8375 16.2136 12.5799 16.2136 13.6684V18Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
              LinkedIn Post
            </span>
          </h4>
          <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
            <Image
              src={textures1}
              alt="LinkedIn Post"
              className="size-full object-cover object-left-top"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 , rotate: 3 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.15 }} className="flex flex-col relative -left-[10em] -top-[2em] rotate-3">
          <h4 className="flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[#F6A886]">
            <svg
              className="size-4 text-white md:size-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
              Instagram Story
            </span>
          </h4>
          <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
            <Image
              src={textures1}
              alt="Instagram Story"
              className="size-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 , rotate: 3 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.15 }} className="flex flex-col rotate-3 relative -left-[20em] -top-[3em]">
          <h4 className="flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[#77BE7E]">
            <svg
              className="size-4 text-white md:size-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM10.3742 12.8721V19H13.3006V12.8836H15.4785L15.8957 10.3475H13.3006V8.70082C13.3006 8.00656 13.6626 7.32951 14.8221 7.32951H16V5.17213C16 5.17213 14.9325 5 13.908 5C11.7669 5 10.3742 6.21066 10.3742 8.4082V10.3418H8V12.8721H10.3742Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
              Facebook Post
            </span>
          </h4>
          <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
            <Image
              src={textures4}
              alt="Facebook Post"
              className="size-full object-cover rotate-90 object-left-top -scale-y-100"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 , rotate: 3 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.15 }} className="flex flex-col rotate-3 relative -left-[30em] -top-[4em]">
          <h4 className="flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[#E7C694]">
            <svg
              className="size-4 text-white md:size-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
              Instagram Post
            </span>
          </h4>
          <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
            <Image
              src={textures4}
              alt="Instagram Post"
              className="size-full object-cover -scale-x-100 -scale-y-100"
            />
          </div>
        </motion.div>
      </div>
      <div class="absolute inset-0  left-0 translate-y-36 bg-gradient-to-b from-transparent via-white/50 via-40% to-white to-55% md:to-75%"></div>
    </div>
  );
};

export default Optimixed;
