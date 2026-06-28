const graphqlClient = require("../../../utils/graphqlClient");
const PROFILE_QUERY = require("./queries/profileQuery");

const getSolvedCount = (stats, difficulty) => {
  return (
    stats.find((item) => item.difficulty === difficulty)?.count || 0
  );
};

const getBeatsStats = (stats) => ({
  easy:
    stats.find((item) => item.difficulty === "Easy")?.percentage || 0,

  medium:
    stats.find((item) => item.difficulty === "Medium")?.percentage || 0,

  hard:
    stats.find((item) => item.difficulty === "Hard")?.percentage || 0,
});

const getProfile = async (username) => {
  const data = await graphqlClient(PROFILE_QUERY, {
    username,
  });

  const user = data.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found.");
  }

  const stats = user.submitStatsGlobal.acSubmissionNum;

  return {
    avatar: user.profile.userAvatar,

    ranking: user.profile.ranking,

    reputation: user.profile.reputation,

    starRating: user.profile.starRating,

    totalSolved: getSolvedCount(stats, "All"),

    easySolved: getSolvedCount(stats, "Easy"),

    mediumSolved: getSolvedCount(stats, "Medium"),

    hardSolved: getSolvedCount(stats, "Hard"),

    badges:
      user.badges?.map((badge) => ({
        name: badge.displayName,
        icon: badge.icon,
      })) || [],

    languageStats: user.languageProblemCount || [],

    problemsSolvedBeatsStats: getBeatsStats(
      user.problemsSolvedBeatsStats || [],
    ),
  };
};

module.exports = {
  getProfile,
};