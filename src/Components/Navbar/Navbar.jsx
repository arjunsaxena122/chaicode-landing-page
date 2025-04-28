import { CiStar } from "react-icons/ci";
import { SiDocsdotrs } from "react-icons/si";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiBookReader } from "react-icons/bi";
import { IoIosSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { useEffect, useState } from "react";

function Navbar() {
  const [themeToggle, setThemeToggle] = useState(false);
  const [isHamburger, setIsHamburger] = useState(false);

  const handleThemeToggle = () => {
    setThemeToggle((prev) => !prev);
    // OS preference choose
    // const theme  =  window.matchMedia("(prefers-color-scheme: dark)").matches
    let htmlTheme = document.documentElement.getAttribute("data-theme");
    if (htmlTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.theme = "light";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
    }
  };

  const handlHamburgerToggle = () => {
    setIsHamburger((prev) => !prev);
  };

  useEffect(() => {
    handleThemeToggle();
  }, [setThemeToggle]);

  return (
    <nav className="bg-[#000000]  text-white fixed top-0 w-screen z-10">
      <div className="flex justify-around items-center py-4">
        <div className="max-w-[140px] px-2">
          <img
            src="/chai-assets/chaicode-white.png"
            alt="chaicode-logo"
            className="w-full object-contain"
          />
        </div>
        <ul className="hidden md:flex md:items-center md:gap-x-10">
          <li className="flex items-center gap-x-1 cursor-pointer">
            <IoCodeSlashSharp />
            Cohorts
            <GoDotFill className="text-red-600" />
          </li>
          <li className="flex items-center gap-x-0.5 cursor-pointer">
            <BiBookReader />
            Udemy
          </li>
          <li className="flex items-center gap-x-1 cursor-pointer">
            <SiDocsdotrs />
            Docs
          </li>
          <li className="flex items-center gap-x-0.5 cursor-pointer">
            <CiStar className="text-lg" />
            Reviews
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://courses.chaicode.com/learn/accounts/signin"
            target="_blank"
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
        <div className="md:hidden">
          <div
            className="text-[#F07316] cursor-pointer px-2 text-lg  py-0.5"
            onClick={handlHamburgerToggle}
          >
            {isHamburger ? "X" : "☰"}
          </div>

          <div
            className={`w-full absolute  bg-[#170b0b] h-screen my-4 flex flex-col gap-5 justify-center items-center  ${
              isHamburger ? "right-0" : "right-[100%]"
            } duration-200 transition-all ease-in-out`}
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
              <li className="flex items-center gap-x-1 cursor-pointer">
                <SiDocsdotrs />
                Docs
              </li>
              <li className="flex items-center gap-x-0.5 cursor-pointer">
                <CiStar className="text-lg" />
                Reviews
              </li>
            </ul>
            <div>
              <a
                href="https://courses.chaicode.com/learn/accounts/signin"
                target="_blank"
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
