const CALENDAR_QUERY = `
query userCalendar($username: String!) {
  matchedUser(username: $username) {
    submissionCalendar
  }
}
`;

module.exports = CALENDAR_QUERY;
