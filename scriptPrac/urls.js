const express = requires('express');
const axios = require('axios');
const urls = express();
const ExpressError = require('./expressError');

app.get('./urls.txt', function (req, res, next) {
    if (!req.query) {
        throw ExpressError('You must pass a URL.', 400)
    }
    let results = req.query(async e => {
        return await axios.get({urls})
    });
    
});

app.listen(3000);


