const ContestCard = ({ overview }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Contest Performance
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="text-sm text-slate-400">Contest Rating</p>

          <h3 className="mt-2 text-3xl font-bold text-cyan-400">
            {overview?.contestRating ?? "--"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">Global Rank</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {overview?.contestRanking ?? "--"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">Contests</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {overview?.contestAttended ?? "--"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">Top Percentage</p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            {overview?.contestTopPercentage ?? "--"}%
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;