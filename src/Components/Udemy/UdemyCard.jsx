import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import courses from "./Courses";
import { useState } from "react";

function UdemyCard() {
  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 bg-gradient-to-br from-white to-amber-50 shadow-lg border-l-4 border-amber-500 rounded-lg py-8 px-6 md:px-12 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center md:items-start w-full md:w-3/5 text-center md:text-left">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-amber-500 h-1 w-10 rounded"></span>
                  <span className="text-amber-500 font-bold">
                    FEATURED COURSE
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center gap-1 font-bold bg-amber-600 text-white py-2 px-5 rounded-full text-lg shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </span>
                  <button className="text-amber-600 font-semibold border-2 border-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 py-2 px-6 rounded-full cursor-pointer">
                    Enroll Now
                  </button>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    8 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    12 lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    24/7 Support
                  </span>
                </div>
              </div>
              <div className="w-full md:w-2/5 flex justify-center items-center">
                <div className="relative group">
                  <img
                    src={course.image}
                    alt="course-image"
                    className="rounded-lg object-cover w-full max-h-64 md:max-h-80 border border-gray-200 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-amber-600 rounded-full p-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UdemyCard;
