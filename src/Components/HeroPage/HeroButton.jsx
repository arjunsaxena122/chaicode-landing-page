import { IoCodeSlashSharp } from "react-icons/io5";

function HeroButton({ text }) {
  return (
    <a
      href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 md:mt-6"
    >
      <button className="flex justify-center items-center px-5 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold text-white bg-[#F97316] hover:bg-orange-600 shadow-md hover:shadow-lg gap-2 transition-all duration-300 ease-in-out">
        <IoCodeSlashSharp className="text-lg md:text-xl" />
        {text}
      </button>
    </a>
  );
}

export default HeroButton;