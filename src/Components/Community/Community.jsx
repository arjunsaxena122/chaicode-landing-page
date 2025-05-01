function Community() {
  return (
    <section className="flex justify-center item-center flex-col px-8 py-2 mb-20  ">
      <div className="flex flex-wrap justify-center my-10 px-2 py-5 shadow-sm shadow-black dark:shadow-white rounded-2xl">
        <div className="flex items-center justify-center flex-col md:w-1/2 gap-10">
          <h2 className="px-6 py-2 mx-auto md:mx-18 border border-gray-800 rounded bg-gray-900 font-bold text-white text-center ">
            Community
          </h2>
          <h3 className="text-4xl text-left mx-6 md:text-6xl md:mx-0">
            Join our <br /> community where <br /> creativity thrives.
          </h3>
        </div>
        <div className="my-10 w-full md:w-1/2">
          <img
            src="images/discord.jpg"
            alt="discord-image"
            className="w-full h-full object-cover overflow-hidden rounded-full"
          />
        </div>
        <a
          href="https://hitesh.ai/discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="self-center w-fit flex justify-center items-center border md:px-15 md:py-4 md:my-8 px-6 py-3 rounded-2xl bg-[#ca8a04] border-[#a97913] mb-10 cursor-pointer text-black font-bold text-sm md:text-lg transition-transform ease-in-out duration-300 hover:scale-95 outline-none">
            80,000 Active <br /> coders in Discord
          </button>
        </a>
      </div>
    </section>
  );
}

export default Community;
