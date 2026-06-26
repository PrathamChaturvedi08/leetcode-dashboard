const User = require("../models/User");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists.",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      leetcodeUsername: user.leetcodeUsername,
      avatar: user.avatar,
    };

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      leetcodeUsername: user.leetcodeUsername,
      avatar: user.avatar,
    };

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
