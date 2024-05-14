import { m } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const HomeScroller = () => {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href="#about">
        <div className="flex justify-center items-start p-2 mb-10">
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-primary-700"
          >
            <IoIosArrowDown size={48} />
          </m.div>
        </div>
      </a>
    </div>
  );
};

export default HomeScroller;
