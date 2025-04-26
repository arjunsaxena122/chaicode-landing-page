import TagCard from "./TagCard";

function TagSection() {
  return (
    <section className="flex flex-col items-center my-10">
      <h3 className="text-5xl my-2">Topics Cloud</h3>
      <p>You can find videos and courses on topics and much more</p>
      <div className="grid grid-cols-5 gap-20 my-20">
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
