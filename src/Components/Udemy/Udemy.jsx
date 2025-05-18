import UdemyCard from "./UdemyCard"

function Udemy() {
  return (
    <section className="relative flex flex-col py-16 px-6 md:px-10  dark:from-gray-900 dark:to-gray-800" id="udemy">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 text-amber-50 dark:text-gray-800 opacity-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center mb-6">
          <span className="bg-amber-500 h-1 w-14 mx-2"></span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-600">
            Udemy
          </h2>
          <span className="bg-amber-500 h-1 w-14 mx-2"></span>
        </div>

        <p className="text-sm md:text-lg text-center mt-2 mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Not Only in India, we are global leaders in tech education
        </p>
        
        <UdemyCard />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 text-amber-50 dark:text-gray-800 opacity-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}

export default Udemy