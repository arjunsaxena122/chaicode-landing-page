function LiveCard({
  video,
  title,
  desc,
  discountPrice,
  actualPrice,
  liveLink,
}) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-slate-800 shadow-lg overflow-hidden flex justify-center flex-col dark:bg-slate-900 hover:shadow-xl hover:shadow-orange-300/20 dark:hover:shadow-orange-700/20 transition-all ease-in-out duration-300 cursor-pointer hover:scale-98 group">
      <div className="w-full relative flex justify-center items-center aspect-video overflow-hidden bg-gray-900 group-hover:brightness-105 transition-all duration-300">
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center z-20 shadow-md animate-pulse">
          <span className="h-2 w-2 bg-white rounded-full mr-1"></span>
          LIVE
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <iframe
          className="w-full h-full"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full flex flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#F97316] text-left">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 text-justify">
          {desc}
        </p>

        <div className="flex  items-center gap-4 mt-3">
          <span className="bg-orange-100 dark:bg-orange-900/30 text-[#F97316] px-3 py-1 rounded md:rounded-full text-sm md:text-lg font-bold ">
            {discountPrice}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            {actualPrice}
          </span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs m px-2 py-1 rounded md:rounded-full ml-auto ">
            Limited Offer
          </span>
        </div>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-3 mt-4 rounded-lg transition-all ease-in-out duration-300 cursor-pointer tracking-wider text-center block shadow-sm hover:shadow-md group-hover:translate-y-0 translate-y-1"
        >
          Learn Now
        </a>
      </div>
    </div>
  );
}

export default LiveCard;
