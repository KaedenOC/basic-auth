'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { Users } = require('./models');
const router = express.Router();
const basicAuth = require('./middleware/basic');


router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', async (req, res) => {


  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      next();
      res.status(200).json(req.user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { next('Invalid Login. Message:', error.message); }

});

module.exports = router;
