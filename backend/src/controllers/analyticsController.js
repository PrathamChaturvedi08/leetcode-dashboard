const CurrentSnapshot = require("../models/CurrentSnapshot");
const Snapshot = require("../models/Snapshot");

const {
  calculateWeeksBetween,
  compareSnapshots,
  getStrongestTopics,
  getWeakestTopics,
  getImprovingTopics,
  getTopicDistribution,
} = require("../services/analytics/analyticsService");

exports.getSummary = async (req, res) => {
  try {
    const currentSnapshot = await CurrentSnapshot.findOne({
      user: req.user._id,
    });

    if (!currentSnapshot) {
      return res.status(404).json({
        success: false,
        message: "No synced data found.",
      });
    }

    return res.status(200).json({
      success: true,

      overview: {
        ranking: currentSnapshot.ranking,

        contestRating: currentSnapshot.contestRating,

        contestRanking: currentSnapshot.contestRanking,

        contestAttended: currentSnapshot.contestAttended,

        contestTopPercentage: currentSnapshot.contestTopPercentage,

        totalSolved: currentSnapshot.totalSolved,

        easySolved: currentSnapshot.easySolved,

        mediumSolved: currentSnapshot.mediumSolved,

        hardSolved: currentSnapshot.hardSolved,

        currentStreak: currentSnapshot.currentStreak,

        longestStreak: currentSnapshot.longestStreak,

        activeDays: currentSnapshot.activeDays,

        totalSubmissions: currentSnapshot.totalSubmissions,

        problemsSolvedBeatsStats: currentSnapshot.problemsSolvedBeatsStats,
      },

      topTopics: getStrongestTopics(currentSnapshot.skillStats),

      weakestTopics: getWeakestTopics(currentSnapshot.skillStats),

      topicDistribution: getTopicDistribution(currentSnapshot.skillStats),

      languageDistribution: currentSnapshot.languageStats,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.compare = async (req, res) => {
  try {
    const { from, to } = req.query;

    const previousSnapshot = await Snapshot.findById(from);

    if (!previousSnapshot) {
      return res.status(404).json({
        success: false,
        message: "Snapshot not found.",
      });
    }

    let currentSnapshot;

    if (!to || to === "current") {
      currentSnapshot = await CurrentSnapshot.findOne({
        user: req.user._id,
      });
    } else {
      currentSnapshot = await Snapshot.findById(to);
    }

    if (!currentSnapshot) {
      return res.status(404).json({
        success: false,
        message: "Comparison snapshot not found.",
      });
    }

    const weeksBetween = calculateWeeksBetween(
      currentSnapshot,
      previousSnapshot,
    );

    return res.status(200).json({
      success: true,

      comparison: compareSnapshots(
        currentSnapshot,
        previousSnapshot,
        weeksBetween,
      ),

      improvingTopics: getImprovingTopics(
        currentSnapshot.skillStats,
        previousSnapshot.skillStats,
      ),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
