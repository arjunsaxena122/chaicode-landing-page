import { IoCodeSlashSharp } from "react-icons/io5";

function HeroButton({ text }) {
  return (
    <a
      href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="flex justify-center items-center border-none px-4 py-2 rounded-md text-sm  md:px-10 md:py-4 md:rounded-xl mb-10 md:mb-0 mt-2 cursor-pointer md:text-xl text-white bg-gradient-to-r from-orange-600 to-[#F97316] gap-2 transition-transform ease-in-out duration-400 active:scale-105">
        <IoCodeSlashSharp />
        {text}
      </button>
    </a>
  );
}

export default HeroButton;
//
