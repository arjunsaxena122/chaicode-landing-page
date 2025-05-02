import FeatureCard from "./FeatureCard";
import HiteshSirCard from "./HiteshSirCard";

function Feature() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 md:px-10">
      <h3 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white mt-8">
        Why ChaiCode?
      </h3>
      <p className="text-sm md:text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
        ChaiCode exists because we love tech and teaching.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <FeatureCard
            title="Comprehensive Curriculum"
            description="Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, through practical, easy to understand methods."
          />
          <FeatureCard
            title="You finish it"
            description="Our cohorts are a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community."
          />
          <FeatureCard
            title="Industry Guests"
            description="We're connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students."
          />
        </div>

        <div className="flex justify-center items-center w-full">
          <HiteshSirCard />
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <FeatureCard
            title="Code and Chill"
            description="Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place."
          />
          <FeatureCard
            title="Improve Communication"
            description="One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together."
          />
          <FeatureCard
            title="Bounties"
            description="Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping the motivation high and the learning fun."
          />
        </div>
      </div>

      <button className="mt-12 mb-16 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-orange-400 shadow-lg hover:scale-95 transition-transform duration-300 cursor-pointer">
        Get chai member
      </button>
    </section>
  );
}

export default Feature;
