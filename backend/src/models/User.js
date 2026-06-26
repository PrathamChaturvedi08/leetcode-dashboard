const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    leetcodeUsername: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    ranking: {
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

    lastSynced: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
