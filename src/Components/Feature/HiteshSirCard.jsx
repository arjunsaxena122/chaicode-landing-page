import React from "react";

function HiteshSirCard() {
  return (
    <div className="border rounded-2xl overflow-hidden bg-gray-900 border-slate-800 w-full">
      <div className="flex justify-center items-center ">
        <img
          src="/images/hiteshSir.webp"
          alt="hitest-sir-image"
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center mx-4 my-8 px-2 gap-6 text-white">
        <div className="flex items-start flex-col ">
          <h3 className="text-3xl my-3 font-bold text-[#F97316]">
            Hitesh Choudhary
          </h3>
          <p className="text-left text-gray-300">
            retired from corporate and full time YouTuber, ex-founder of LCO
            (accquired), ex-CTO, Sr. Director at PW. 2 YT channels (950k &
            470k), stepped into 43 countrires.
          </p>
        </div>
        <div className="flex items-start flex-col">
          <h3 className="text-3xl my-3 font-bold text-[#F97316]">Approach</h3>
          <p className="text-left text-gray-300">
            Project based courses with peer learning and bounties with many
            activities
          </p>
        </div>
      </div>
    </div>
  );
}

export default HiteshSirCard;
