import { GoDotFill } from "react-icons/go";
import HeroButton from "./HeroButton";

function HeroPage() {
  return (
    <section className="max-w-4xl flex justify-center items-center flex-col gap-3 m-auto py-20">
      <p className="border px-4 py-1 rounded shadow-lg shadow-cyan-500/50 my-8 text-[11px]">
        Trusted by 1.5M Code Learners
      </p>
      <h1 className="text-6xl">Consistency and Community</h1>
      <h2 className="text-[#F97316] text-xl">
        An unmatched Learning Experience for coding course
      </h2>
      <p className="text-center text-[14px] max-w-3xl mb-10">
        Content is every where, we provide a learning experience that is
        unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
        Alumni Network, Doubt sessions, Group projects and so many other
        activities to keep you on track.
      </p>
      <HeroButton text={"Check all Live Cohorts"} link={"/gif/liveBlinker.gif"} />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yG8JMlldoCE?si=XENVc2BvwkhgTaU9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded"
      ></iframe>
    </section>
  );
}

export default HeroPage;
