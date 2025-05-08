import { Tweet, TweetSkeleton } from "react-tweet";

function TweetCard({ id }) {
  return (
    <div className="w-full max-w-md dark:border dark:border-slate-600  overflow-hidden rounded-2xl flex items-center flex-col px-4 dark:bg-gray-900 cursor-pointer  transition-transform ease-in-out duration-300 hover:scale-101 hover:shadow-cyan-400 hover:shadow-md">
      <div className="h-1 w-full bg-gradient-to-r from-[#F97316] to-orange-500 rounded"></div>
      <Tweet
        id={id}
        fallback={
          <div className="min-h-[200px]">
            <TweetSkeleton />
          </div>
        }
      />
    </div>
  );
}

export default TweetCard;
