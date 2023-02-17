'use strict';

require('dotenv').config();
const { Sequilize, DataTypes } = require('sequelize');

const character = require('./character');
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const characterModel = character(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  characterModel,
};