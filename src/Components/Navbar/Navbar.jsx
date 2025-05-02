import { CiStar } from "react-icons/ci";
import { SiDocsdotrs } from "react-icons/si";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiBookReader } from "react-icons/bi";
import { IoIosSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";

function Navbar({ themeToggle, handleThemeToggle }) {
  const [isHamburger, setIsHamburger] = useState(false);

  const handlHamburgerToggle = () => {
    setIsHamburger((prev) => !prev);
  };

  return (
    <nav className="bg-[#FFFF] dark:bg-[#000]  fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-4 px-4 md:px-10 lg:px-10 ">
        <a href="/">
          <div className="w-32 md:w-36 lg:w-44">
            {themeToggle ? (
              <img
                src="/chai-assets/chaicode-black.png"
                alt="chaicode-logo"
                className="w-full object-contain"
              />
            ) : (
              <img
                src="/chai-assets/chaicode-white.png"
                alt="chaicode-logo"
                className="w-full object-contain"
              />
            )}
          </div>
        </a>
        <ul className="hidden md:flex md:items-center md:gap-x-5  lg:gap-x-10">
          <a href="#cohort">
            <li
              className="flex items-center gap-x-1 cursor-pointer "
              id="liveCohort"
            >
              <IoCodeSlashSharp />
              Cohorts
              <GoDotFill className="text-red-600" />
            </li>
          </a>
          <a href="#udemy">
            <li className="flex items-center gap-x-0.5 cursor-pointer">
              <BiBookReader />
              Udemy
            </li>
          </a>
          <a href="https://docs.chaicode.com/" target="_blank">
            <li className="flex items-center gap-x-1 cursor-pointer">
              <SiDocsdotrs />
              Docs
            </li>
          </a>
          <a href="#review">
            <li className="flex items-center gap-x-0.5 cursor-pointer">
              <CiStar className="text-lg" />
              Reviews
            </li>
          </a>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://courses.chaicode.com/learn/accounts/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#F97316] px-3 py-1 rounded font-bold cursor-pointer">
              Login
            </button>
          </a>
          <div>
            {themeToggle ? (
              <FiMoon
                onClick={handleThemeToggle}
                className="text-lg cursor-pointer"
              />
            ) : (
              <IoIosSunny
                onClick={handleThemeToggle}
                className="text-lg cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* For Mobile Devices */}
        <div className="md:hidden ">
          <div className="flex items-center gap-3">
            <div>
              {themeToggle ? (
                <FiMoon
                  onClick={handleThemeToggle}
                  className="text-lg cursor-pointer"
                />
              ) : (
                <IoIosSunny
                  onClick={handleThemeToggle}
                  className="text-lg cursor-pointer"
                />
              )}
            </div>
            <div
              className="text-[#F07316] cursor-pointer px-2 text-lg  py-0.5 transition-all duration-500 ease-in-out"
              onClick={handlHamburgerToggle}
            >
              {isHamburger ? "X" : "☰"}
            </div>
          </div>

          <div
            className={`w-full min-h-screen absolute  dark:bg-[#170b0b] h-screen my-4 flex flex-col gap-5 justify-center items-center  ${
              isHamburger ? "translate-x-0" : "-translate-x-full"
            } duration-300 transition-transform ease-in-out left-0 dark:text-white  text-black bg-amber-50 z-50 backdrop-blur-xl`}
          >
            <ul className="flex flex-col font-bold gap-5">
              <li className="flex items-center gap-x-1 cursor-pointer">
                <IoCodeSlashSharp />
                Cohorts
                <GoDotFill className="text-red-600" />
              </li>
              <li className="flex items-center gap-x-0.5 cursor-pointer">
                <BiBookReader />
                Udemy
              </li>
              <a href="https://docs.chaicode.com/" target="_blank">
                <li className="flex items-center gap-x-1 cursor-pointer">
                  <SiDocsdotrs />
                  Docs
                </li>
              </a>
              <li className="flex items-center gap-x-0.5 cursor-pointer">
                <CiStar className="text-lg" />
                Reviews
              </li>
            </ul>
            <div className="mb-4">
              <a
                href="https://courses.chaicode.com/learn/accounts/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" px-3 py-1 bg-[#e36f1b] rounded font-bold flex items-center gap-2 cursor-pointer">
                  Login
                  <LuLogIn />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
