const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5l7 7-7 7" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const Content = () => {
  return (
    <>
      <div className="w-[100%]  flex flex-col items-start ">
        <div class="max-w-sm">
          <div class="hidden w-max flex-col md:flex">
            <span class="text-lg font-medium text-neutral-500">
              Couldn't find your answer?
            </span>
            <a
              target="_blank"
              class="flex items-center gap-1 text-md font-medium text-purple-400"
              href="https://forms.gle/DAowWbDE9fNKh8Ji8"
            >
              Ask a Question{" "}
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
                class="lucide lucide-arrow-right size-3"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
