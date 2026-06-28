const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const { syncProfile } = require("../controllers/syncController");

router.post("/", auth, syncProfile);

module.exports = router;
