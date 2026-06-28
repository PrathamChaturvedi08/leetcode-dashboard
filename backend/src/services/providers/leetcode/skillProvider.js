const graphqlClient = require("../../../utils/graphqlClient");
const SKILL_QUERY = require("./queries/skillQuery");

const flattenSkills = (groups) => {
  return [
    ...(groups.fundamental || []),
    ...(groups.intermediate || []),
    ...(groups.advanced || []),
  ].map((skill) => ({
    tagName: skill.tagName,
    tagSlug: skill.tagSlug,
    problemsSolved: skill.problemsSolved,
  }));
};

const getSkillStats = async (username) => {
  const data = await graphqlClient(SKILL_QUERY, {
    username,
  });

  const user = data.matchedUser;

  if (!user) {
    throw new Error("LeetCode user not found.");
  }

  return flattenSkills(user.tagProblemCounts);
};

module.exports = {
  getSkillStats,
};
