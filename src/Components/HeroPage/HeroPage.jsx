import HeroButton from "./HeroButton";

function HeroPage() {
  return (
    <section className="flex justify-center items-center flex-col gap-4 md:gap-8 m-auto pt-24 px-4 max-w-7xl">
      <div className="flex flex-col items-center">
        <p className="border-2 border-cyan-400 flex justify-center items-center px-4 py-1 rounded-2xl shadow-lg shadow-cyan-500/30 my-8 text-[11px] md:text-xs font-bold bg-cyan-50/10 dark:bg-cyan-900/10">
          Trusted by 1.5M Code Learners
          <img src="/gif/liveBlinker.gif" alt="live-blinker" className="w-5 md:w-6 ml-2" />
        </p>
        
        <h1 className="text-3xl text-center md:text-6xl font-bold tracking-wide leading-tight">
          Consistency and Community
        </h1>
        
        <h2 className="text-[#F97316] text-lg text-center md:text-3xl font-bold mt-2">
          An unmatched Learning Experience for coding course
        </h2>
        
        <p className="text-center text-base mx-3 py-4 px-2 md:text-[15px] max-w-3xl md:my-4 dark:text-gray-300">
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </p>
        
        <HeroButton text={"Check all Live Cohorts"} />
      </div>
      
      <div className="w-full flex justify-center items-center my-10 md:my-16">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/yG8JMlldoCE?si=XENVc2BvwkhgTaU9"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;