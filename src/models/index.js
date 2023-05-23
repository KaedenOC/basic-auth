'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const userModel = require('./users-model');


const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory:'
  : process.env.DATABASE_URL;

//database singleton
const sequelize = new Sequelize(DATABASE_URL);

//create our working and connected user model
const Users = userModel(sequelize, DataTypes);




module.exports = {
  sequelize,
  Users,
};
