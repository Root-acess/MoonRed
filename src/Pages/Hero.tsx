import { useNavigate } from 'react-router-dom';
import Bg from "../Component/Bg";

const Hero = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect to the PromptPage
    navigate('/ai');
  };

  return (
    <div className="relative overflow-hidden bg-black py-6">
      {/* Bg Component */}
      <div className="absolute inset-0 z-0">
        <Bg />
      </div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="#"
          >
            Discover Moonred's Features
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                Learn More
              </span>
              <svg
                className="shrink-0 size-4 text-blue-600"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
            Elevate Your Conversations with Moonred
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-300">
            Moonred is an advanced AI chatbot designed to make conversations smarter and more engaging.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <button
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
            onClick={handleRedirect}
          >
            <i className="fab fa-google fa-2x"></i>
            Continue with Google
          </button>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
};

export default Hero;
