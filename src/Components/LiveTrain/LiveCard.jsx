function LiveCard({
  video,
  title,
  desc,
  discountPrice,
  actualPrice,
  liveLink,
}) {
  return (
    <div className="w-full rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex justify-center flex-col bg-slate-900 hover:shadow-amber-700 transition-all ease-in-out duration-400 cursor-pointer">
      <div className="w-full flex justify-center items-center aspect-video">
        <iframe
          className="w-full h-full"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full flex flex-col gap-3 p-4 sm:p-5">
        <h3 className="text-xl sm:text-2xl font-bold text-[#F97316] text-left">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 text-justify">{desc}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-lg font-bold text-white">{discountPrice}</span>
          <span className="text-sm text-gray-400 line-through">
            {actualPrice}
          </span>
        </div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-2 mt-4 rounded-lg transition-all ease-in-out duration-400 cursor-pointer tracking-wider text-center block"
        >
          Learn Now
        </a>
      </div>
    </div>
  );
}

export default LiveCard;
