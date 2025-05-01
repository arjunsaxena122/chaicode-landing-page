function FeatureCard({ title, description }) {
  return (
    <div className="flex items-center px-6 py-6 flex-col border rounded-xl bg-gray-900 border-slate-700 shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 w-full md:max-w-md">
      <h3 className="text-2xl my-4 text-[#F97316] font-bold">{title}</h3>
      <p className="text-justify text-white text-sm md:text-base">{description}</p>
    </div>
  );
}

export default FeatureCard;
