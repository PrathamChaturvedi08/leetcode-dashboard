const axios = require("axios");
const { LEETCODE_GRAPHQL_URL } = require("../constants/leetcode");

const graphqlClient = async (query, variables = {}) => {
  try {
    const response = await axios.post(
      LEETCODE_GRAPHQL_URL,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      },
    );

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.errors?.[0]?.message ||
          "LeetCode GraphQL request failed.",
      );
    }

    throw error;
  }
};

module.exports = graphqlClient;
