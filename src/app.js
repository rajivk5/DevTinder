const express = require('express');

const app = express();

app.use('/user', [
    (req, res, next) => {
        next();
        // res.send('Route Handler 1')

    }, [(req, res, next) => {
        // res.send('2nd response')
        next()
    }], (req, res, next) => {
        res.send('3rd response')
        next()
    }], (req, res, next) => {
        res.send('4th response')
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

