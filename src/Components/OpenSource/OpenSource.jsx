function OpenSource() {
  return (
    <section className="flex justify-center items-center flex-col md:mx-10 px-5 my-12 ">
      <h3 className="text-4xl md:text-6xl text-center text-[#F97316] font-bold mb-8">
        FreeAPI - Open Source
      </h3>
      <div className="flex flex-wrap md:flex-nowrap justify-center my-10 gap-10 md:mx-10 py-5 w-full">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start gap-5 rounded-lg px-8 py-10 border border-slate-800 bg-gray-950 text-white">
          <h3 className="text-3xl md:text-6xl text-center font-bold ">
            Unlock Your Potential with Our API Hub
          </h3>
          <p className=" text-sm md:text-lg text-left my-5">
            Our API Hub is designed to streamline your learning experience in
            API handling across various programming languages. With this
            resource, you can effortlessly build and showcases your front-end
            portfolio in both web and mobile applications.Join us to enhance
            your skills and take your coding projects to hte next level
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full aspect-video overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full aspect-video"
            src="https://www.youtube.com/embed/xJq0EQMFGyg?si=sXVXT1umIv4TFIVq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <a href="https://freeapi.app" target="_blank" rel="noopener noreferrer">
        <button className="flex justify-center items-center border px-6 py-3 rounded bg-gradient-to-r from-orange-600 to-[#F97316] border-none my-10 cursor-pointer transition-transform ease-in-out duration-300 hover:scale-95 text-sm md:text-xl">
          Check FreeAPIs Docs
        </button>
      </a>
    </section>
  );
}

export default OpenSource;
