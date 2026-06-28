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
        name: String,
        icon: String,
      },
    ],

    submissionCalendar: {
      type: Map,
      of: Number,
      default: {},
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
