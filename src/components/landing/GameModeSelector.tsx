import GameModeCard from "./GameModeCard";

export default function GameModeSelector() {
  return (
    <section className="ln-modes" id="game-modes" aria-label="Game modes">
      <GameModeCard icon="⚔️" title="1V1" subtitle="BATTLE" accent="red" path="/login" delay={0} />
      <GameModeCard icon="☠️" title="SOLO" subtitle="MODE" accent="green" path="/login" delay={0.1} />
      <GameModeCard icon="🏆" title="RANKED" subtitle="MODE" accent="gold" path="/login" delay={0.2} />
    </section>
  );
}
