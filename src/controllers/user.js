const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();




const logUser = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId }).select("+password");
    if (!user) throw new Error("Invalid credentials");

    const isPassWordValid = await user.PasswordValid(password);
    if (isPassWordValid) {

      //Create a JWT Token

      const token = await user.getJWT();

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
      });


      res.status(200).send("login successfully!!")
    } else {
      throw new Error("Invalid credentials")
    }

  } catch (err) {
    console.error(err);
    res.status(400).send({
      error: err.message,
    });
  }
}


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


const profile = async (req, res) => {
  try {
    res.json({
      message: "User authenticated successfully",
      user: req.user
    })
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
}



module.exports = {
  profile,
  createUser,
  logUser,
};
