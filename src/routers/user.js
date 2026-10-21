const express = require("express");
const router = express.Router();

const {
  profile,
  createUser,
  logUser,
} = require("../controllers/user");

const { userAuth } = require("../middlewares/userAuth");

router.post("/signup", createUser);

router.post("/login", logUser)

router.get("/profile", userAuth, profile)

router.post("/sendconnectionrequest", userAuth, (req, res) => {
  const user = req.user;
  try {
    res.send(`${user.firstName} is send connection`)
  } catch (error) {
    res.json({
      message: "connection is not made due to",
      error: error
    })
  }
})


module.exports = router;
