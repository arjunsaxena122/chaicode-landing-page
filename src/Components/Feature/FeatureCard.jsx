function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl dark:bg-gray-950 shadow-sm transition-shadow duration-300 w-full max-w-md  shadow-black dark:shadow-white">
      <h3 className="text-2xl font-bold text-orange-500 mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base text-justify">{description}</p>
    </div>
  );
}

export default FeatureCard;
