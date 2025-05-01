import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section
      className="flex justify-center items-center flex-col md:py-5 md:my-8 text-center"
      id="review"
    >
      <h3 className="text-4xl md:text-6xl my-2  font-bold">
        Our Students Feedback
      </h3>
      <p className=" text-base text-center mx-3 md:mx-0 md:text-lg mt-2">
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-10 px-2 py-10 md:py-20">
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
