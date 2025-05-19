import FeatureCard from "./FeatureCard";
import HiteshSirCard from "./HiteshSirCard";

function Feature() {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-amber-500/10 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500/10 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"></span>
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                Our Mission
              </span>
              <span className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></span>
            </div>
          </div> */}

          <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 relative inline-block">
            Why ChaiCode?
          </h3>

          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ChaiCode exists because we love tech and teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-8 md:gap-12">
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

          <div className="flex justify-center items-center">
            <HiteshSirCard />
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-12">
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

        <div className="flex justify-center mt-16">
          <button className="relative overflow-hidden group px-10 py-5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-orange-400 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer">
            <span className="relative z-10">Get chai member</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feature;
