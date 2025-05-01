function TagCard({title}) {
  return (
    <div className="w-full dark:border dark:border-gray-600 dark:bg-slate-950 px-4 py-5 flex justify-center items-center rounded-xl border shadow-md shadow-black ">
      <h3 className="text-[#fd7616] font-bold text-xl text-center">{title}</h3>
    </div>
  )
}

export default TagCard
