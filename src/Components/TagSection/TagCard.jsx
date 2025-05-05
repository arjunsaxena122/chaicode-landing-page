function TagCard({ title }) {
  return (
    <div className="w-full dark:border dark:border-gray-900 dark:bg-slate-950 px-4 py-5 flex justify-center items-center rounded-xl shadow-sm shadow-black transition-all duration-300 hover:scale-105">
      <h2 className="text-[#fd7616] font-bold text-base md:text-xl text-center">
        {title}
      </h2>
    </div>
  );
}

export default TagCard;
