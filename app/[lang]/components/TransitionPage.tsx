import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const TransitionPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageVariants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ type: 'linear', duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default TransitionPage;
