import { motion } from "framer-motion";

const ASSET = "/landing";

export default function HeroLogo() {
  return (
    <motion.div
      className="ln-hero-logo"
      initial={{ opacity: 0, y: -30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        y: -6,
        scale: 1.03,
        rotate: -1,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <img
        src={`${ASSET}/logo.png`}
        alt="TypeStrike – Type. Attack. Survive."
        className="ln-hero-logo__img"
        draggable={false}
      />
    </motion.div>
  );
}
