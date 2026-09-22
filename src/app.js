const express = require('express');

const app = express();

app.get('/test/:id/:name', (req, res) => {
    console.log(req.params);
    res.send({ Name: 'John Doe', Age: 30, Occupation: 'Software Engineer' });
});


app.post('/test', (req, res) => {
    res.send('Post request successfully received');
});


app.delete('/test', (req, res) => {
    res.send('Delete request successfully received');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

