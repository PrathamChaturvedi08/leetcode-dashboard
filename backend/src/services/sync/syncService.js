const { differenceInDays } = require("date-fns");

const User = require("../../models/User");
const CurrentSnapshot = require("../../models/CurrentSnapshot");
const Snapshot = require("../../models/Snapshot");

const { getProfile } = require("../providers/leetcode/profileProvider");

const { getContestData } = require("../providers/leetcode/contestProvider");

const { getCalendar } = require("../providers/leetcode/calendarProvider");

/*
 * Archive the current snapshot if it is older than 7 days.
 */
const archiveSnapshotIfNeeded = async (currentSnapshot) => {
  if (!currentSnapshot) {
    return;
  }

  const days = differenceInDays(new Date(), currentSnapshot.syncedAt);

  if (days < 7) {
    return;
  }

  await Snapshot.create({
    user: currentSnapshot.user,

    startDate: currentSnapshot.syncedAt,

    endDate: new Date(),

    ranking: currentSnapshot.ranking,

    contestRating: currentSnapshot.contestRating,

    contestRanking: currentSnapshot.contestRanking,

    contestAttended: currentSnapshot.contestAttended,

    totalSolved: currentSnapshot.totalSolved,

    easySolved: currentSnapshot.easySolved,

    mediumSolved: currentSnapshot.mediumSolved,

    hardSolved: currentSnapshot.hardSolved,

    skillStats: currentSnapshot.skillStats,

    languageStats: currentSnapshot.languageStats,

    problemsSolvedBeatsStats: currentSnapshot.problemsSolvedBeatsStats,

    consistencyScore: 0,

    disciplineScore: 0,

    difficultyScore: 0,
  });
};

/*
 * Update or create the user's current snapshot.
 */
const updateCurrentSnapshot = async (userId, profile, contest, calendar) => {
  let snapshot = await CurrentSnapshot.findOne({
    user: userId,
  });

  if (!snapshot) {
    snapshot = new CurrentSnapshot({
      user: userId,
    });
  }

  snapshot.ranking = profile.ranking;

  snapshot.totalSolved = profile.totalSolved;

  snapshot.easySolved = profile.easySolved;

  snapshot.mediumSolved = profile.mediumSolved;

  snapshot.hardSolved = profile.hardSolved;

  snapshot.badges = profile.badges;

  snapshot.languageStats = profile.languageStats;

  snapshot.skillStats = [];

  snapshot.problemsSolvedBeatsStats = profile.problemsSolvedBeatsStats;

  snapshot.contestRating = contest.contestRating;

  snapshot.contestRanking = contest.contestRanking;

  snapshot.contestAttended = contest.contestAttended;

  snapshot.submissionCalendar = calendar.submissionCalendar;

  snapshot.syncedAt = new Date();

  await snapshot.save();

  return snapshot.toObject();
};

const syncLeetCodeProfile = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  if (!user.leetcodeUsername) {
    throw new Error("LeetCode username not connected.");
  }

  const username = user.leetcodeUsername;

  const [profileResult, contestResult, calendarResult] =
    await Promise.allSettled([
      getProfile(username),
      getContestData(username),
      getCalendar(username),
    ]);

  if (profileResult.status !== "fulfilled") {
    throw profileResult.reason;
  }

  if (calendarResult.status !== "fulfilled") {
    throw calendarResult.reason;
  }

  const profile = profileResult.value;

  const calendar = calendarResult.value;

  const contest =
    contestResult.status === "fulfilled"
      ? contestResult.value
      : {
          contestRating: 0,
          contestRanking: 0,
          contestAttended: 0,
        };

  const currentSnapshot = await CurrentSnapshot.findOne({
    user: userId,
  });

  await archiveSnapshotIfNeeded(currentSnapshot);

  const updatedSnapshot = await updateCurrentSnapshot(
    userId,
    profile,
    contest,
    calendar,
  );

  user.avatar = profile.avatar;

  user.lastSynced = new Date();

  await user.save();

  return {
    success: true,

    message: "Profile synced successfully.",

    snapshot: updatedSnapshot,
  };
};

module.exports = {
  syncLeetCodeProfile,
};
