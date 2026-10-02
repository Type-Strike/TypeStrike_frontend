import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface GameModeCardProps {
  icon: string;
  title: string;
  subtitle: string;
  accent: "red" | "green" | "gold";
  path: string;
  delay?: number;
}

export default function GameModeCard({
  icon,
  title,
  subtitle,
  accent,
  path,
  delay = 0,
}: GameModeCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      className={`ln-mode ln-mode--${accent}`}
      onClick={() => navigate(path)}
      aria-label={`${title} ${subtitle}`}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.8 + delay }}
      whileHover={{
        y: -7,
        scale: 1.04,
        transition: { duration: 0.18 },
      }}
      whileTap={{
        y: 2,
        scale: 0.96,
        transition: { duration: 0.08 },
      }}
    >
      <span className="ln-mode__icon" aria-hidden="true">{icon}</span>
      <div className="ln-mode__text">
        <strong className="ln-mode__title">{title}</strong>
        <small className="ln-mode__sub">{subtitle}</small>
      </div>
    </motion.button>
  );
}
