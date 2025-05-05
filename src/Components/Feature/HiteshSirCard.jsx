function HiteshSirCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden dark:bg-gray-950 shadow-sm shadow-black dark:shadow-white w-full max-w-md ">
      <div className="w-full">
        <img
          src="/images/hiteshSir.webp"
          alt="hitest-sir-image"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 p-6 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-2">Hitesh Choudhary</h3>
          <p>
            retired from corporate and full time YouTuber, ex-founder of LCO
            (accquired), ex-CTO, Sr. Director at PW. 2 YT channels (950k &
            470k), stepped into 43 countrires.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-2">Approach</h3>
          <p>
            Project based courses with peer learning and bounties with many
            activities
          </p>
        </div>
      </div>
    </div>
  );
}

export default HiteshSirCard;
