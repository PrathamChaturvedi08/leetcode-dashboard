const BadgeGrid = ({ badges = [] }) => {
  if (badges.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">Badges</h2>

        <p className="text-slate-400">No badges earned yet.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Badges</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500/40"
          >
            <img
              src={badge.icon}
              alt={badge.displayName}
              className="mb-4 h-16 w-16"
            />

            <h3 className="font-semibold text-white">{badge.displayName}</h3>

            <p className="mt-2 text-sm text-slate-400">
              {badge.category.replace("_", " ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeGrid;
