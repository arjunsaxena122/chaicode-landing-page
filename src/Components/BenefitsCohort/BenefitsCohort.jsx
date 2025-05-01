import BenefitsCard from "./BenefitsCard";

function BenefitsCohort() {
  return (
    <section className="flex justify-center items-center flex-col px-4 md:px-10 md:my-10">
      <h3 className="text-4xl text-center md:text-6xl my-4 font-bold">
        Key Benefits of Cohorts
      </h3>
      <p className="text-center text-md md:text-lg max-w-3xl">
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 md:my-20 md:px-8 py-10 gap-8 w-full">
        <BenefitsCard
          link={"/images/professional.jpg"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/images/bounties.png"}
          imgAlt={"teaching"}
          title={"Bounties"}
          description={
            "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Coding hostels"}
          description={
            "There is nothing like late night discussion with fellow learners and solving bugs"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Peer Code Reviews"}
          description={
            "With Our internal tools like Masterji, every code assignment gets feedback to improve your code"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Leet Lab"}
          description={
            "Our in-house built LeetCode style platform that helps you to understand foundation of programming language"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Revision classes"}
          description={
            "We have so many peer classes by fellow learners that you get so many chances to learn that topic"
          }
        />
      </div>

      <div className="flex flex-col md:flex-row  justify-around items-center mb-20 border border-slate-800 rounded-xl py-10 px-6 md:px-8 shadow-sm shadow-amber-600 duration-400 transition-all ease-in-out w-full">

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/chai-assets/chai-gray.png"
            alt="alumni-network-image"
            className="w-40 md:w-60"
          />
        </div>
        <div className="w-full md:w-1/2 py-10 md:px-4 flex items-start flex-col ">
          <h3 className="text-3xl md:text-5xl text-center mb-4 text-[#F97316] font-bold">
            Alumni Network and job listings
          </h3>
          <p className="text-left text-sm md:text-base">
            The alumni network that you always wished for in your college. We
            have a dedicated platform wehre students get to know each other, do
            projects, make agencies and join Hackathons. Our HR team also post
            regular job updates that you can apply directly whenever you are
            ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsCohort;
