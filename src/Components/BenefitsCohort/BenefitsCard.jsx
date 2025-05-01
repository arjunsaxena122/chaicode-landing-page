function BenefitsCard({ link, imgAlt, title, description }) {
  return (
    <div className="border rounded-xl flex flex-col justify-start items-center px-6 py-8 border-slate-800 dark:bg-[#001618] hover:scale-105 transition-transform duration-300 shadow-sm shadow-amber-600 border-none">
      <div className="w-[120px] h-[120px] mb-6 rounded-full overflow-hidden dark:bg-white border flex justify-center items-center ">
        <img src={link} alt={imgAlt} className="w-full h-full object-contain" />
      </div>

      <h3 className="font-bold text-center tracking-wider text-xl text-[#F97316] mb-2">
        {title}
      </h3>

      <p className="text-center dark:text-gray-300 text-sm text-black">
        {description}
      </p>
    </div>
  );
}

export default BenefitsCard;
