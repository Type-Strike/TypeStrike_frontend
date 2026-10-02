type FactionFlagProps = {
  side: "red" | "blue";
};

export default function FactionFlag({ side }: FactionFlagProps) {
  const red = side === "red";

  return (
    <div
      className={`
        pointer-events-none absolute z-10
        hidden select-none sm:block
        ${red
          ? "left-[3%] top-[18%]"
          : "right-[3%] top-[18%]"}
        w-[100px]
        md:w-[115px]
        lg:w-[130px]
        xl:w-[145px]
      `}
    >
      <svg
        viewBox="0 0 180 300"
        className="h-auto w-full"
        aria-hidden="true"
      >
        {/* Wooden pole */}
        <rect
          x="18"
          y="8"
          width="18"
          height="292"
          rx="3"
          fill="#3d2415"
        />

        <rect
          x="21"
          y="12"
          width="6"
          height="284"
          fill="#75452a"
        />

        {/* Pole top */}
        <rect
          x="10"
          y="5"
          width="34"
          height="18"
          rx="3"
          fill="#5b351d"
        />

        <rect
          x="14"
          y="2"
          width="26"
          height="8"
          fill="#8a5a32"
        />

        {/* Flag */}
        <path
          d="M36 25 L164 43 L151 173 L36 158 Z"
          fill={red ? "#a9151c" : "#1456b8"}
          stroke="#241719"
          strokeWidth="7"
        />

        {/* Flag highlight */}
        <path
          d="M43 34 L155 49 L151 67 L43 53 Z"
          fill={red ? "#d82a31" : "#2879e8"}
          opacity="0.75"
        />

        {/* Pixel emblem */}
        <g
          fill={red ? "#32151a" : "#081d43"}
          transform="translate(67 76)"
        >
          <rect x="0" y="0" width="42" height="50" />

          <rect x="-12" y="10" width="12" height="12" />
          <rect x="42" y="10" width="12" height="12" />

          <rect x="8" y="12" width="9" height="9" />
          <rect x="25" y="12" width="9" height="9" />

          <rect x="8" y="32" width="26" height="9" />

          <rect x="17" y="41" width="9" height="9" />
        </g>

        {/* Flag folds */}
        <path
          d="M43 54 L55 57 L55 153 L43 151 Z"
          fill="#000"
          opacity="0.15"
        />

        <path
          d="M130 41 L143 43 L139 168 L128 166 Z"
          fill="#fff"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}