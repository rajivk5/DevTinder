const express = require('express');
const connectDB = require('./config/database')
const app = express();
const User = require('./models/user')


app.post('/singup', async (req, res) => {
    const user = new User({
        firstName: 'Nikesh',
        lastName: 'Kumar',
        emailId: 'Nikesh@gmail.com',
        age: 27,
        gender: 'male',
    });

    await user.save();

    try {
        res.send('user added successfully!');
    } catch (err) {
        res.status(400).send('There is some error user not added.');
    }
})

connectDB().then(() => {
    console.log('DataBase connnection is successfull');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log(err);
});


