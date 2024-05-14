import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { icon } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                <span>Hey there!</span>
                <span>
                  My name is Pari, I'm a <span className="text-primary-400">Software Consultant</span> and a recent <span className="text-primary-400">Computer Science</span> graduate from the <span className="text-primary-400">University of Waterloo</span> (2023). I specialize in <span className="text-primary-400">Full-Stack Web Development</span>, and have a growing interest in using <span className="text-primary-400">AI</span> and <span className="text-primary-400">Machine Learning</span> to solve problems!
                </span>
                <span>
                  Outside of my regular activities, I'm into dancing and playing sports during my free time. I love hiking and exploring new cities.
                </span>
                <span>
                I am very enthusiastic about collaborating with software engineering teams who share my passion for creating exceptional solutions. Let's create some groundbreaking experiences together!
                </span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[60%] flex h-full items-center justify-center">
            <div className="w-[60%] lg:w-[100%] h-[300px] sm:h-[350px] flex justify-center items-center ml-20">
              <ImageSlider images={icon.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
