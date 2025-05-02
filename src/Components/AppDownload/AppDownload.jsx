import { IoMdCode } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import AppDownloadCard from "./AppDownloadCard";
import { GoStack } from "react-icons/go";

function AppDownload() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-12 lg:gap-6">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col border-2 border-gray-300 dark:border-slate-400 rounded-2xl shadow-xl">
              <div className="w-[320px] flex justify-between items-center bg-[#dd6108] rounded-t-2xl px-4 py-[10px]">
                <h3 className="flex items-center gap-2 text-white">
                  <IoMdCode aria-label="ChaiCode Logo" />
                  ChaiCode
                </h3>
                <IoIosNotificationsOutline
                  className="text-xl text-white"
                  aria-label="Notifications"
                />
              </div>

              <div className="w-[320px] bg-white dark:bg-[#1f1e1e] shadow-2xl overflow-y-auto px-4 py-8 flex flex-col gap-4">
                <AppDownloadCard
                  title={"Trending"}
                  description={"React Native Masterclass"}
                  rating={"4.8"}
                  hour={"2.5h"}
                  tagText={"Live"}
                />
                <AppDownloadCard
                  title={"Popular"}
                  description={"Full Stack JavaScript"}
                  rating={"4.9"}
                  hour={"8h"}
                  tagText={"Enrolled"}
                />
                <AppDownloadCard
                  title={"New"}
                  description={"AI with JavaScript"}
                  rating={"5.0"}
                  hour={"4h"}
                  tagText={"Enroll"}
                />
              </div>

              <div className="flex justify-around items-center gap-10 py-2 px-2 rounded-b-2xl bg-white dark:bg-gray-800 w-[320px] border-t border-gray-200 dark:border-gray-700">
                <span className="flex flex-col items-center gap-1 text-[#F07316]">
                  <GoStack aria-label="Courses Icon" />
                  <p className="text-sm">Courses</p>
                </span>
                <span className="flex flex-col items-center gap-1">
                  <AiOutlineThunderbolt
                    className="text-gray-700 dark:text-white"
                    aria-label="Live Icon"
                  />
                  <p className="text-sm text-gray-700 dark:text-white">Live</p>
                </span>
                <span className="flex flex-col items-center gap-1">
                  <CiMobile3 className="text-gray-700 dark:text-white" aria-label="Profile Icon" />
                  <p className="text-sm text-gray-700 dark:text-white">Profile</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 lg:px-10 py-2 flex flex-col">
          <h3 className="text-4xl lg:text-5xl text-[#F97316] my-5 font-bold">
            Learn on the go
          </h3>
          <p className="text-md text-gray-700 dark:text-gray-200">
            Take your coding journey anywhere with the ChaiCode mobile app. Access
            courses, join live sessions, and connect with the community — all from
            your pocket.
          </p>

          <div className="my-10 flex flex-col gap-6">
            <p className="flex items-center gap-4 text-md text-gray-700 dark:text-gray-200">
              <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <AiOutlineThunderbolt
                  className="text-[#ef2a2a] text-lg"
                  aria-label="Offline Access Icon"
                />
              </span>
              Offline course access
            </p>
            <p className="flex items-center gap-4 text-md text-gray-700 dark:text-gray-200">
              <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <IoIosNotificationsOutline
                  className="text-[#ef2a2a] text-lg"
                  aria-label="Notification Icon"
                />
              </span>
              Live session notification
            </p>
            <p className="flex items-center gap-4 text-md text-gray-700 dark:text-gray-200">
              <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <CiMobile3
                  className="text-[#ef2a2a] text-lg"
                  aria-label="Revision Icon"
                />
              </span>
              Revision while commuting
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center flex-wrap gap-6 my-10 md:my-6 justify-center sm:justify-start">
            <a
              href="https://apps.apple.com/in/app/chaicode/id6504993143"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto flex justify-center items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-[#F97316] border-none rounded-xl text-white shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-95">
                <MdOutlineFileDownload
                  className="text-xl mr-3"
                  aria-label="Download App Store"
                />
                <p className="text-white">
                  Download on the <br />
                  <span className="font-bold">App Store</span>
                </p>
              </button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto flex justify-center items-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-[#F97316] border-none cursor-pointer gap-2 text-white shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-95">
                <MdOutlineFileDownload
                  className="text-xl"
                  aria-label="Download Google Play"
                />
                <p className="px-2 text-white">
                  Get it on
                  <br />
                  <span className="font-bold">Google Play</span>
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;