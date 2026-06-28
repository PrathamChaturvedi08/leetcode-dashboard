const User = require("../models/User");

exports.connectLeetCode = async (req, res) => {
  try {
    const { leetcodeUsername } = req.body;

    if (!leetcodeUsername) {
      return res.status(400).json({
        success: false,
        message: "LeetCode username is required.",
      });
    }

    const existingUser = await User.findOne({
      leetcodeUsername,
    });

    if (
      existingUser &&
      existingUser._id.toString() !== req.user._id.toString()
    ) {
      return res.status(400).json({
        success: false,
        message: "This LeetCode username is already linked.",
      });
    }

    const user = await User.findById(req.user._id);

    user.leetcodeUsername = leetcodeUsername;

    await user.save();

    res.json({
      success: true,
      message: "LeetCode account connected successfully.",
      leetcodeUsername: user.leetcodeUsername,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const CurrentSnapshot = require("../models/CurrentSnapshot");

exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    const currentSnapshot = await CurrentSnapshot.findOne({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      user,
      currentSnapshot,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
