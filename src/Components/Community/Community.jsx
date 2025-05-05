import { Users } from "lucide-react";

function Community() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg dark:shadow-xl overflow-hidden  dark:border-gray-700">
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="flex justify-center items-center max-w-[100px] px-4 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full mb-6">
              Community
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Join our community where creativity thrives
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Connect with 80,000+ passionate developers sharing knowledge,
              projects, and inspiration.
            </p>

            <a
              href="https://hitesh.ai/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="group "
            >
              <button className="flex items-center justify-center gap-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform group-hover:scale-95 w-full md:w-auto cursor-pointer shadow-md">
                <Users size={24} />
                <div className="text-left">
                  <span className="block font-bold">80,000+</span>
                  <span className="block text-sm">Active coders</span>
                </div>
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-grid-pattern"></div>
            
            {/* Discord Image */}
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-2 border-yellow-600 shadow-xl dark:shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <img
                  src="/images/discord.jpg"
                  alt="Discord community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;