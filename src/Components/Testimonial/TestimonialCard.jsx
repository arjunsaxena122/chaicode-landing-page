import { Tweet, TweetSkeleton } from "react-tweet";
import { useState } from "react";

function TestimonialCard({ id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d ${
          isHovered ? "rotate-y-5" : ""
        }`}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-900/30 rounded-3xl shadow-[0_35px_60px_-15px_rgba(249,115,22,0.2)] overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-300 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700"></div>

          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
            Verified
          </div>

          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 dark:bg-orange-900/20 rounded-full"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-orange-50 dark:bg-orange-900/10 rounded-full"></div>
          </div>

          <div className="w-full h-full p-6 pt-8 flex flex-col">
            <div className="relative z-10 mt-6 flex-grow">
              <div className="transform transition-all duration-500 group-hover:scale-102">
                <Tweet
                  id={id}
                  fallback={
                    <div className="min-h-[200px] flex items-center justify-center">
                      <TweetSkeleton />
                    </div>
                  }
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Student Success
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-orange-600 to-orange-400 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
