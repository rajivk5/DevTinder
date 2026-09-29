const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");





const getFeed = async (req, res) => {
  try {
    const users = await User.find({}).select("-password").lean();

    res.status(200).send(users);
  } catch (err) {
    console.error(err);

    res.status(500).send("Something went wrong");
  }
};





const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.send(user);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
};




const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      emailId,
      password,
      age,
      gender,
      photoUrl,
      about,
      skills,
    } = req.body;

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        message: "Password must be strong",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
      age,
      gender,
      photoUrl,
      about,
      skills,
    });

    await user.save();

    res.status(201).json({
      message: "User added successfully!",
    });
  } catch (err) {
    console.error(err);

    res.status(400).json({
      message: "Something went wrong",
    });
  }
};





const updateUser = async (req, res) => {
  try {
    const allowedUpdates = [
      "firstName",
      "lastName",
      "age",
      "gender",
      "photoUrl",
      "about",
      "skills",
    ];

    const data = {};

    for (const field of allowedUpdates) {
      if (req.body[field] !== undefined) {
        data[field] = req.body[field];
      }
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update",
      });
    }

    const user = await User.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};






const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getFeed,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
