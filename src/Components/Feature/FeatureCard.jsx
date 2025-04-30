function FeatureCard({ title, description }) {
  return (
    <div className="flex items-center px-4 py-4 flex-col border rounded-xl bg-gray-900 border-slate-700">
      <h3 className="text-2xl my-4  text-[#F97316] ">{title}</h3>
      <p className="text-justify text-white">{description}</p>
    </div>
  );
}

export default FeatureCard;
