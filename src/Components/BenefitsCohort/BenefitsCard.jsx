function BenefitsCard({ link, imgAlt, title, description }) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-amber-500">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-bl-full"></div>

      <div className="flex flex-col justify-start items-center px-6 py-10 z-10 relative">
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-6 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 shadow-lg overflow-hidden p-4 flex justify-center items-center border-2 border-amber-500/20 group-hover:border-amber-500 transition-all duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex justify-center items-center p-3">
            <img
              src={link}
              alt={imgAlt}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <h3 className="font-bold text-center tracking-wider text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-500 dark:to-amber-600 bg-clip-text text-transparent mb-4 group-hover:from-amber-700 group-hover:to-amber-500 transition-all duration-300">
          {title}
        </h3>

        <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>

        <p className="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BenefitsCard;
