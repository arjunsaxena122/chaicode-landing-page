import BenefitsCard from "./BenefitsCard";

function BenefitsCohort() {
  return (
    <section className="flex justify-center items-center flex-col mx-10">
      <h3 className="text-5xl my-4">Key Benefits of Cohorts</h3>
      <p>
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </p>
      <div className="grid grid-cols-3 my-10">
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <BenefitsCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
      </div>

      <div className="flex justify-around items-center py-10 ">
        <img
          src="/chai-assets/chai-gray.png"
          alt="alumni-network-image"
          className="w-40"
        />
        <div className=" w-1/2 mx-10 px-10 py-10 flex items-start flex-col">
          <h3 className="text-4xl">Alumni Network and job listings</h3>
          <p className="text-justify">
            The alumni network that you always wished for in your college. We
            have a dedicated platform wehre students get to know each other, do
            projects, make agencies and join Hackathons. Our HR team also post
            regualr job updates that you can apply directly whenever you are
            ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsCohort;
