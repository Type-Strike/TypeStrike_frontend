export default function Navbar() {
  return (
<header className="absolute inset-x-0 top-0 z-50 h-[82px] bg-transparent">
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-6 lg:px-10">

        {/* DESKTOP NAVIGATION */}

        {/* RIGHT SIDE */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">

          <a
            href="/login"
            className="
              flex h-[48px] items-center justify-center
              border-2 border-[#50576c]
              bg-[#171c2d]
              px-7
              font-mono text-[14px] font-bold tracking-wide text-white
              shadow-[3px_3px_0_#080a12]
              transition-all duration-200
              hover:-translate-y-[2px]
              hover:border-[#72798c]
              hover:bg-[#202638]
            "
          >
            LOG IN
          </a>

          <a
            href="/login?mode=signup"
            className="
              flex h-[48px] items-center justify-center
              border-2 border-[#d69d08]
              bg-[#ffc52b]
              px-7
              font-mono text-[14px] font-black tracking-wide text-[#17120a]
              shadow-[3px_3px_0_#805600]
              transition-all duration-200
              hover:-translate-y-[2px]
              hover:brightness-110
              active:translate-y-[1px]
            "
          >
            SIGN UP
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            ml-auto flex h-11 w-11 items-center justify-center
            border-2 border-[#50576c]
            bg-[#171c2d]
            text-xl text-white
            transition
            hover:border-[#ffc52b]
            lg:hidden
          "
        >
          ☰
        </button>

      </div>
    </header>
  );
}