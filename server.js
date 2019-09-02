const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendfile('./public/index.html');
});

app.listen(80, () => {
    console.log('App is running');
});