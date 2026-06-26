const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    titleSlug: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    topicTags: [
      {
        type: String,
      },
    ],

    language: {
      type: String,
      default: "",
    },

    runtime: {
      type: String,
      default: "",
    },

    memory: {
      type: String,
      default: "",
    },

    solvedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Submission", submissionSchema);
