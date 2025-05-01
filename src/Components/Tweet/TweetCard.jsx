import { Tweet, TweetSkeleton } from "react-tweet";

function TweetCard({ id }) {
  return (
    <div className="w-full max-w-md border border-slate-600  overflow-hidden rounded-2xl flex items-center flex-col px-4 bg-gray-900 cursor-pointer  transition-transform ease-in-out duration-300 hover:scale-101 hover:shadow-amber-700 hover:shadow-lg">
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
