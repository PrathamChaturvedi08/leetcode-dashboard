const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const { getSummary, compare } = require("../controllers/analyticsController");

router.get("/summary", auth, getSummary);

router.get("/compare", auth, compare);

module.exports = router;
