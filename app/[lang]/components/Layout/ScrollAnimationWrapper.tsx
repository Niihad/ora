import { ReactNode } from "react";
import {motion} from "framer-motion";

interface Props {
  children?: ReactNode;
  className?: any;
}

export default function ScrollAnimationWrapper({children, className, ...props}: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
