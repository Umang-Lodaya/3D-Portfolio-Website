import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profileLinks, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({
  index,
  name,
  icon,
  website,
}) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("up", index * 0.5, 0.75)}
        className='w-max shadow-card'
      >
        <div className='border-purple-900 border-4 p-3 rounded-2xl w-max h-max flex cursor-pointer justify-center items-center gap-3 hover:bg-tertiary ease-in-out transition-all duration-[800]'
          onClick={() => window.open(website, "_blank")}
        >
          <div className='relative black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={icon}
              alt=""
              className='w-4/6 h-4/6 object-contain'
            />
          </div>
          <h3 className='text-white font-bold text-[15px]'>{name}</h3>
        </div>
      </motion.div >
    </Tilt>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I&apos;m a skilled data analyst with experience in Python, and expertise in fields like Data Analysis, Artificial Intelligence, Machine Learning. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!

        <div className="mt-5 flex flex-row flex-wrap justify-normal gap-3">
          {profileLinks.map((profile, index) => (
            <ProfileCard key={`project-${index}`} {...profile} />
          ))}
        </div>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");