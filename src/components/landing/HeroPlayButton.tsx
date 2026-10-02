import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroPlayButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      className="ln-play-btn"
      onClick={() => navigate("/login")}
      aria-label="Play TypeStrike Now"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -5,
        scale: 1.04,
        transition: { duration: 0.18 },
      }}
      whileTap={{
        y: 2,
        scale: 0.97,
        transition: { duration: 0.1 },
      }}
    >
      <span className="ln-play-btn__icon" aria-hidden="true">▶</span>
      <span className="ln-play-btn__label">PLAY NOW</span>
    </motion.button>
  );
}
