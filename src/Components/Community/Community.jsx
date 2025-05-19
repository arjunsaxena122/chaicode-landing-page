import { Users } from "lucide-react";

function Community() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        {/* Top colorful accent bar */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>

        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-8 border-orange-500"></div>
              <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border-8 border-yellow-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                <Users
                  size={16}
                  className="text-orange-600 dark:text-orange-400"
                />
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                  Community
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
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
                className="group inline-block"
              >
                <div className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl p-1 transition-transform group-hover:translate-y-[-2px]">
                  <div className="bg-white/10 rounded-l-xl p-3">
                    <Users size={28} className="text-white" />
                  </div>
                  <div className="pr-6">
                    <div className="font-bold text-lg">80,000+</div>
                    <div className="text-sm opacity-90">Active coders</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 bg-orange-50 dark:bg-gray-800 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
              <div className="absolute -right-16 top-10 w-32 h-32 rounded-full bg-orange-500"></div>
              <div className="absolute -left-16 bottom-10 w-32 h-32 rounded-full bg-yellow-500"></div>
            </div>

            {/* Discord Image */}
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                  {/* Status bar */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        Online
                      </span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img
                      src="/images/discord.jpg"
                      alt="Discord community"
                      className="w-full h-full object-cover aspect-video"
                    />

                    {/* Overlay badges */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        Live Now
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Recording</span>
                      </div>
                      <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        80K+ Members
                      </div>
                    </div>
                  </div>

                  {/* Info bar */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          H
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Hitesh sir Server
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
