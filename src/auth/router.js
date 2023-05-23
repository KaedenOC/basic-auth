'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { userModel } = require('./models');
const basicAuth = require('./middleware/basic');


router.get('/signup', async (req, res, next) => {
  try {
    let users = await userModel.findAll();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});


router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await userModel.create(req.body);
    // console.log('---record', req.body);
    res.status(201).json(record);
  } catch (error) { res.status(403).send('Error Creating User'); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});


//   try {
//     const user = await Users.findOne({ where: { username: username } });
//     const valid = await bcrypt.compare(password, user.password);
//     if (valid) {
//       req.user = user;
//       next();
//       res.status(200).json(req.user);
//     }
//     else {
//       throw new Error('Invalid User');
//     }
//   } catch (error) { next('Invalid Login. Message:', error.message); }

// });

module.exports = router;
