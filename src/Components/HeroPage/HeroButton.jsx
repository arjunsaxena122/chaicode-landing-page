function HeroButton({ text, link }) {
  return (
    <button className="flex justify-center items-center border px-4 py-2 rounded bg-linear-to-r from-orange-600 to-[#F97316] border-none mb-10 cursor-pointer">
      {text}
      <img src={link} alt="" className="w-10 " />
    </button>
  );
}

export default HeroButton;
