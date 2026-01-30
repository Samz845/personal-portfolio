import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 },
  },
};

function About() {
  return (
    <div className="bg-slate-50 p-6 dark:bg-neutral-900" id="about">
      <div className="text-center">
        <h2 className=" text-xl font-bold text-gray-900 mt-2 inline-block border-b-4 pb-1 dark:text-neutral-300">
          About Me
        </h2>
      </div>
      <div className="flex items-center justify-center w-full gap-14 mb-4">
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-4 text-gray-700 dark:text-neutral-300 dark:bg-neutral-900 font-semibold w-full lg:w-[60%] border-r-4 pr-2 pl-2 rounded-r-lg bg-slate-50 border-blue-200"
        >
          <p>
            I'm a frontend developer with a strong passion for crafting
            seamless, intuitive, and visually engaging user experiences. I
            combine clean, efficient code with thoughtful design principles to
            build interfaces that feel both modern and meaningful. My approach
            blends creativity with technical precision, allowing me to transform
            ideas into responsive, accessible, and high-quality digital
            products.
          </p>

          <p>
            I enjoy turning complex problems into simple, elegant solutions,
            whether I'm translating designs into pixel-perfect layouts,
            optimizing performance, or building interactive components that
            elevate the user journey. With a solid foundation in React, Tailwind
            CSS, and modern frontend tooling, I'm always exploring new ways to
            improve my workflow and deliver exceptional results.
          </p>

          <p>
            Beyond the code, I'm deeply committed to continuous learning,
            collaboration, and bringing value to every project. I believe great
            products are built through curiosity, clarity, and craftsmanship and
            I strive to reflect that in everything I create.
          </p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className=" h-70 w-[28%] hidden lg:block overflow-hidden mt-2 shadow-xl rounded-lg shadow-black"
        >
          <img
            src="whs3.jpg"
            alt="Profile"
            className="w-full  h-full object-cover "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
