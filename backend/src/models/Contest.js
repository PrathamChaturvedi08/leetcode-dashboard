const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    contestName: {
      type: String,
      required: true,
    },

    contestDate: {
      type: Date,
      required: true,
    },

    ranking: {
      type: Number,
      required: true,
    },

    ratingBefore: {
      type: Number,
      default: 0,
    },

    ratingAfter: {
      type: Number,
      default: 0,
    },

    problemsSolved: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Contest", contestSchema);
