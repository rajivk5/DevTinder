
const validator = require("validator");

const validateSignup = async (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName?.trim() || !lastName?.trim()) {
        throw new Error("Name is not valid");
    }

    if (!validator.isEmail(emailId || "")) {
        throw new Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password || "")) {
        throw new Error("Please enter a strong password");
    }
};

const validateEditProfileData = (req) => {
    const allowedEditFields = [
        "firstName",
        "lastName",
        "age",
        "gender",
        "about",
        "skills",
        "photoUrl"
    ];

    const fields = Object.keys(req.body);

    if (fields.length === 0) {
        throw new Error("Please provide at least one field to update");
    }

    const isEditAllowed = fields.every((field) =>
        allowedEditFields.includes(field)
    );

    if (!isEditAllowed) {
        throw new Error("Invalid fields in profile update");
    }

    return true;
};

module.exports = {
    validateSignup,
    validateEditProfileData
};
