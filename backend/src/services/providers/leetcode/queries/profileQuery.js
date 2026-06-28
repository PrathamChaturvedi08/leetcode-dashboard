const PROFILE_QUERY = `
query userProfile($username: String!, $userSlug: String!) {
  matchedUser(username: $username) {
    profile {
      userAvatar
      ranking
      reputation
      starRating
    }

    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }

    badges {
      id
      displayName
      icon
      category
    }

    languageProblemCount {
      languageName
      problemsSolved
    }
  }

  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
  }
}
`;

module.exports = PROFILE_QUERY;
