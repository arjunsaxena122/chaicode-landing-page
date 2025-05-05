import { Code, FileCode, Github, ExternalLink } from "lucide-react";

function OpenSource() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative mb-16 text-center">
        <div className="absolute inset-0 flex justify-center items-center opacity-5">
          <Code size={280} />
        </div>
        
        <span className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full mb-4">
          Open Source Project
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-orange-500 dark:text-orange-400 mb-6 relative z-10">
        FreeAPI - Open Source
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md shadow-amber-700 transform transition-all duration-300 dark:hover:shadow-xl">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <FileCode className="w-6 h-6 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Developer Resources</h3>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Unlock Your Potential with Our API Hub
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our API Hub is designed to streamline your learning experience in
                API handling across various programming languages.
              </p>
              
              <p>
                With this resource, you can effortlessly build and showcase your front-end
                portfolio in both web and mobile applications.
              </p>
              
              <p>
                Join us to enhance your skills and take your coding projects to the next level.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://freeapi.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-orange-500/20 border border-amber-600"
              >
                <ExternalLink size={18} />
                View Documentation
              </a>
              
              <a 
                href="https://github.com/hiteshchoudhary/freeapi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 border border-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Github size={18} />
                GitHub Repo
              </a>
            </div>
          </div>
          
          <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-md shadow-amber-700 bg-gray-50 dark:bg-gray-800">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 dark:from-orange-500/5 dark:to-purple-500/5 backdrop-blur-sm rounded-t-2xl"></div>
            
            <iframe
              className="w-full h-full z-10 relative"
              src="https://www.youtube.com/embed/xJq0EQMFGyg?si=sXVXT1umIv4TFIVq"
              title="Learn about FreeAPI Hub"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-6 md:p-8 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Why Use FreeAPI?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className=" w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Practice API integration without costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Build impressive portfolio projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Comprehensive documentation and examples</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm shadow-gray-400 text-center">
          <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">50+</div>
          <div className="text-gray-600 dark:text-gray-300 ">Free APIs</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm shadow-gray-400  text-center">
          <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">10k+</div>
          <div className="text-gray-600 dark:text-gray-300">Developers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm shadow-gray-400 text-center">
          <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">100%</div>
          <div className="text-gray-600 dark:text-gray-300">Free Access</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm shadow-gray-400 text-center">
          <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">24/7</div>
          <div className="text-gray-600 dark:text-gray-300">Support</div>
        </div>
      </div>
    </section>
  );
}

export default OpenSource;