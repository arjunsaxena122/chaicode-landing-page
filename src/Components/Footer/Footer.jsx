import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";

function Footer({ themeToggle }) {
  const productLinks = [
    "Courses",
    "Cohort",
    "Coding Hero",
    "Free API",
    "Masterji",
  ];
  const resourceLinks = [
    "Docs",
    "Privacy Policy",
    "Terms of Service",
    "Pricing Policy",
    "Refund Policy",
  ];

  return (
    <footer className="flex justify-center items-center flex-col mt-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-0 md:px-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3 my-10">
          <div className="flex items-center gap-1 max-w-[140px] px-2">
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
          <p className="text-center md:text-left">Home for programmers</p>

          <div className="flex items-center justify-center gap-3 mt-2">
            <a href="#" aria-label="YouTube">
              <CiYoutube className="text-xl" />
            </a>
            <a href="#" aria-label="Instagram">
              <IoLogoInstagram className="text-xl" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <CiLinkedin className="text-xl" />
            </a>
            <a href="#" aria-label="Message">
              <MdOutlineMessage className="text-xl" />
            </a>
          </div>

          <p className="text-sm mt-2 text-center md:text-left">
            &copy; 2025 ChaiCode. All rights reserved
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-evenly gap-10 px-5 py-10 md:py-0">
          <ul className="flex flex-col gap-3">
            <li className="font-bold text-lg">Products</li>
            {productLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="font-bold text-lg">Resources</li>
            {resourceLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2
        className="text-5xl md:text-9xl lg:text-[150px] xl:text-[200px] tracking-wider w-full text-center mt-20 mx-auto leading-none font-extrabold py-10 mb-5
        text-transparent bg-clip-text
        bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600
        dark:bg-gradient-to-r dark:from-[rgba(249,115,22,0.8)] dark:to-[rgba(249,115,22,0.2)]
      "
      >
        CHAICODE
      </h2>
    </footer>
  );
}

export default Footer;
