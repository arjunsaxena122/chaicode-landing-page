import HeroButton from "./HeroButton";

function HeroPage() {
  return (
    <section className="w-full max-w-7xl flex justify-center items-center flex-col gap-6 md:gap-10 lg:gap-14 mx-auto pt-24 px-4">
      <div className="flex flex-col items-center">
        <p className="border-2 border-cyan-400 flex items-center px-4 py-1 rounded-2xl shadow-lg shadow-cyan-500/30 my-8 text-[10px] xs:text-xs sm:text-sm md:text-base font-bold bg-cyan-50/10 dark:bg-cyan-900/10 mb-6">
          Trusted by 1.5M Code Learners
          <img
            src="/gif/liveBlinker.gif"
            alt="live-blinker"
            className="w-5 md:w-6 ml-2"
          />
        </p>

        <h1 className="text-3xl text-center md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.2]">
          Consistency and Community
        </h1>

        <h2 className="text-[#F97316] text-lg text-center md:text-3xl font-bold mt-4">
          An unmatched Learning Experience for coding course
        </h2>

        <p className="text-gray-600  text-center text-sm md:text-base  py-4 px-2 md:text-[15px] max-w-3xl md:my-4 dark:text-gray-300">
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </p>

        <div className="mt-6 md:mt-8">
  <HeroButton text="Check all Live Cohorts" />
</div>

      </div>

      <div className="w-full flex justify-center items-center my-10 md:my-16">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
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
