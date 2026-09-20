const express = require('express');

const app = express();



app.use('/', (req, res) => {
    res.send('Home page');
});

app.use('/about', (req, res) => {
    res.send('About page');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

