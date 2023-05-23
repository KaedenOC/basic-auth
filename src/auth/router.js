'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { userModel } = require('./models');
// const basicAuth = require('./middleware/basic');


// router.post('/signup', async (req, res, next) => {
//   // great proof of life
//   // res.status(200).send('this route works');
//   try {
//     const { username, password } = req.body;
//     const encryptedPassword = await bcrypt.hash(password, 5);
//     let newUser = await Users.create({
//       username,
//       password: encryptedPassword,
//     });
//     res.status(200).send(newUser);
//   } catch (err) {
//     console.error(err);
//     next('signup error occurred');
//   }
// });



router.post('/signup', async (req, response) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await userModel.create(req.body);
    // console.log('---record', req.body);
    response.status(201).json(record);
  } catch (error) { response.status(403).send('Error Creating User'); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
// router.post('/signin', async (req, res) => {


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
