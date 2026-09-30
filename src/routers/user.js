const express = require("express");
const router = express.Router();
const validateObjectId = require("../middlewares/validateObjectId");
const {
  getFeed,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  logUser
} = require("../controllers/user");

router.get("/user/:id", validateObjectId, getUser);

router.get("/feed", getFeed);

router.delete("/user/:id", validateObjectId, deleteUser);

router.patch("/user/:id", validateObjectId, updateUser);

router.post("/login", logUser)

router.post("/signup", createUser);

module.exports = router;
