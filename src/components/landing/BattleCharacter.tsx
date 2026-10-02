import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AttackEffect from "./AttackEffect";

interface BattleCharacterProps {
  side: "left" | "right";
}

const ASSET = "/landing";

export default function BattleCharacter({ side }: BattleCharacterProps) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const isLeft = side === "left";

  const activate = useCallback(() => setActive(true), []);
  const deactivate = useCallback(() => setActive(false), []);

  return (
    <div className={`ln-char ln-char--${side}`}>
      <button
        className="ln-char__btn"
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        onFocus={activate}
        onBlur={deactivate}
        onClick={() => navigate("/login")}
        aria-label={`Challenge as ${isLeft ? "red" : "blue"} player`}
      >
        <motion.img
          src={`${ASSET}/${side}-player.png`}
          alt={`${isLeft ? "Red" : "Blue"} voxel fighter`}
          className="ln-char__img"
          draggable={false}
          animate={
            active
              ? { x: isLeft ? 15 : -15, scale: 1.06 }
              : { x: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
      </button>

      {/* attack effect layer */}
      <AttackEffect side={side} active={active} />
    </div>
  );
}
