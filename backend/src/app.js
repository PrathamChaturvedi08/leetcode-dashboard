const express = require("express");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "CodePulse API",
    version: "1.0.0",
    status: "Running",
  });
});

module.exports = app;
