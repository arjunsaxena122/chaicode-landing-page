import TweetCard from "./TweetCard";

function Tweeter() {
  return (
    <section className="flex justify-center items-center flex-col md:px-10 px-4 py-10 ">
      <p className="my-3  text-sm md:text-base px-2  text-[#F97316] text-center">
        Love that we get from our community
      </p>
      <h2 className="text-5xl px-2  md:py-2 md:mb-12 font-bold text-[#F97316] text-center">
        Tweet Love
      </h2>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-10 py-10 md:py-8 md:px-8">
        <TweetCard id="1907045909394788416" />
        <TweetCard id="1905574126112153860" />
        <TweetCard id="1906393735203836076" />
      </div>
    </section>
  );
}

export default Tweeter;
