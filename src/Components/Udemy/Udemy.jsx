import UdemyCard from "./UdemyCard";


function Udemy() {
  return (
    <section className="flex flex-col py-10 px-6 md:px-10" id="udemy">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight">
        Udemy
      </h2>
      <p className="text-sm md:text-lg text-center mt-2 ">
        Not Only in India, we are global leaders in tech education
      </p>
      <UdemyCard />
    </section>
  );
}

export default Udemy;
