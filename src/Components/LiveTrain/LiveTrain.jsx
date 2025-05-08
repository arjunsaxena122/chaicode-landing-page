import LiveCard from "./LiveCard";

function LiveTrain() {
  return (
    <section className="py-16 md:py-5 my-20 w-full" id="cohort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#F97316] bg-orange-100 dark:bg-orange-900/30 rounded-full mb-3">
            Our programs
          </span>
          <h2 className="text-5xl md:text-6xl my-2 text-[#F97316] font-bold text-center">
            Cohorts
          </h2>
          <h4 className="text-lg md:text-3xl text-center text-gray-700 dark:text-gray-300">
            Live training classes
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 place-items-center px-4 my-10">
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
            liveLink={
              "https://courses.chaicode.com/learn/batch/Coding-Hero-2025"
            }
          />
          <a
            href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full h-full min-h-[300px] rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-900/10 hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-all duration-300"
          >
            <button className="rounded-full bg-[#F97316] text-white px-8 py-5 font-bold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300/20 dark:hover:shadow-orange-700/20 transition-all duration-300 text-base cursor-pointer">
              View More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LiveTrain;
