const graphqlClient = require("../../../utils/graphqlClient");
const PROFILE_QUERY = require("./queries/profileQuery");

const getSolvedCount = (stats, difficulty) => {
  return stats.find((item) => item.difficulty === difficulty)?.count || 0;
};

const getAcceptedSubmissions = (stats, difficulty) => {
  return stats.find((item) => item.difficulty === difficulty)?.submissions || 0;
};

const getBeatsStats = (stats) => ({
  easy: stats.find((item) => item.difficulty === "EASY")?.percentage || 0,

  medium: stats.find((item) => item.difficulty === "MEDIUM")?.percentage || 0,

  hard: stats.find((item) => item.difficulty === "HARD")?.percentage || 0,
});

const getProfile = async (username) => {
  const data = await graphqlClient(PROFILE_QUERY, {
    username,
    userSlug: username,
  });

  const user = data.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found.");
  }

  const stats = user.submitStats.acSubmissionNum;

  return {
    avatar: user.profile.userAvatar,

    ranking: user.profile.ranking,

    reputation: user.profile.reputation,

    starRating: user.profile.starRating,

    totalSolved: getSolvedCount(stats, "All"),

    easySolved: getSolvedCount(stats, "Easy"),

    mediumSolved: getSolvedCount(stats, "Medium"),

    hardSolved: getSolvedCount(stats, "Hard"),

    acceptedSubmissions: {
      total: getAcceptedSubmissions(stats, "All"),

      easy: getAcceptedSubmissions(stats, "Easy"),

      medium: getAcceptedSubmissions(stats, "Medium"),

      hard: getAcceptedSubmissions(stats, "Hard"),
    },

    languageStats:
      user.languageProblemCount?.map((language) => ({
        languageName: language.languageName,
        problemsSolved: language.problemsSolved,
      })) || [],

    badges:
      user.badges?.map((badge) => ({
        id: badge.id,
        displayName: badge.displayName,
        icon: badge.icon,
        category: badge.category,
      })) || [],

    problemsSolvedBeatsStats: getBeatsStats(
      data.userProfileUserQuestionProgressV2?.userSessionBeatsPercentage || [],
    ),
  };
};

module.exports = {
  getProfile,
};
