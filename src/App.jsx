import AppDownload from "./Components/AppDownload/AppDownload";
import BenefitsCohort from "./Components/BenefitsCohort/BenefitsCohort";
import Community from "./Components/Community/Community";
import Feature from "./Components/Feature/Feature";
import HeroPage from "./Components/HeroPage/HeroPage";
import LiveTrain from "./Components/LiveTrain/LiveTrain";
import Navbar from "./Components/Navbar/Navbar";
import OpenSource from "./Components/OpenSource/OpenSource";
import TagSection from "./Components/TagSection/TagSection";
import Testimonial from "./Components/Testimonial/Testimonial";
// import ProofCard from "./Components/ProofCard/ProofCard"
import Tweet from "./Components/Tweet/Tweet";
// import Udemy from "./Components/Udemy/Udemy";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Tweet />
      {/* <ProofCard /> */}
      <LiveTrain />
      <Testimonial />
      {/* <Udemy /> */}
      <BenefitsCohort />
      <Feature />
      <TagSection />
      <Community />
      <OpenSource />
      <AppDownload />
    </>
  );
}

export default App;
