const jwt = require('jsonwebtoken');
const User  = require('../models/userModel');
require('dotenv').config();

const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Token missing",
            });
        }

        const decodedObj = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decodedObj.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        req.user = user;
        return next();

    } catch (error) {
        return res.status(401).json({
            message: "Authentication failed",
        });
    }
};

module.exports = { userAuth };