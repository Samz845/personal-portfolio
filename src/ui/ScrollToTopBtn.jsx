import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
const scrollVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          variants={scrollVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 20 }}
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="fixed z-50 right-6 bottom-6 bg-black p-3 cursor-pointer rounded-full text-white shadow-lg"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopBtn;
