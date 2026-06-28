const Input = ({ label, error, className = "", ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}

      <input
        className={`w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 ${className}`}
        {...props}
      />

      {error && <p className="text-sm text-rose-400">{error}</p>}
    </div>
  );
};

export default Input;
