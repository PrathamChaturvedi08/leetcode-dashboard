import { Outlet } from "react-router-dom";
import Logo from "../components/ui/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        {/* Left */}

        <div className="flex w-full items-center justify-center px-12 py-16 lg:w-[42%]">
          <div className="w-full max-w-md">
            <Logo className="mb-14" />

            <Outlet />
          </div>
        </div>

        {/* Right */}

        <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-20">
          {/* Glow */}

          <div className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* Card */}

          <div className="relative z-10 max-w-xl px-12 text-center">
            <div className="mb-8 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-cyan-300">
              Developer Performance Analytics
            </div>

            <h2 className="mb-8 text-6xl font-bold leading-tight text-white">
              Measure Your
              <br />
              <span className="text-cyan-400">Coding Progress</span>
            </h2>

            <p className="mx-auto max-w-lg text-lg leading-9 text-slate-300">
              Analyze your coding journey through detailed statistics,
              performance trends, topic strengths, consistency, contest history,
              and long-term progress.
            </p>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-4xl font-bold text-cyan-400">400+</p>

                <p className="mt-2 text-sm text-slate-400">Problems</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-4xl font-bold text-cyan-400">1600+</p>

                <p className="mt-2 text-sm text-slate-400">Rating</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-4xl font-bold text-cyan-400">120</p>

                <p className="mt-2 text-sm text-slate-400">Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
