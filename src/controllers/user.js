const User = require('../models/userModel')

const getFeed = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send('Something went wrong');
    }
}



const getUser = async (req, res) => {

    try {
        const users = await User.find()
            .select("-password")
            .lean();

        res.send(users);
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
}



const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send('user added successfully!');
    } catch (err) {
        res.status(400).send('There is some error user not added.');
    }
}


const updateUser = async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, data, {
            runValidators: true
        })
        res.send('User updated successfully')

    } catch (err) {
        res.status(400).send('somthing went wrong' + err.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = req.body;
        console.log(user)
        const delUser = await User.deleteOne(user);
        if (!delUser) res.status(400).send('User not found')
        res.send(delUser)

    } catch (err) {
        res.status(400).send('Somthing went wrong')

    }
}


const deleteUserById = async (req, res) => {
    try {
        console.log('deleting')
        const delUser = await User.findByIdAndDelete(req.params.id);
        if (!delUser) res.status(400).send('User not found')
        res.send(delUser)

    } catch (err) {
        res.status(400).send('Somthing went wrong')

    }
}


module.exports = { getFeed, getUser, createUser, updateUser, deleteUser, deleteUserById };