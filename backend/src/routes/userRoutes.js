const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  connectLeetCode,
  getMyProfile,
} = require("../controllers/userController");

router.patch("/leetcode", auth, connectLeetCode);

router.get("/me", auth, getMyProfile);

module.exports = router;
