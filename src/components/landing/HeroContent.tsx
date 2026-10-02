import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="ln-hero-content"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
    >
      <p className="ln-hero-content__line">REAL-TIME TYPING BATTLES</p>
      <p className="ln-hero-content__line">CHALLENGE PLAYERS WORLDWIDE</p>
    </motion.div>
  );
}
