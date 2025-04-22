import { CiStar } from "react-icons/ci";
import { SiDocsdotrs } from "react-icons/si";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiBookReader } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="flex justify-around items-center py-4">
      <div>
        <img
          src="/chai-assets/chaicode-white.png"
          alt="chaicode-logo"
          className="bg-black w-30"
        />
      </div>
      <ul className="flex items-center gap-x-10">
        <li className="flex items-center gap-x-1">
          <IoCodeSlashSharp />
          Cohorts
          <GoDotFill className="text-red-600" />
        </li>
        <li className="flex items-center gap-x-0.5">
          <BiBookReader />
          Udemy
        </li>
        <li className="flex items-center gap-x-1">
          <SiDocsdotrs />
          Docs
        </li>
        <li className="flex items-center gap-x-0.5">
          <CiStar className="text-lg" />
          Reviews
        </li>
      </ul>

      <a href="https://courses.chaicode.com/learn/accounts/signin" target="_blank">
        <button className="bg-[#F97316] px-3 py-1 rounded font-bold">
          Login
        </button>
      </a>
    </nav>
  );
}

export default Navbar;
