function Community() {
  return (
    <section className="flex justify-center item-center flex-col px-8 py-2">
      <div className="flex justify-center items-center px-2 py-5">
        <div className="flex items-start justify-center flex-col w-1/2 mx-5 gap-10">
          <h3 className="px-4 py-1 rounded bg-gray-900 font-bold">Community</h3>
          <h3 className="text-5xl">
            Join our <br /> community where <br /> creativity thrives.
          </h3>
        </div>
        <div className="">
          <img
            src="images/discord.jpg"
            alt="discord-image"
            className="w-lg object-cover overflow-hidden rounded-3xl"
          />
        </div>
      </div>
      <button className="self-center w-fit flex justify-center items-center border px-15 py-4 my-8 rounded-2xl bg-[#ca8a04] border-white mb-10 cursor-pointer text-black font-bold text-lg">
        80,000 Active <br /> coders in Discord
      </button>
    </section>
  );
}

export default Community;
