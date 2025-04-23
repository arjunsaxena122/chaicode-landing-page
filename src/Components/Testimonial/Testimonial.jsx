import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section className="flex justify-center items-center flex-col py-5 my-8">
      <h3 className="text-5xl my-2">Our Students Feedback</h3>
      <p>
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>
      <div className="grid grid-cols-3 mt-10 mx-10">
        <TestimonialCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <TestimonialCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <TestimonialCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <TestimonialCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
        <TestimonialCard
          link={"/chai-assets/chai-gray.png"}
          imgAlt={"teaching"}
          title={"Taught by Professionals"}
          description={
            "Our cohorts are being taught by top industry experts and educators"
          }
        />
      </div>
      <button className="flex justify-center items-center border px-4 py-2 rounded bg-linear-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer">
        Join all live cohorts
      </button>
    </section>
  );
}

export default Testimonial;
