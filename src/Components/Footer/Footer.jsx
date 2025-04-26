import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex justify-around items-center flex-col mt-10 pt-10">
      <div className="flex justify-around items-center w-full">
        <div className="flex flex-col gap-3 mx-10 my-10">
          <div className="flex items-center gap-1">
            <img
              src="/chai-assets/chai-white.png"
              alt="chai-logo"
              className="w-10"
            />
            <p className="text-lg font-bold">ChaiCode</p>
          </div>
          <p>Home for programmers</p>
          <div className="flex items-center gap-3">
            <CiYoutube className="text-xl" />
            <IoLogoInstagram className="text-xl" />
            <FaGithub className="text-xl" />
            <FaXTwitter className="text-xl" />
            <CiLinkedin className="text-xl" />
            <MdOutlineMessage className="text-xl" />
          </div>
          <p>&copy; 2025 ChaiCode. All rights reserved</p>
        </div>
        <div className="flex gap-20">
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-lg">Products</li>
            <li>Courses</li>
            <li>Cohort</li>
            <li>Coding Hero</li>
            <li>Free API</li>
            <li>Masterji</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-lg">Resources</li>
            <li>Docs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Pricing Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <h2 className="border text-[200px] tracking-wider w-full text-center mt-20 mx-auto leading-none font-extrabold py-10 mb-5 bg-gradient-to-r from-[rgba(249,115,22,0.8)] to-[rgba(249,115,22,0.2)] text-transparent bg-clip-text">
        CHAICODE
      </h2>
    </footer>
  );
}

export default Footer;
