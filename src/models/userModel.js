const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      minLength: 3,
      maxLength: 50,
      trim: true,
    },
    emailId: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    age: {
      type: Number,
      min: 18,
      max: 85,
      validate: {
        validator: Number.isInteger,
        message: "Age must be an integer",
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "others"],
        message: "Gender is not valid",
      },
    },
    photoUrl: {
      type: String,
      trim: true,
      default:
        "https://kristalle.com/wp-content/uploads/2020/07/dummy-profile-pic-1.jpg",
      validate: {
        validator: function (value) {
          return validator.isURL(value);
        },
        message: "Please provide a valid photo URL",
      },
    },
    about: {
      type: String,
      minLength: 10,
      maxLength: 500,
      trim: true,
      default: "This is dummy description about user",
    },
    skills: {
      type: [String],
      validate: [
        {
          validator: function (value) {
            return value.length <= 10;
          },
          message: "Skills should not exceed 10",
        },
        {
          validator: function (value) {
            return value.every(
              (skill) => skill.trim().length >= 2 && skill.trim().length <= 30,
            );
          },
          message: "Each skill must be between 2 and 30 characters",
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
