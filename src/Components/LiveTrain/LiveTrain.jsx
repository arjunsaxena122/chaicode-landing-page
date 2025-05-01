import LiveCard from "./LiveCard";

function LiveTrain() {
  return (
    <section
      className="flex justify-center items-center flex-col md:py-10 my-20 w-full"
      id="cohort"
    >
      <h3 className="text-6xl my-2 text-[#F97316] font-bold text-center">
        Cohorts
      </h3>
      <h4 className="text-lg md:text-3xl text-center">Live training classes</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center md:mx-0 md:gap-12 md:px-3 my-10 mx-5">
        <LiveCard
          video={
            "https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"
          }
          title={"Web Dev Cohort - Live 1.0"}
          desc={
            "Learn to build software for web with best and latest tech stack"
          }
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
          liveLink={"https://hitesh.ai/cohort"}
        />
        <LiveCard
          video={
            "https://www.youtube.com/embed/VNb_LawBBWU?si=aG6B00tXJAzGincs"
          }
          title={"GenAI with Python"}
          desc={
            "Learn to build software for web with best and latest tech stack"
          }
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
          liveLink={"https://hitesh.ai/genai-cohort"}
        />
        <LiveCard
          video={
            "https://www.youtube.com/embed/Kjd-SWpe1do?si=Ro4zGJLlRzh_J9Jx"
          }
          title={"Full Stack Data Science 1.0"}
          desc={
            "Learn to build software for web with best and latest tech stack"
          }
          discountPrice={"4,999 INR"}
          actualPrice={"7,999 INR"}
          liveLink={"https://hitesh.ai/data-science"}
        />
        <LiveCard
          video={
            "https://www.youtube.com/embed/oBLpqSHc3lA?si=fTdnzFt-82ufCFZa"
          }
          title={"DevOps for developers 1.0"}
          desc={
            "Learn to build software for web with best and latest tech stack"
          }
          discountPrice={"4,999 INR"}
          actualPrice={"7,999 INR"}
          liveLink={"https://hitesh.ai/devops-cohort"}
        />
        <LiveCard
          video={
            "https://www.youtube.com/embed/Fw3FezexzV0?si=mmTNyek_BvaPQBnZ"
          }
          title={"Coding Hero 2025"}
          desc={
            "Learn to build software for web with best and latest tech stack"
          }
          discountPrice={"299 INR"}
          actualPrice={"599 INR"}
          liveLink={"https://courses.chaicode.com/learn/batch/Coding-Hero-2025"}
        />
        <a
          href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-full bg-[#F97316] text-white px-8 py-5 font-bold hover:bg-orange-500 transition text-base cursor-pointer">
            View More
          </button>
        </a>
      </div>
    </section>
  );
}

export default LiveTrain;
