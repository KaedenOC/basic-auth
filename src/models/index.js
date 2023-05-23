'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const users = require('./users-model');


const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory:'
  : process.env.DATABASE_URL;

//database singleton
const sequelize = new Sequelize(DATABASE_URL);

//create our working and connected user model
const userModel = users(sequelize, DataTypes);




module.exports = {
  sequelize,
  userModel,
};
