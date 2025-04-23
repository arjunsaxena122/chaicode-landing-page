import HeroButton from "../HeroPage/HeroButton";
import TweetCard from "./TweetCard";

function Tweet() {
  return (
    <section className="flex justify-center items-center flex-col my-12 mx-10">
      <p className="my-1 px-2 py-2">Love that we get from our community</p>
      <h3 className="text-5xl px-2 py-2">Tweet Love</h3>
      <div className="flex justify-center items-center gap-20 py-8 px-8 my-10">
        <TweetCard heading={"Radhika gupta"} />
        <TweetCard heading={"Krishna Sharma"} />
        <TweetCard heading={"Dhiru Bhai"} />
      </div>
      <button className="flex justify-center items-center border px-4 py-2 rounded bg-linear-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer">
        Join all live cohorts
      </button>
    </section>
  );
}

export default Tweet;
