const mongoose = require("mongoose");

const snapshotSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
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

    consistencyScore: {
      type: Number,
      default: 0,
    },

    disciplineScore: {
      type: Number,
      default: 0,
    },

    difficultyScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Snapshot", snapshotSchema);
