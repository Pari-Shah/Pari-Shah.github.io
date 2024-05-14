import { m, LazyMotion, domAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";

const HomeText = () => {

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-5xl sm:text-8xl cursor-default"
          style={{ fontFamily: "Courier" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-primary-700"
          >
           <Typewriter
              options={{
                autoStart: true,
                strings: ["Hi! I'm Pari Shah"],
                loop: true,
                pauseFor: 100000,
                cursor: "|",
              }}
            />
          </m.span>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HomeText;
