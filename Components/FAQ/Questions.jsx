"use client";
import { useState } from "react";

// SVG Arrow Icons
const ArrowIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className={`transition-transform duration-300 ease-in-out ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 9l6 6 6-6"
    />
  </svg>
);

const faqs = [
  {
    id: 1,
    question: "Is Postable free to use?",
    answer:
      "Yes, it’s completely free and unlimited! You can convert as many tweets into social media images as you’d like without any restrictions.",
  },
  {
    id: 2,
    question: "What social media platforms does this tool support?",
    answer:
      "Postable currently supports Twitter, Facebook, Instagram, LinkedIn, and TikTok. We’re constantly working on adding more platforms to our list.",
  },
  {
    id: 3,
    question: "Can I customize the created images?",
    answer:
      "Yes, you can customize the created images by adding your own text, images, and more. You can also choose from a variety of templates to make your images stand out.",
  },
  {
    id: 4,
    question: "Do I need design skills to use this platform?",
    answer: "No, you don’t need any design skills to use this platform.",
  },
  {
    id: 5,
    question: "Do I need to know the format or size of each social media?",
    answer:
      "No, you don’t need to know the format or size of each social media.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-5">
      <section className="text-black/80 rounded-lg">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="relative cursor-pointer p-1 rounded-lg"
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 w-[4em] justify-around gap-2">
                  <p className="font-bold text-[1em] md:text-[19px] text-black/80">
                    {faq.question}
                  </p>
                </div>
                <div className="absolute top-4 right-0 md:top-2 md:right-2 flex items-center justify-center text-black/80">
                  {/* Show ArrowIcon with rotation based on activeIndex */}
                  <ArrowIcon isOpen={activeIndex === index} />
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-4 text-[13px] md:text-[16px]">
                  <p>{faq.answer}</p>
                </div>
              </div>
              <hr className="mt-4" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;
