import TagCard from "./TagCard";

function TagSection() {
  return (
    <section className="flex flex-col items-center my-10">
      <h3 className="text-4xl text-center md:text-6xl my-3 text-[#F97316] font-bold">
        Topics Cloud
      </h3>
      <p className="text-sm md:text-lg text-center my-1">
        You can find videos and courses on topics and much more
      </p>
      <div className="overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-5 py-10 md:px-30 md:py-20 place-items-center">
        <TagCard title={"Docker"} />
        <TagCard title={"MCP Server"} />
        <TagCard title={"Kubernetes"} />
        <TagCard title={"Python"} />
        <TagCard title={"React Native"} />
        <TagCard title={"Django"} />
        <TagCard title={"Nextjs"} />
        <TagCard title={"Flask"} />
        <TagCard title={"C++"} />
        <TagCard title={"Raw Videos"} />
      </div>
    </section>
  );
}

export default TagSection;
