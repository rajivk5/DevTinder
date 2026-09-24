const express = require('express');

const app = express();

const { middleware1, middleware2, middleware3 } = require('./middlewares/auth');
const userRouter = require('./routs/userRoutes');

// app.use(middleware1);
// app.use(middleware2);
// app.use(middleware3);
// app.get('/', userRouter)


app.get("/test", (req, res, next) => {
    console.log("Route");
    next(new Error("Something broke"));
});

app.use((err, req, res, next) => {
    console.log("Error Handler 1");

    next();
});

app.use((err, req, res, next) => {
    console.log("Error Handler 2");

    res.status(500).send("Failed");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
