'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./auth/router');




const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});



// app.use('*', notFound);
// app.use(internalServerError);

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
