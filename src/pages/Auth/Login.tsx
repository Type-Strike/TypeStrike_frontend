import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#080d20] px-4 py-8">
      {/* Landing background */}
      <img
        src="/landing/background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#05091a]/50" />

      {/* Login Card */}
      <div className="relative z-10 w-[520px] max-w-full border-2 border-[#ffc52b]/40 bg-[#080d20]/85 px-8 py-9 shadow-[0_0_40px_rgba(0,0,0,0.45),8px_8px_0_rgba(0,0,0,0.35)] backdrop-blur-lg sm:px-10">

        {/* Accent */}
        <div className="mx-auto mb-7 h-1 w-16 bg-[#ffc52b]" />

        {/* Logo / Name */}
        <h1 className="text-center font-mono text-4xl font-black uppercase tracking-[0.12em] text-[#ffc52b] drop-shadow-[0_3px_0_#704600]">
          TYPESTRIKE
        </h1>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white/80">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-white/15 bg-[#05091a]/80 px-4 py-3.5 font-mono text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ffc52b] focus:shadow-[0_0_15px_rgba(255,197,43,0.15)]"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-white/80">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="font-mono text-xs font-bold text-[#ffc52b] hover:underline"
              >
                FORGOT?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-2 border-white/15 bg-[#05091a]/80 px-4 py-3.5 font-mono text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ffc52b] focus:shadow-[0_0_15px_rgba(255,197,43,0.15)]"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full border-2 border-[#b77b00] bg-[#ffc52b] px-5 py-4 font-mono text-sm font-black uppercase tracking-[0.12em] text-[#17120a] shadow-[4px_4px_0_#704600] transition-all duration-150 hover:-translate-y-1 hover:brightness-110 hover:shadow-[5px_5px_0_#704600] active:translate-y-[2px] active:shadow-[2px_2px_0_#704600]"
          >
            ENTER BATTLE
          </button>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 border-2 border-white/15 bg-white/[0.06] px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wide text-white transition-all hover:border-white/30 hover:bg-white/[0.1]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-sans text-xs font-bold text-[#4285f4]">
              G
            </span>

            Continue with Google
          </button>
        </form>

        {/* Register */}
        <p className="mt-7 text-center font-mono text-xs text-white/50">
          NEW PLAYER?{" "}
          <Link
            to="/register"
            className="font-bold text-[#ffc52b] hover:underline"
          >
            CREATE ACCOUNT
          </Link>
        </p>
      </div>
    </main>
  );
}