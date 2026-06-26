const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

// const { connectLeetCode } = require("../controllers/userController");

const {
  connectLeetCode,
  syncProfile,
} = require("../controllers/userController");

router.put("/leetcode", authMiddleware, connectLeetCode);
router.get("/sync", authMiddleware, syncProfile);

module.exports = router;
