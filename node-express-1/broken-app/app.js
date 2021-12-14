const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require ('./expressError');

app.post(function(req, res, next) {
  if (!req) {
    throw ExpressError('You must submit a request.',400)
  }
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);
