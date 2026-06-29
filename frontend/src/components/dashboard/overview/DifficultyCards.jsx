const DifficultyCards = ({ overview }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
        <p className="text-sm font-medium text-green-300">Easy Solved</p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          {overview?.easySolved ?? "--"}
        </h2>
      </div>

      <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
        <p className="text-sm font-medium text-yellow-300">Medium Solved</p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          {overview?.mediumSolved ?? "--"}
        </h2>
      </div>

      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
        <p className="text-sm font-medium text-red-300">Hard Solved</p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          {overview?.hardSolved ?? "--"}
        </h2>
      </div>
    </div>
  );
};

export default DifficultyCards;
