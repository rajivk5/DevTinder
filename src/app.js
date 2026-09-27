const express = require('express');
const connectDB = require('./config/database')
const app = express();
const userRouter = require('./routers/user')

app.use(express.json());

app.use('/', userRouter);


connectDB().then(() => {
    console.log('DataBase connnection is successfull');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log(err);
});


