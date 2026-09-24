const express = require('express');

const app = express();

const { middleware1, middleware2, middleware3 } = require('./middlewares/auth');
const userRouter = require('./routs/userRoutes');

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.get('/', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
