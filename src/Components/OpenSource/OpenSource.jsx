function OpenSource() {
  return (
    <section className="flex justify-center items-center flex-col mx-10 my-12">
      <h3 className="text-5xl">FreeAPI - Open Source</h3>
      <div className="flex justify-center my-12 gap-10 mx-10 py-5">
        <div className="w-1/2 flex flex-col items-start px-8 py-5">
          <h3 className="text-3xl font-bold">Unlock Your Potential with Our API Hub</h3>
          <p className="text-justify my-10 text-sm">
            Our API Hub is designed to streamline your learning experience in
            API handling across various programming languages. <br /> With this
            resource, you can effortlessly build and showcases your front-end
            portfolio in both web and mobile applications. <br /> Join us to
            enhance your skills and take your coding projects to hte next level
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xJq0EQMFGyg?si=sXVXT1umIv4TFIVq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className="flex justify-center items-center border px-4 py-2 rounded bg-linear-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer">
        Check FreeAPI Docs
      </button>
    </section>
  );
}

export default OpenSource;
