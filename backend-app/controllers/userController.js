const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const response = require("../utils/response");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return response(res, false, null, "All Fields are required", 401);
    }
    const user = new User({ name, email, password });
    await user.save();
    return response(res, true, user, "User registered successfully", 201);
  } catch (error) {
    if (error.code === 11000) {
      console.log("Email Already exists.");
      return response(res, false, null, "Email Already exists.", 401);
    }
    return response(res, false, null, "Internal server error", 500);
  }
};

exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return response(res, false, null, "All Fields are required", 401);
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return response(res, false, null, "Invalid credentials", 401);
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};
