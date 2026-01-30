import { motion } from "framer-motion";
const avatarVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};
function UserAvatar() {
  return (
    <div className="font-bold md:text-3xl ">
      <motion.span
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
        className="inline-block overflow-hidden whitespace-nowrap"
      >
        Samz.Dev
      </motion.span>
    </div>
  );
}
export default UserAvatar;
