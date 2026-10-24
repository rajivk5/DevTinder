const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter')
const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser())

app.use('/', userRouter);



module.exports = app;