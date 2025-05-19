function FeatureCard({ title, description }) {
  return (
    <div className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl border-t-4 border-orange-500 transition-all duration-300 w-full max-w-md overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-amber-100 dark:bg-amber-900/10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 delay-100"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mx-auto mb-4 group-hover:w-24 transition-all duration-300"></div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}

export default FeatureCard;
