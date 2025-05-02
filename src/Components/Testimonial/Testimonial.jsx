import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section
      className="flex justify-center items-center flex-col md:py-5 md:my-8 text-center"
      id="review"
    >
      <h3 className="text-3xl sm:text-4xl md:text-6xl my-2 font-bold">
        Our Students Feedback
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-center mx-4 sm:mx-8 md:mx-0 mt-2">
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-14 px-4 sm:px-8 py-10 md:py-20">
        <TestimonialCard id="1909991433211203701" />
        <TestimonialCard id="1910028067134636214" />
        <TestimonialCard id="1910028187192435136" />
        <TestimonialCard id="1910136352450166834" />
        <TestimonialCard id="1910275278686822749" />
      </div>
    </section>
  );
}

export default Testimonial;
