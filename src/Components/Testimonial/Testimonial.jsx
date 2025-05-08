import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="review">
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 ">
            <span className="relative inline-flex h-12 overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-full w-full opacity-60"></span>
              </span>
              <span className="relative inline-flex items-center justify-center px-6 py-1.5 text-white font-bold rounded-full border-2 border-orange-500">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-orange-400 opacity-75 mr-2"></span>
                <span className="relative h-2 w-2 rounded-full bg-orange-200 mr-2"></span>
                STUDENT SUCCESS STORIES
              </span>
            </span>
          </div>

          <h3 className="text-5xl sm:text-6xl md:text-7xl mb-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Our Students Feedback
          </h3>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-14 place-items-center">
          <TestimonialCard id="1909991433211203701" />
          <TestimonialCard id="1910028067134636214" />
          <TestimonialCard id="1910028187192435136" />
          <TestimonialCard id="1910136352450166834" />
          <TestimonialCard id="1910275278686822749" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50 dark:from-gray-800 to-transparent"></div>
    </section>
  );
}

export default Testimonial;
