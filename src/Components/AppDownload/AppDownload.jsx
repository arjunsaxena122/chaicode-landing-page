import { IoMdCode } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import AppDownloadCard from "./AppDownloadCard";
import { GoStack } from "react-icons/go";

function AppDownload() {
  return (
    <section className="flex flex-wrap justify-center md:mx-10 my-20">
      <div className="md:w-1/2 w-full rounded-2xl flex justify-center items-center px-20 ">
        <div className="px-auto flex flex-col border-2 border-slate-400 rounded-2xl">
          <div className="w-[320px] flex justify-between items-center bg-[#dd6108] rounded-t-2xl px-4 py-[10px]">
            <h3 className="flex items-center gap-2">
              <IoMdCode aria-label="ChaiCode Logo" />
              ChaiCode
            </h3>
            <IoIosNotificationsOutline
              className="text-xl"
              aria-label="Notifications"
            />
          </div>

          <div className="w-[320px] bg-[#1f1e1e] shadow-2xl overflow-y-auto px-4 py-8 flex flex-col gap-4">
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

          <div className="flex justify-around items-center gap-10 py-2 px-2 rounded-b-2xl bg-gray-800 w-[320px]">
            <span className="flex flex-col items-center gap-1 text-[#F07316]">
              <GoStack aria-label="Courses Icon" />
              <p className="text-sm">Courses</p>
            </span>
            <span className="flex flex-col items-center gap-1">
              <AiOutlineThunderbolt
                className="text-white"
                aria-label="Live Icon"
              />
              <p className="text-sm text-white">Live</p>
            </span>
            <span className="flex flex-col items-center gap-1">
              <CiMobile3 className="text-white" aria-label="Profile Icon" />
              <p className="text-sm text-white">Profile</p>
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 px-10 py-2 flex flex-col my-auto">
        <h3 className="text-5xl text-[#F97316] my-5 font-bold">
          Learn on the go
        </h3>
        <p className="text-md">
          Take your coding journey anywhere with the ChaiCode mobile app. Access
          courses, join live sessions, and connect with the community - all from
          your pocket.
        </p>

        {/* Features List */}
        <div className="my-10 flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <span className="border px-1 py-1 rounded-full">
              <AiOutlineThunderbolt
                className="text-[#ef2a2a] text-lg"
                aria-label="Offline Access Icon"
              />
            </span>
            Offline course access
          </p>
          <p className="flex items-center gap-2">
            <span className="border px-1 py-1 rounded-full">
              <IoIosNotificationsOutline
                className="text-[#ef2a2a] text-lg"
                aria-label="Notification Icon"
              />
            </span>{" "}
            Live session notification
          </p>
          <p className="flex items-center gap-2">
            <span className="border px-1 py-1 rounded-full">
              <CiMobile3
                className="text-[#ef2a2a] text-lg"
                aria-label="Revision Icon"
              />
            </span>
            Revision while commuting
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 my-10 md:my-0">
          <a
            href="https://apps.apple.com/in/app/chaicode/id6504993143"
            target="_blank"
          >
            <button className="flex justify-center items-center border px-6 py-2 bg-gradient-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer gap-4 rounded-2xl">
              <MdOutlineFileDownload
                className="text-xl"
                aria-label="Download App Store"
              />
              <p>
                Download on the <br />
                <span className="font-bold">App Store</span>
              </p>
            </button>
          </a>
          <button className="flex justify-center items-center border px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer gap-2">
            <MdOutlineFileDownload
              className="text-xl"
              aria-label="Download Google Play"
            />
            <p className="px-2">
              Get it on
              <br />
              <span className="font-bold">Google Play</span>
            </p>
          </button>
          <a
            href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
            target="_blank"
          ></a>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
