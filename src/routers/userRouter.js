const express = require("express");
const router = express.Router();

const { signup, login, logout } = require('../controllers/authController.js')
const requestController = require("../controllers/requestController.js");
const { profileView,profileEdit } = require("../controllers/profileController.js");
const { userAuth } = require("../middlewares/userAuthMiddleware.js");

router.post("/signup", signup);

router.post("/login", login);

router.get("/profile/view", userAuth, profileView);

router.patch("/profile/edit", userAuth, profileEdit);

router.post("/request", userAuth, requestController);

router.post("/logout", logout)


module.exports = router;
