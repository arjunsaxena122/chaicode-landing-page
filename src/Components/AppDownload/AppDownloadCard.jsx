import { FaRegStar } from "react-icons/fa";

function AppDownloadCard({
  title,
  description,
  rating,
  hour,
  tagText,
}) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-white rounded-2xl px-4 sm:px-6 py-5 hover:scale-[1.02] transition-transform duration-200 cursor-pointer shadow-md border border-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-xs sm:text-sm tracking-wide text-[#F97316] font-semibold">
          {title}
        </h3>
        <span className="bg-[#F97316] text-white font-semibold px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs">
          {tagText}
        </span>
      </div>
      <p className="text-base sm:text-lg font-bold">{description}</p>
      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 gap-2 sm:gap-3">
        <span className="flex items-center gap-1">
          {rating}
          <FaRegStar className="text-yellow-400" />
        </span>
        <span className="hidden sm:inline">•</span>
        <span>{hour} hours</span>
      </div>
    </div>
  );
}

export default AppDownloadCard;