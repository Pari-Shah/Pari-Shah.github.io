import { m, LazyMotion, domAnimation } from "framer-motion";
import HomeText from "../Components/HomeText";
import HomeScroller from "../Components/elements/HomeScroller";

const Home = () => {
  return (
    <div id="home" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="home"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HomeText />
      </m.div>
      <HomeScroller />
    </LazyMotion>
    </div>
  );
};

export default Home;
