const graphqlClient = require("../../../utils/graphqlClient");
const CALENDAR_QUERY = require("./queries/calendarQuery");

const getCalendar = async (username) => {
  const data = await graphqlClient(CALENDAR_QUERY, {
    username,
  });

  const user = data.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found.");
  }

  return {
    submissionCalendar: JSON.parse(user.submissionCalendar || "{}"),
  };
};

module.exports = {
  getCalendar,
};
