import TweetCard from "./TweetCard";

function Tweeter() {
  return (
    <section className="flex justify-center items-center flex-col md:px-10 md:py-15 md:mx-10 py-10 ">
      <p className="my-1 px-2 py-2 text-[#F97316] text-center">Love that we get from our community</p>
      <h3 className="text-5xl px-2 py-2 font-bold text-[#F97316] text-center">
        Tweet Love
      </h3>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-5 md:gap-10 md:py-8 md:px-8 md:my-10 my-20 mx-20">
        <TweetCard id = "1907045909394788416"/>
        <TweetCard id = "1905574126112153860"/>
        <TweetCard id = "1906393735203836076"/>
      </div>
    </section>
  );
}

export default Tweeter;
