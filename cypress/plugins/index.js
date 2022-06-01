'use strict';
require('dotenv').config();

module.exports = (on, config) => {
  config.env.DB_USERNAME = process.env.DB_USER;
  return config;
};
