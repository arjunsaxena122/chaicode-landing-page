import { Tweet, TweetSkeleton } from "react-tweet";

function TestimonialCard({ id }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-slate-700 overflow-hidden rounded-2xl flex flex-col items-center p-6 gap-4 bg-gray-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-y-95 hover:shadow-2xl hover:shadow-amber-500/50 shadow-lg">
      <Tweet id={id} fallback={<TweetSkeleton />} />
    </div>
  );
}

export default TestimonialCard;
