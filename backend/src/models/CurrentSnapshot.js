const mongoose = require("mongoose");

const currentSnapshotSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    ranking: {
      type: Number,
      default: 0,
    },

    contestRating: {
      type: Number,
      default: 0,
    },

    contestRanking: {
      type: Number,
      default: 0,
    },

    contestAttended: {
      type: Number,
      default: 0,
    },

    contestTopPercentage: {
      type: Number,
      default: 0,
    },

    totalSolved: {
      type: Number,
      default: 0,
    },

    easySolved: {
      type: Number,
      default: 0,
    },

    mediumSolved: {
      type: Number,
      default: 0,
    },

    hardSolved: {
      type: Number,
      default: 0,
    },

    skillStats: [
      {
        tagName: String,
        tagSlug: String,
        problemsSolved: Number,
      },
    ],

    languageStats: [
      {
        languageName: String,
        problemsSolved: Number,
      },
    ],

    problemsSolvedBeatsStats: {
      easy: {
        type: Number,
        default: 0,
      },

      medium: {
        type: Number,
        default: 0,
      },

      hard: {
        type: Number,
        default: 0,
      },
    },

    badges: [
      {
        id: String,

        displayName: String,

        icon: String,

        category: String,
      },
    ],

    submissionCalendar: {
      type: Map,
      of: Number,
      default: {},
    },

    currentStreak: {
      type: Number,
      default: 0,
    },

    longestStreak: {
      type: Number,
      default: 0,
    },

    activeDays: {
      type: Number,
      default: 0,
    },

    totalSubmissions: {
      type: Number,
      default: 0,
    },

    syncedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("CurrentSnapshot", currentSnapshotSchema);
