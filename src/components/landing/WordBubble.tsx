import { motion } from "framer-motion";

interface WordBubbleProps {
  text: string;
  side: "left" | "right";
  delay?: number;
  rotation?: number;
}

export default function WordBubble({
  text,
  side,
  delay = 0,
  rotation = 0,
}: WordBubbleProps) {
  return (
    <motion.div
      className={`ln-word ln-word--${side}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 + delay }}
      aria-hidden="true"
    >
      <motion.span
        className="ln-word__text"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2.4 + delay * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
