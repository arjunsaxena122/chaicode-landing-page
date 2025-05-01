import { useEffect, useRef, useState } from "react";
import AppDownload from "./Components/AppDownload/AppDownload";
import BenefitsCohort from "./Components/BenefitsCohort/BenefitsCohort";
import Community from "./Components/Community/Community";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import HeroPage from "./Components/HeroPage/HeroPage";
import LiveTrain from "./Components/LiveTrain/LiveTrain";
import Navbar from "./Components/Navbar/Navbar";
import OpenSource from "./Components/OpenSource/OpenSource";
import TagSection from "./Components/TagSection/TagSection";
import Testimonial from "./Components/Testimonial/Testimonial";
// import ProofCard from "./Components/ProofCard/ProofCard"
import Tweeter from "./Components/Tweet/Tweeter";
// import Udemy from "./Components/Udemy/Udemy";

function App() {
  const [themeToggle, setThemeToggle] = useState(false);
  // const cohortBookmark = useRef(null)

  const handleThemeToggle = () => {
    setThemeToggle((prev) => !prev);
    // OS preference choose
    // const theme  =  window.matchMedia("(prefers-color-scheme: dark)").matches
    // document.documentElement.getAttribute("data-theme");
    const localTheme = document.documentElement.getAttribute("data-theme");
    if (localTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    localStorage.removeItem("theme");
  }, []);

  return (
    <main className="max-w-7xl h-screen m-auto">
      <Navbar themeToggle={themeToggle} handleThemeToggle={handleThemeToggle} />
      <HeroPage />
      <Tweeter />
      {/* <ProofCard /> */}
      <LiveTrain />
      <Testimonial />
      {/* <Udemy /> */}
      <BenefitsCohort />
      {/* <Feature /> */}
      <TagSection />
      <Community />
      <OpenSource />
      <AppDownload />
      <Footer themeToggle={themeToggle} />
    </main>
  );
}

export default App;
