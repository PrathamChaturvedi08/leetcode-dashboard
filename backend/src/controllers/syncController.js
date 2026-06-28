const { syncLeetCodeProfile } = require("../services/sync/syncService");

exports.syncProfile = async (req, res) => {
  try {
    const result = await syncLeetCodeProfile(req.user._id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
