import { Code, FileCode, Github, ExternalLink } from "lucide-react";

function OpenSource() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mb-20 text-center">
        <div className="absolute inset-x-0 -top-10 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl opacity-70"></div>
        </div>

        <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full mb-5 shadow-lg shadow-orange-500/10">
          <Code size={16} className="text-orange-500" />
          Open Source Project
        </span>

        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-300 mb-6 relative z-10 tracking-tight">
          FreeAPI - Open Source
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/10 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-500/20 relative group">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full -z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-tl-full -z-0"></div>

          <div className="p-8 md:p-10 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/40 transition-all duration-300">
                <FileCode className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Developer Resources
              </h3>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
              Unlock Your Potential with Our API Hub
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg">
              <p className="flex items-start">
                <span className="inline-flex justify-center items-center min-w-6 h-6 mr-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs">
                  1
                </span>
                Our API Hub is designed to streamline your learning experience
                in API handling across various programming languages.
              </p>

              <p className="flex items-start">
                <span className="inline-flex justify-center items-center min-w-6 h-6 mr-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs">
                  2
                </span>
                With this resource, you can effortlessly build and showcase your
                front-end portfolio in both web and mobile applications.
              </p>

              <p className="flex items-start">
                <span className="inline-flex justify-center items-center min-w-6 h-6 mr-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs">
                  3
                </span>
                Join us to enhance your skills and take your coding projects to
                the next level.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
              <a
                href="https://freeapi.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 border border-orange-400/30 hover:shadow-xl hover:shadow-orange-500/40 group"
              >
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                <span className="group-hover:translate-x-1 transition-transform">
                  View Documentation
                </span>
              </a>

              <a
                href="https://github.com/hiteshchoudhary/freeapi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl group"
              >
                <Github
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400"></div>
        </div>

        <div className="relative group">
          <div className="absolute -top-6 -right-6 w-12 h-12 grid grid-cols-2 gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500/70"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/10 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-500/20">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/20 dark:from-orange-500/20 dark:to-red-500/10 backdrop-blur-sm rounded-t-3xl z-0"></div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full z-0"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-t-xl"
                  src="https://www.youtube.com/embed/xJq0EQMFGyg?si=sXVXT1umIv4TFIVq"
                  title="Learn about FreeAPI Hub"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h4 className="font-bold text-gray-800 dark:text-white mb-6 text-2xl flex items-center gap-2">
                <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20"></span>
                Why Use FreeAPI?
              </h4>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl font-medium text-gray-800 dark:text-white">
                      Free Integration
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Practice API integration without costs
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl font-medium text-gray-800 dark:text-white">
                      Portfolio Builder
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Build impressive portfolio projects
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl font-medium text-gray-800 dark:text-white">
                      Documentation
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Comprehensive documentation and examples
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl shadow-orange-900/5 text-center relative group overflow-hidden hover:shadow-orange-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 mb-4">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500">
                50+
              </div>
            </div>
            <div className="text-lg font-medium text-gray-800 dark:text-white">
              Free APIs
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl shadow-orange-900/5 text-center relative group overflow-hidden hover:shadow-orange-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 mb-4">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500">
                10k+
              </div>
            </div>
            <div className="text-lg font-medium text-gray-800 dark:text-white">
              Developers
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl shadow-orange-900/5 text-center relative group overflow-hidden hover:shadow-orange-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 mb-4">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500">
                100%
              </div>
            </div>
            <div className="text-lg font-medium text-gray-800 dark:text-white">
              Free Access
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl shadow-orange-900/5 text-center relative group overflow-hidden hover:shadow-orange-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 mb-4">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-500">
                24/7
              </div>
            </div>
            <div className="text-lg font-medium text-gray-800 dark:text-white">
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenSource;
