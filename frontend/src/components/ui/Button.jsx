const Button = ({
  children,
  loading = false,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-5
        py-3.5
        text-sm
        font-semibold
        tracking-wide
        text-white
        shadow-lg
        shadow-cyan-500/20
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-cyan-400
        hover:shadow-cyan-500/40
        active:translate-y-0
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
        `}
      {...props}
    >
      {loading && (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}

      {children}
    </button>
  );
};

export default Button;
