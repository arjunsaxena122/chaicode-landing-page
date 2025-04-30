
function FeatureCardContainer() {
  return (
    <div className="flex flex-col items-center gap-10">
          <FeatureCard
            title={"Comprehensive Curriculum"}
            description={
              "Master key concepts and hands-on skills with clarity and confidence.Learn what truly matters, the right way, through, practical, and easy to understand"
            }
          />
          <FeatureCard
            title={"You finish it"}
            description={
              "OUr cohorts are a collaborative journey, students lear together, stay motivated, and complete the course on time as a community"
            }
          />
          <FeatureCard
            title={"Industry Guests"}
            description={
              "We're connected with industr experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students"
            }
          />
        </div>
  )
}

export default FeatureCardContainer
