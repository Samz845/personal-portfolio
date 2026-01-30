import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
function Hero() {
  const sentences = [
    "I craft modern, responsive UIs that prioritize usability and thoughtful interaction.",
    "I create engaging Ui systems that balance artistic expression with technical excellence.",
    "I transform ideas into polished,dynamic interfaces through purposeful design.",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((i) => (i + 1) % sentences.length);
        setAnimate(true);
      }, 350);

      return () => clearInterval(timer);
    }, 6000);
  }, [sentences.length]);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center mt-13 pt-10 flex-col space-y-1 justify-center bg-slate-50 md:flex-row md:flex-wrap dark:bg-neutral-900 "
    >
      <motion.img
        variants={childVariants}
        src="whs3.jpg"
        alt="samuel's image"
        className="w-45 h-45 mt-4 rounded-full object-cover md:mt-8"
      />
      <motion.div
        variants={childVariants}
        className="mt-8 mb-6 md:w-[70%] lg:ml-10 "
      >
        <p className="font-bold text-center mb-2 text-teal-700 md:text-xl dark:text-neutral-300">
          Hello,I'm
        </p>
        <p className="font-semibold text-4xl text-emerald-700 text-center dark:text-neutral-300">
          Samuel Fatomilola
        </p>
        <p className="text-center md:text-2xl font-medium mt-2 text-teal-700 dark:text-neutral-300">
          Frontend Developer
        </p>

        <div className="w-full px-5">
          <p
            className={` text-teal-700 font-medium text-center transition-all duration-500 md:text-xl lg:text-3xl dark:text-neutral-300 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
            }`}
          >
            {sentences.at(index)}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="flex space-x-1 md:space-x-3 text-slate-700 -mt-2 md:w-[50%] md:text-3xl md:-ml-12"
      >
        <a
          target="_blank"
          href="https://www.github.com/samz845"
          className="hover:text-emerald-600 transition dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/devsamz"
          className="hover:text-emerald-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://www.x.com/samzylexzy"
          className="hover:text-emerald-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaTwitter />
        </a>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="flex space-x-2 text-white font-medium text-xl mt-4 mb-8 md:ml-16"
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1JSl87g8UQs-lvmE42E2KqIqNdqZ6_laa"
          target="_blank"
          download
          rel="noopener"
          className="bg-slate-900 dark:bg-blue-500 dark:hover:bg-blue-400 px-5 py-4 rounded-lg hover:bg-slate-800 transition"
        >
          Resume
        </a>
        <a
          href="#projects"
          className="bg-slate-900 px-5 py-4 rounded-lg hover:bg-slate-800 transition dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Portfolio
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
