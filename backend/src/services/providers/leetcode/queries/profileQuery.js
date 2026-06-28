const PROFILE_QUERY = `
query userProfile($username: String!) {
  matchedUser(username: $username) {
    profile {
      userAvatar
      ranking
      reputation
      starRating
    }

    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }

    badges {
      displayName
      icon
    }

    languageProblemCount {
      languageName
      problemsSolved
    }

    problemsSolvedBeatsStats {
      difficulty
      percentage
    }
  }
}
`;

module.exports = PROFILE_QUERY;