const { validateEditProfileData } = require("../utils/validation");
const profileView = async (req, res) => {
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

const profileEdit = async (req, res) => {
    try {
        validateEditProfileData(req);

        const loggedInUser = req.user;

        Object.keys(req.body).forEach((key) => {
            loggedInUser[key] = req.body[key];
        });

        await loggedInUser.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            data: loggedInUser
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};


module.exports = { profileView, profileEdit };