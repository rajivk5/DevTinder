const User = require('../models/userModel');
const express = require('express')
const router = express.Router();
const {
    getFeed,
    getUser,
    createUser, updateUser, deleteUser, deleteUserById

} = require('../controllers/user')


router.get('/user', getUser)

router.get('/feed', getFeed)

router.delete('/user/:id', deleteUserById)

router.delete('/user', deleteUser)

router.patch('/user', updateUser)

router.post('/signup', createUser)

module.exports = router

