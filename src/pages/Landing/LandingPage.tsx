import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <main className="relative h-dvh min-h-150 w-full overflow-hidden bg-[#080d20]">

      {/* ================= BACKGROUND ================= */}
      <img
        src="/landing/background.png"
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0
          h-full w-full
          object-cover object-center
          select-none
        "
      />

      {/* Dark cinematic overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-[#05091a]/20
        via-transparent
        to-[#05091a]/35
      " />

      {/* ================= NAVBAR ================= */}
      <Navbar />


      {/* =====================================================
          LEFT BLOCK ISLAND
          ===================================================== */}
      <img
        src="/landing/left-island.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-1%]
          left-[-2%]
          z-10

          w-[42vw]
          min-w-[430px]
          max-w-[680px]

          select-none
          object-contain

          drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]

          sm:left-[-1%]
          md:w-[40vw]
          lg:w-[39vw]
          xl:w-[38vw]
        "
      />


      {/* =====================================================
          RIGHT BLOCK ISLAND
          ===================================================== */}
      <img
        src="/landing/right-island.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-1%]
          right-[-2%]
          z-10

          w-[42vw]
          min-w-[430px]
          max-w-[680px]

          select-none
          object-contain

          drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]

          sm:right-[-1%]
          md:w-[40vw]
          lg:w-[39vw]
          xl:w-[38vw]
        "
      />


      {/* =====================================================
          RED PLAYER
          ===================================================== */}
      <img
        src="/landing/red-player.png"
        alt="Red warrior"
        className="
          pointer-events-none
          absolute
          z-20

          left-[7%]
          bottom-[21%]

          w-[230px]
          max-w-[24vw]

          select-none
          object-contain

          drop-shadow-[0_10px_18px_rgba(120,0,0,0.5)]

          sm:left-[8%]
          sm:bottom-[22%]
          sm:w-[250px]

          md:left-[9%]
          md:bottom-[23%]
          md:w-[275px]

          lg:left-[8%]
          lg:bottom-[22%]
          lg:w-[300px]

          xl:left-[8%]
          xl:bottom-[22%]
          xl:w-[330px]
        "
      />


      {/* =====================================================
          BLUE PLAYER
          ===================================================== */}
      <img
        src="/landing/blue-player.png"
        alt="Blue warrior"
        className="
          pointer-events-none
          absolute
          z-20

          right-[7%]
          bottom-[21%]

          w-[230px]
          max-w-[24vw]

          select-none
          object-contain

          drop-shadow-[0_10px_18px_rgba(0,70,180,0.5)]

          sm:right-[8%]
          sm:bottom-[22%]
          sm:w-[250px]

          md:right-[9%]
          md:bottom-[23%]
          md:w-[275px]

          lg:right-[8%]
          lg:bottom-[22%]
          lg:w-[300px]

          xl:right-[8%]
          xl:bottom-[22%]
          xl:w-[330px]
        "
      />


      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <section
        className="
          absolute
          left-1/2
          top-[16%]
          z-30
          flex
          w-full
          -translate-x-1/2
          flex-col
          items-center
        "
      >

        {/* LOGO */}
        <img
          src="/landing/logo1.png"
          alt="TypeStrike"
          className="
  h-auto
  w-[620px]
  max-w-[82vw]
  -translate-y-5
  select-none
  object-contain
  drop-shadow-[0_14px_14px_rgba(0,0,0,0.55)]
"
        />


        {/* DESCRIPTION */}
        <div className="mt-5 text-center font-mono font-black text-white">

          <p
            className="
              text-[18px]
              leading-tight
              tracking-wide
              [text-shadow:2px_2px_0_#171717]

              sm:text-[20px]
              lg:text-[23px]
            "
          >
            REAL-TIME TYPING BATTLES
          </p>

          <p
            className="
              mt-1
              text-[17px]
              leading-tight
              tracking-wide
              [text-shadow:2px_2px_0_#171717]

              sm:text-[19px]
              lg:text-[22px]
            "
          >
            CHALLENGE PLAYERS WORLDWIDE
          </p>

        </div>


        {/* PLAY NOW */}
        <a
          href="/matchmaking"
          className="
            group
            mt-6

            flex
            h-[078px]
            w-[380px]
            max-w-[78vw]

            items-center
            justify-center
            gap-5

            border-[4px]
            border-[#9b6500]
            bg-[#ffc52b]

            font-mono
            text-[25px]
            font-black
            tracking-wide
            text-[#17120a]

            shadow-[0_6px_0_#704600,inset_0_3px_0_#ffe98a,inset_0_-5px_0_#e9a900]

            transition-all
            duration-150

            hover:-translate-y-1
            hover:brightness-110

            hover:shadow-[0_9px_0_#704600,0_0_25px_rgba(255,197,43,0.45),inset_0_3px_0_#fff09c,inset_0_-5px_0_#e9a900]

            active:translate-y-[4px]

            sm:h-[82px]
            sm:w-[400px]

            lg:h-[88px]
            lg:w-[410px]
            lg:text-[28px]
          "
        >
          <span
            className="
              text-[32px]
              leading-none
              transition-transform
              duration-150
              group-hover:translate-x-1
              sm:text-[36px]
            "
          >
            ▶
          </span>

          <span>PLAY NOW</span>
        </a>
        <div className="mt-4 flex w-[300px] max-w-[70vw] gap-3">
  <button
    type="button"
    className="flex-1 border-2 border-[#50576c] bg-[#171c2d] px-5 py-3 font-mono text-sm font-black tracking-wide text-white shadow-[3px_3px_0_#080a12] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#72798c] hover:bg-[#202638]"
  >
    DUEL
  </button>

  <button
    type="button"
    className="flex-1 border-2 border-[#d69d08] bg-[#ffc52b] px-5 py-3 font-mono text-sm font-black tracking-wide text-[#17120a] shadow-[3px_3px_0_#805600] transition-all duration-200 hover:-translate-y-[2px] hover:brightness-110 active:translate-y-[1px]"
  >
        BATTLE AI
  </button>
</div>

      </section>


      {/* =====================================================
          MOBILE NOTE
          ===================================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        z-40
        h-[18%]
        bg-gradient-to-t
        from-[#05091a]/30
        to-transparent
        sm:hidden
      " />

    </main>
  );
}