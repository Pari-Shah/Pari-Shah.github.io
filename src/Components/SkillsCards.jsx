import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[200px] h-[200px] flex flex-col items-center mt-4 bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
          >
            <div className="w-full h-[70px] flex items-center mt-10 gap-2 p-1 flex-col">
              <img
                className="h-[65px] w-[65px] bg-primary-600 rounded-[50%] p-1 object-contain"
                src={skill.icon}
                alt={skill.title}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {skill.title}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
