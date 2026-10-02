import BattleCharacter from "./BattleCharacter";
import Flag from "./Flag";
import WordBubble from "./WordBubble";
import FloatingParticles from "./FloatingParticles";

const LEFT_WORDS = [
  { text: "react", delay: 0, rotation: 8 },
  { text: "python", delay: 0.25, rotation: -3 },
  { text: "node", delay: 0.5, rotation: 5 },
  { text: "javascript", delay: 0.75, rotation: -7 },
];

const RIGHT_WORDS = [
  { text: "system", delay: 0.1, rotation: -9 },
  { text: "docker", delay: 0.35, rotation: 3 },
  { text: "frontend", delay: 0.6, rotation: 7 },
  { text: "backend", delay: 0.85, rotation: -4 },
];

export default function BattleScene() {
  return (
    <section className="ln-battle" aria-label="Battle arena">
      {/* flags */}
      <Flag side="left" />
      <Flag side="right" />

      {/* characters */}
      <BattleCharacter side="left" />
      <BattleCharacter side="right" />

      {/* word bubbles - left (red) */}
      <div className="ln-battle__words ln-battle__words--left">
        {LEFT_WORDS.map((w) => (
          <WordBubble key={w.text} text={w.text} side="left" delay={w.delay} rotation={w.rotation} />
        ))}
      </div>

      {/* word bubbles - right (blue) */}
      <div className="ln-battle__words ln-battle__words--right">
        {RIGHT_WORDS.map((w) => (
          <WordBubble key={w.text} text={w.text} side="right" delay={w.delay} rotation={w.rotation} />
        ))}
      </div>

      {/* ambient particles */}
      <FloatingParticles />
    </section>
  );
}
