const User = require("../models/User");

const { getProfile } = require("../services/leetcodeService");

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
      _id: { $ne: req.user._id },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "This LeetCode username is already connected to another account.",
      });
    }

    req.user.leetcodeUsername = leetcodeUsername;

    await req.user.save();

    res.status(200).json({
      success: true,
      message: "LeetCode account connected successfully.",
      user: {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        leetcodeUsername: req.user.leetcodeUsername,
        avatar: req.user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.syncProfile = async (req, res) => {
  try {
    if (!req.user.leetcodeUsername) {
      return res.status(400).json({
        success: false,
        message: "Connect your LeetCode account first.",
      });
    }

    const profile = await getProfile(req.user.leetcodeUsername);

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
