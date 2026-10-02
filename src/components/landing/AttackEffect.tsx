import { motion, AnimatePresence } from "framer-motion";

interface AttackEffectProps {
  side: "left" | "right";
  active: boolean;
}

export default function AttackEffect({ side, active }: AttackEffectProps) {
  const isLeft = side === "left";
  const color = isLeft ? "red" : "blue";

  return (
    <AnimatePresence>
      {active && (
        <div className={`ln-attack ln-attack--${color}`} aria-hidden="true">
          {/* projectile trail */}
          <motion.div
            className={`ln-attack__trail ln-attack__trail--${color}`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: isLeft ? "left center" : "right center" }}
          />

          {/* muzzle flash */}
          <motion.div
            className={`ln-attack__flash ln-attack__flash--${color}`}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 2, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 0.3 }}
          />

          {/* particles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className={`ln-attack__spark ln-attack__spark--${color}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: isLeft ? [0, 40 + i * 18] : [0, -(40 + i * 18)],
                y: [0, (i % 2 === 0 ? -1 : 1) * (8 + i * 5)],
              }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
