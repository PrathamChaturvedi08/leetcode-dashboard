const variants = {
  primary: "bg-cyan-500 hover:bg-cyan-400 text-white",

  secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100",

  danger: "bg-rose-500 hover:bg-rose-400 text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
