import HeroButton from "./HeroButton";

function HeroPage() {
  return (
    <section className="flex justify-center items-center flex-col gap-4 md:gap-6 m-auto pt-20 px-4 max-w-7xl">
      <div className="flex flex-col items-center md:my-30">
      <p className="border-2 flex justify-center items-center px-4 py-1 rounded-2xl shadow-lg shadow-cyan-500/50 my-8 text-[11px] font-bold">
        Trusted by 1.5M Code Learners
        <img src="/gif/liveBlinker.gif" alt="live-blinker" className=" w-5 md:w-8" />
      </p>
      <h1 className=" text-3xl text-center md:text-6xl font-bold tracking-wide">
        Consistency and Community
      </h1>
      <h2 className="text-[#F97316] text-lg text-center md:text-3xl font-bold">
        An unmatched Learning Experience for coding course
      </h2>
      <p className="text-center text-base mx-3 py-2 px-2 md:text-[15px] max-w-3xl md:my-6">
        Content is every where, we provide a learning experience that is
        unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
        Alumni Network, Doubt sessions, Group projects and so many other
        activities to keep you on track.
      </p>
      <HeroButton text={"Check all Live Cohorts"} />
      </div>
      <div className="flex justify-center items-center aspect-video my-10 md:my-30">
        <iframe
          src="https://www.youtube.com/embed/yG8JMlldoCE?si=XENVc2BvwkhgTaU9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full aspect-video md:w-[900px] md:h-[450px] rounded-2xl overflow-hidden mx-12"
        ></iframe>
      </div>
    </section>
  );
}

export default HeroPage;
