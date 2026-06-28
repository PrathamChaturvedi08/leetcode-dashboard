const PageTitle = ({ children, subtitle }) => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        {children}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-md text-lg leading-7 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
