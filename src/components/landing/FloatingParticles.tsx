import { useMemo } from "react";

interface Dot {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  dur: number;
}

export default function FloatingParticles() {
  const dots = useMemo<Dot[]>(() => {
    const out: Dot[] = [];
    for (let i = 0; i < 18; i++) {
      out.push({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        top: `${15 + Math.random() * 65}%`,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
        dur: 2.5 + Math.random() * 2.5,
      });
    }
    return out;
  }, []);

  return (
    <div className="ln-particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="ln-particles__dot"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
