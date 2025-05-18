import BenefitsCard from "./BenefitsCard"

function BenefitsCohort() {
  return (
    <section className="relative py-20 px-4 md:px-10  dark:from-gray-900 dark:to-gray-800/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-500 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-600 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute -bottom-20 left-1/4 w-40 h-40 bg-amber-700 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center mb-4">
            <span className="w-8 h-1 bg-amber-500 rounded-full mr-3"></span>
            <span className="uppercase tracking-widest text-amber-600 dark:text-amber-500 text-sm font-bold">Learn Together</span>
            <span className="w-8 h-1 bg-amber-500 rounded-full ml-3"></span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-6xl mb-4 font-bold text-center text-gray-800 dark:text-white leading-tight">
            Key Benefits of Cohorts
          </h3>
          
          <p className="text-center text-sm sm:text-base md:text-lg max-w-xl text-gray-600 dark:text-gray-300">
            Cohorts are the best way to learn because you finish the course in a
            timely manner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24">
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

        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent dark:from-amber-900/10 dark:to-transparent"></div>
          
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            <div className="w-full md:w-1/2 flex justify-center items-center relative mb-10 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full transform -translate-x-1/2 scale-150 blur-3xl"></div>
              <div className="bg-white dark:bg-gray-800 rounded-full p-8 shadow-lg relative z-10">
                <img
                  src="/chai-assets/chai-gray.png"
                  alt="alumni-network-image"
                  className="w-40 md:w-60 object-contain"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6"></div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-gray-800 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Alumni Network and job listings
                </span>
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                The alumni network that you always wished for in your college. We
                have a dedicated platform where students get to know each other, do
                projects, make agencies and join Hackathons. Our HR team also posts
                regular job updates that you can apply directly whenever you are
                ready.
              </p>
              
              <div className="mt-8 flex items-center">
                <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 px-6 rounded-full font-medium flex items-center group transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
                  Join Network
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="ml-4 flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-amber-${400 + i*100} to-amber-${300 + i*100} border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-white font-bold`}>
                      {i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-amber-600 dark:text-amber-400 font-bold">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsCohort