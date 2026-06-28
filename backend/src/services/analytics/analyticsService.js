const { differenceInDays } = require("date-fns");

const compareMetric = (current, previous, weeksBetween) => {
  const from = previous ?? 0;
  const to = current ?? 0;

  const change = to - from;

  return {
    from,
    to,
    change,
    perWeek:
      weeksBetween > 0 ? Number((change / weeksBetween).toFixed(2)) : change,
  };
};

const calculateWeeksBetween = (currentSnapshot, previousSnapshot) => {
  const currentDate = currentSnapshot.syncedAt || currentSnapshot.endDate;

  const previousDate = previousSnapshot.syncedAt || previousSnapshot.startDate;

  const days = Math.max(differenceInDays(currentDate, previousDate), 1);

  return Number((days / 7).toFixed(2));
};

const getStrongestTopics = (skillStats, limit = 5) => {
  return [...skillStats]
    .sort((a, b) => b.problemsSolved - a.problemsSolved)
    .slice(0, limit);
};

const getWeakestTopics = (skillStats, limit = 5) => {
  return [...skillStats]
    .filter((topic) => topic.problemsSolved > 0)
    .sort((a, b) => a.problemsSolved - b.problemsSolved)
    .slice(0, limit);
};

const getTopicDistribution = (skillStats) => {
  return [...skillStats].sort((a, b) => b.problemsSolved - a.problemsSolved);
};

const getImprovingTopics = (currentSkills, previousSkills, limit = 5) => {
  const previousMap = new Map();

  previousSkills.forEach((topic) => {
    previousMap.set(topic.tagSlug, topic.problemsSolved);
  });

  const improvements = currentSkills.map((topic) => ({
    tagName: topic.tagName,
    tagSlug: topic.tagSlug,
    previous: previousMap.get(topic.tagSlug) || 0,
    current: topic.problemsSolved,
    change: topic.problemsSolved - (previousMap.get(topic.tagSlug) || 0),
  }));

  return improvements
    .filter((topic) => topic.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, limit);
};

const compareSnapshots = (currentSnapshot, previousSnapshot, weeksBetween) => {
  return {
    weeksBetween,

    totalSolved: compareMetric(
      currentSnapshot.totalSolved,
      previousSnapshot.totalSolved,
      weeksBetween,
    ),

    easySolved: compareMetric(
      currentSnapshot.easySolved,
      previousSnapshot.easySolved,
      weeksBetween,
    ),

    mediumSolved: compareMetric(
      currentSnapshot.mediumSolved,
      previousSnapshot.mediumSolved,
      weeksBetween,
    ),

    hardSolved: compareMetric(
      currentSnapshot.hardSolved,
      previousSnapshot.hardSolved,
      weeksBetween,
    ),

    contestRating: compareMetric(
      currentSnapshot.contestRating,
      previousSnapshot.contestRating,
      weeksBetween,
    ),

    contestRanking: compareMetric(
      currentSnapshot.contestRanking,
      previousSnapshot.contestRanking,
      weeksBetween,
    ),
  };
};

module.exports = {
  calculateWeeksBetween,

  compareSnapshots,

  getStrongestTopics,

  getWeakestTopics,

  getImprovingTopics,

  getTopicDistribution,
};
