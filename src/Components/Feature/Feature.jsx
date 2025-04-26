import FeatureCard from "./FeatureCard";

function Feature() {
  return (
    <section className="flex justify-center items-center flex-col">
      <h3 className="text-5xl my-2">Buy Why ChaiCode ?</h3>
      <p>ChaiCode exists because we love tech and teaching</p>
      <div className="grid grid-cols-3 mx-10 my-10 gap-10 ">
        <div className="grid grid-rows-3">
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
        <div className="border rounded px-2 py-4">
          <img
            src="/chai-assets/chai-gray.png"
            alt="hitest-sir-image"
            className="w-56 flex justify-self-center border px-3 py-5 rounded"
          />
          <div className="flex items-start flex-col px-2">
            <h3 className="text-2xl my-3">Hitesh Choudhary</h3>
            <p className="text-justify">
              retired from corporate and full time YouTuber, x founder of LCO
              (accquired), C CTO, Sr. Director at PW. 2 YT channels (950k &
              470k), stepped into 43 countrires.
            </p>
          </div>
          <div className="flex items-start flex-col px-2">
            <h3 className="text-2xl my-3">Approach</h3>
            <p>
              Project based courses with peer learning and bouties with many
              activities
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3">
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

      <button className="flex justify-center items-center border px-4 py-2 rounded bg-linear-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer">
        Join all live cohorts
      </button>
    </section>
  );
}

export default Feature;
