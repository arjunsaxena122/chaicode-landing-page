import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import courses from "./Courses";

function UdemyCard() {
  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 bg-white shadow-md shadow-amber-700 border-[#F97316] rounded-3xl py-6 md:py-10 md:px-10 border dark:bg-black dark:text-whtie">
              <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {course.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-300 mb-6">
                  {course.description}
                </p>
                <span className="inline-block font-bold bg-amber-800 text-white py-2 px-5 rounded-full text-lg md:text-2xl">
                  {course.rating}
                </span>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center ">
                <img
                  src={course.image}
                  alt="course-image"
                  className="rounded-xl object-cover max-h-64 md:max-h-80 border border-amber-700"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UdemyCard;
