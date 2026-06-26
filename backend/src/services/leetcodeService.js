const axios = require("axios");

const { LEETCODE_GRAPHQL_URL } = require("../constants/leetcode");

const getProfile = async (username) => {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
          userAvatar
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  const response = await axios.post(LEETCODE_GRAPHQL_URL, {
    query,
    variables: {
      username,
    },
  });

  return response.data.data.matchedUser;
};

module.exports = {
  getProfile,
};
