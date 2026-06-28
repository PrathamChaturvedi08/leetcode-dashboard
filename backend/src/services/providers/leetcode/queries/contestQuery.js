const CONTEST_QUERY = `
query userContestRankingInfo($username: String!) {
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage

    badge {
      name
    }
  }
}
`;

module.exports = CONTEST_QUERY;