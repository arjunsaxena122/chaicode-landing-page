import FeatureCard from "./FeatureCard";
import HiteshSirCard from "./HiteshSirCard";

function Feature() {
  return (
    <section className="flex justify-center items-center flex-col">
      <h3 className="text-4xl text-center mx-3 md:mx-0 md:text-6xl my-3 font-bold">Buy Why ChaiCode ?</h3>
      <p className="text-sm text-center mx-5 md:mx-0 md:text-lg my-2">
        ChaiCode exists because we love tech and teaching
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mx-4 md:mx-10 my-10 gap-10 ">
        <div className="flex flex-col items-center gap-10">
          <FeatureCard
            title={"Comprehensive Curriculum"}
            description={
              "Master key concepts and hands-on skills with clarity and confidence.Learn what truly matters, the right way, through, practical, and easy to understand"
            }
          />
          <FeatureCard
            title={"You finish it"}
            description={
              "OUr cohorts are a collaborative journey, students lear together, stay motivated, and complete the course on time as a community"
            }
          />
          <FeatureCard
            title={"Industry Guests"}
            description={
              "We're connected with industr experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students"
            }
          />
        </div>

        <HiteshSirCard />

        <div className="flex flex-col items-center gap-10">
          <FeatureCard
            title={"Code and Chill"}
            description={
              "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place."
            }
          />
          <FeatureCard
            title={"Improve Communication"}
            description={
              "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-leaners teach, share, and grow together."
            }
          />
          <FeatureCard
            title={"Bounties"}
            description={
              "Every cohort comes exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping the motivation high and the leanring fun."
            }
          />
        </div>
      </div>

      <button className="flex justify-center items-center border px-6 py-3 my-12 rounded bg-gradient-to-r from-orange-600 to-[#F97316] dark:border-none  border-amber-700 outline-none mb-10 cursor-pointer transition-transform ease-in-out duration-500 hover:scale-95">
        Get chai member
      </button>
    </section>
  );
}

export default Feature;
