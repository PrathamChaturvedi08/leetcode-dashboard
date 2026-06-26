const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { connectLeetCode } = require("../controllers/userController");

router.put("/leetcode", authMiddleware, connectLeetCode);

module.exports = router;
