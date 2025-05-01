import TweetCard from "./TweetCard";

function Tweeter() {
  return (
    <section className="flex justify-center items-center flex-col py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="w-full text-center mb-8">
        <p className="text-sm md:text-base font-medium text-[#F97316] mb-2">
          Love that we get from our community
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F97316] mb-4">
          Tweet Love
        </h2>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <TweetCard id="1907045909394788416" />
        <TweetCard id="1905574126112153860" />
        <TweetCard id="1906393735203836076" />
      </div>
     
    </section>
  );
}

export default Tweeter;