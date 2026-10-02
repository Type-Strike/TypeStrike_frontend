import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#080d20] px-4 py-8">
      <img
        src="/landing/background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 w-[560px] max-w-full border-2 border-white/20 bg-[#080d20]/90 px-8 py-8 sm:px-10">
        <div className="mx-auto mb-6 h-1 w-16 bg-[#ffc52b]" />

        <h1 className="text-center font-mono text-4xl font-black uppercase tracking-[0.12em] text-[#ffc52b] drop-shadow-[0_3px_0_#704600]">
          TYPESTRIKE
        </h1>

        <form className="mt-7 space-y-4">
          <div>
            <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white/90">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose your username"
              className="w-full border-2 border-white/25 bg-[#080d20]/70 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#ffc52b]"
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white/90">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-white/25 bg-[#080d20]/70 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#ffc52b]"
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white/90">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full border-2 border-white/25 bg-[#080d20]/70 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#ffc52b]"
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white/90">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border-2 border-white/25 bg-[#080d20]/70 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#ffc52b]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full border-2 border-[#b77b00] bg-[#ffc52b] px-5 py-3.5 font-mono text-sm font-black uppercase tracking-[0.08em] text-[#17120a] shadow-[4px_4px_0_#704600] transition-all duration-150 hover:-translate-y-1 hover:brightness-110 active:translate-y-[2px]"
          >
            CREATE ACCOUNT
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 border-2 border-white/25 bg-white/10 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-white/15"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-sans text-xs font-bold text-[#4285f4]">
              G
            </span>

            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center font-mono text-xs text-white/70">
          ALREADY A PLAYER?{" "}
          <Link
            to="/login"
            className="font-bold text-[#ffc52b] hover:underline"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </main>
  );
}