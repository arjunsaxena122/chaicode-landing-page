import { FaRegStar } from "react-icons/fa";

export default function AppDownloadCard({
  title,
  description,
  rating,
  hour,
  tagText,
}) {
  return (
    <div className="flex flex-col gap-4 w-full bg-[#2a2a2a] text-white rounded-2xl px-6 py-5 hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-sm tracking-wide text-[#F97316] font-semibold">
          {title}
        </h3>
        <span className="bg-[#F97316] text-white font-semibold px-3 py-1 rounded-full text-xs">
          {tagText}
        </span>
      </div>
      <p className="text-lg font-bold">{description}</p>
      <div className="flex items-center text-sm text-gray-300 gap-3">
        <span className="flex items-center gap-1">
          {rating}
          <FaRegStar className="text-yellow-400" />
        </span>
        •<span>{hour} hours</span>
      </div>
    </div>
  );
}
