"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Influencers from "../assests/influ.webp";
import indi from "../assests/indi.webp";
import Busi from "../assests/busi.webp";

const OneSol = () => {
  const [activeTab, setActiveTab] = useState("individuals");

  const tabs = ["individuals", "influencers", "businesses"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const nextTabIndex = (tabs.indexOf(activeTab) + 1) % tabs.length;
    const timer = setTimeout(() => {
      setActiveTab(tabs[nextTabIndex]);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [activeTab]);

  return (
    <div>
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-4 md:-mb-8 md:flex-row md:py-24 xl:pe-4 xl:ps-0">
        <div className="w-full md:w-2/3">
          <h3 className="max-w-sm text-2xl text-black/80 font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
            One Solution for All!
          </h3>
          <p className="mt-1 text-sm text-neutral-700 md:mt-4 text-md md:text-xl md:text-neutral-950">
            Postable helps everyone to share their thoughts across multiple platforms
          </p>

          <div dir="ltr" data-orientation="horizontal" className="md:md-10 mt-6">
            <div className="inline-flex h-fit items-center justify-center rounded-md bg-zinc-200 p-1 w-full md:w-fit md:rounded-[20px]">
              
              <button
                type="button"
                onClick={() => handleTabClick("individuals")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-2 text-xs font-medium transition-all flex-1 md:rounded-2xl md:px-10 md:py-4 md:text-base ${
                  activeTab === "individuals"
                    ? "bg-white text-black"
                    : "text-black/60 hover:text-black/90"
                }`}
              >
                Individuals
              </button>

            
              <button
                type="button"
                onClick={() => handleTabClick("influencers")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-2 text-xs font-medium transition-all flex-1 md:rounded-2xl md:px-10 md:py-4 md:text-base ${
                  activeTab === "influencers"
                    ? "bg-white text-black"
                    : "text-black/60 hover:text-black/90"
                }`}
              >
                Influencers
              </button>

             
              <button
                type="button"
                onClick={() => handleTabClick("businesses")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-2 text-xs font-medium transition-all flex-1 md:rounded-2xl md:px-10 md:py-4 md:text-base ${
                  activeTab === "businesses"
                    ? "bg-white text-black"
                    : "text-black/60 hover:text-black/90"
                }`}
              >
                Businesses
              </button>
            </div>

            
            <div className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4 md:mt-0">
              {activeTab === "individuals" && (
                <div className="me-auto max-w-xl">
                  <p className="my-4 text-xs leading-[21px] text-neutral-600 md:py-14 md:text-[1rem]">
                    Postable is perfect for individuals who want to elevate their social media presence without the hassle.
                    Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share
                    beautiful, impactful posts from your tweets.
                  </p>
                  <ul className="relative flex flex-col items-start gap-2 md:gap-4">
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Effortless Post Creation
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Enhanced Visual Appeal
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Easy Sharing Across Platforms
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Consistent Social Media Presence
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "influencers" && (
                <div className="me-auto max-w-xl">
                  <p className="my-4 text-xs leading-[21px] text-neutral-600 md:py-14 md:text-[1rem]">
                    For influencers, maintaining a consistent and visually appealing social media presence is crucial.
                    Postable empowers you to convert your tweets into captivating images that align with your brand, helping you
                    keep your content fresh and engaging across all platforms.
                  </p>
                  <ul className="relative flex flex-col items-start gap-2 md:gap-4">
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Quick Post Creation
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Boosted Follower Engagement
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Consistent Multi-Platform Presence
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Content Diversification
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "businesses" && (
                <div className="me-auto max-w-xl">
                  <p className="my-4 text-xs leading-[21px] text-neutral-600 md:py-14 md:text-[1rem]">
                    Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn
                    tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement
                    without the need for a full design team.
                  </p>
                  <ul className="relative flex flex-col items-start gap-2 md:gap-4">
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Professional Social Media Presence
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Streamlined Content Creation
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Multi-Platform Integration
                      </div>
                    </li>
                    <li className="relative inline-flex items-center gap-4">
                      <div className="relative size-1.5 rounded bg-neutral-200 md:size-2"></div>
                      <div className="relative mt-[-1px] w-fit whitespace-nowrap text-xs font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-sm">
                        Consistent Brand Messaging
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full  justify-end md:flex md:w-1/3">
          <div className="relative transition-all duration-200 mx-auto h-full w-full max-w-sm md:max-w-none md:py-4 lg:py-12">
            {activeTab === "individuals" && (
              <Image
                src={indi}
                alt="An individual user using Postable"
                className="rounded-lg transition-all duration-200 "
              />
            )}
            {activeTab === "influencers" && (
              <Image
                src={Influencers}
                alt="An influencer using Postable"
                className="rounded-lg transition-all duration-200 "
              />
            )}
            {activeTab === "businesses" && (
              <Image
                src={Busi}
                alt="A business team using Postable"
                className="rounded-lg transition-all duration-200"
              />
            )}
          </div>
        </div>
      </section>
      <section class="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
        <p class="relative max-w-4xl text-3xl font-medium tracking-[-0.4px] text-neutral-800 md:text-[40px] md:leading-[42px]">
        Grow your audience with powerful visuals
          <span class="text-neutral-400"> shared across all your social media platforms.</span>
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

    </div>
  );
};

export default OneSol;
