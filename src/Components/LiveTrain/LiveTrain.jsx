import LiveCard from "./LiveCard";

function LiveTrain() {
  return (
    <section className="flex justify-center items-center flex-col mx-10 ">
      <h3 className="text-5xl my-2">Cohorts</h3>
      <h4 className="text-3xl">Live training classes</h4>
      <div className="grid grid-cols-3 gap-10 my-10">
        <LiveCard
          video={"https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"}
          title={"Web Dev Cohort - Live 1.0"}
          desc={"Learn to build software for web with best and latest tech stack"} 
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
        />
        <LiveCard
          video={"https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"}
          title={"Web Dev Cohort - Live 1.0"}
          desc={"Learn to build software for web with best and latest tech stack"} 
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
        />
        <LiveCard
          video={"https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"}
          title={"Web Dev Cohort - Live 1.0"}
          desc={"Learn to build software for web with best and latest tech stack"} 
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
        />
         <LiveCard
          video={"https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"}
          title={"Web Dev Cohort - Live 1.0"}
          desc={"Learn to build software for web with best and latest tech stack"} 
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
        />
        <LiveCard
          video={"https://www.youtube.com/embed/yG8JMlldoCE?si=EuuQ8_cebotALF68"}
          title={"Web Dev Cohort - Live 1.0"}
          desc={"Learn to build software for web with best and latest tech stack"} 
          discountPrice={"6,999 INR"}
          actualPrice={"8,999 INR"}
        />
      </div>
    </section>
  );
}

export default LiveTrain;
