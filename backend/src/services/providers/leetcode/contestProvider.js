const graphqlClient = require("../../../utils/graphqlClient");
const CONTEST_QUERY = require("./queries/contestQuery");

const getContestData = async (username) => {
  const data = await graphqlClient(CONTEST_QUERY, {
    username,
  });

  const contest = data.userContestRanking;

  if (!contest) {
    return {
      contestRating: 0,
      contestRanking: 0,
      contestAttended: 0,
      contestTopPercentage: 0,
      contestBadge: null,
    };
  }

  return {
    contestRating: contest.rating || 0,

    contestRanking: contest.globalRanking || 0,

    contestAttended: contest.attendedContestsCount || 0,

    contestTopPercentage: contest.topPercentage || 0,

    contestBadge: contest.badge?.name || null,
  };
};

module.exports = {
  getContestData,
};