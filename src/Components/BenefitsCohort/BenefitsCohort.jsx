import BenefitsCard from "./BenefitsCard";

function BenefitsCohort() {
  return (
    <section className="flex justify-center items-center flex-col px-4 md:px-10 md:my-10">
      <h3 className="text-3xl sm:text-4xl md:text-6xl my-4 font-bold text-center">
        Key Benefits of Cohorts
      </h3>
      <p className="text-center text-sm sm:text-base md:text-lg max-w-xl">
        Cohorts are the best way to learn because you finish the course in a
        timely manner
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 md:my-20 md:px-8 py-10 gap-8 w-full">
        <BenefitsCard
          link={"/images/professional.jpg"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/images/dollars.png"}
          imgAlt={"teaching"}
          title={"Bounties"}
          description={
            "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard"
          }
        />
        <BenefitsCard
          link={"/images/hostel.png"}
          imgAlt={"teaching"}
          title={"Coding hostels"}
          description={
            "There is nothing like late night discussion with fellow learners and solving bugs"
          }
        />
        <BenefitsCard
          link={"/images/peer-reviews.png"}
          imgAlt={"teaching"}
          title={"Peer Code Reviews"}
          description={
            "With Our internal tools like Masterji, every code assignment gets feedback to improve your code"
          }
        />
        <BenefitsCard
          link={"/images/leetlab.png"}
          imgAlt={"teaching"}
          title={"Leet Lab"}
          description={
            "Our in-house built LeetCode style platform that helps you to understand foundation of programming language"
          }
        />
        <BenefitsCard
          link={"/images/revision-class.jpg"}
          imgAlt={"teaching"}
          title={"Revision classes"}
          description={
            "We have so many peer classes by fellow learners that you get so many chances to learn that topic"
          }
        />
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mb-20  rounded-xl py-10 px-6 md:px-8 shadow-sm shadow-amber-600 duration-400 transition-all ease-in-out w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/chai-assets/chai-gray.png"
            alt="alumni-network-image"
            className="w-40 md:w-60"
          />
        </div>
        <div className="w-full md:w-1/2 py-10 md:px-4 flex items-start flex-col ">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-4 text-[#F97316] font-bold">
            Alumni Network and job listings
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-left text-sm md:text-sm lg:text-base">
            The alumni network that you always wished for in your college. We
            have a dedicated platform where students get to know each other, do
            projects, make agencies and join Hackathons. Our HR team also posts
            regular job updates that you can apply directly whenever you are
            ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsCohort;
