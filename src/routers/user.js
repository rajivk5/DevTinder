const express = require("express");
const router = express.Router();
const validateObjectId = require("../middlewares/validateObjectId");

const {
  profile,
  getFeed,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  logUser,
  logOut
} = require("../controllers/user");

router.get("/user/:id", validateObjectId, getUser);

router.get("/feed", getFeed);

router.delete("/user/:id", validateObjectId, deleteUser);

router.patch("/user/:id", validateObjectId, updateUser);

router.post("/login", logUser)

router.get("/profile", profile)

router.post("/signup", createUser);

router.post("/logout", logOut);

module.exports = router;
