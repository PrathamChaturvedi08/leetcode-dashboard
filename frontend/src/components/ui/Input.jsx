import { forwardRef } from "react";

const Input = forwardRef(
  (
    { label, type = "text", placeholder, error, className = "", ...props },
    ref,
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-slate-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`
            w-full
            rounded-xl
            border
            bg-slate-900/70
            px-4
            py-3.5
            text-slate-100
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            ${
            error
                ? "border-rose-500 focus:border-rose-500"
                : "border-slate-700 focus:border-cyan-500"
            }
            focus:bg-slate-900
            focus:ring-4
            focus:ring-cyan-500/15
            ${className}
            `}
          {...props}
        />

        {error && <p className="text-sm text-rose-400">{error.message}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
