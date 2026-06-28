const CONTEST_QUERY = `
query userContestRanking($username: String!) {
  userContestRanking(username: $username) {
    rating
    globalRanking
    attendedContestsCount
  }
}
`;

module.exports = CONTEST_QUERY;
