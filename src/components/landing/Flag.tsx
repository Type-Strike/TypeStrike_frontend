interface FlagProps {
  side: "left" | "right";
}

const ASSET = "/landing";

export default function Flag({ side }: FlagProps) {
  return (
    <div className={`ln-flag ln-flag--${side}`} aria-hidden="true">
      <img
        src={`${ASSET}/${side}-flag.png`}
        alt=""
        className="ln-flag__img"
        draggable={false}
      />
    </div>
  );
}
