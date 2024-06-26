import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, borderRadius: 50 },
  animate: { opacity: 1 },
  exit: { opacity: 0, borderRadius: 50 },
};

const Transition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
