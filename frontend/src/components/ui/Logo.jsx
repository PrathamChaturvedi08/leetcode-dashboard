const Logo = ({ className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-xl shadow-cyan-500/30">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 12H17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 7L17 12L12 17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            CodePulse
          </h1>

          <p className="text-sm text-slate-400">Track. Analyze. Improve.</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
