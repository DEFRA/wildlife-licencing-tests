
require('dotenv').config();

module.exports = (on, config) => {
  config.env.URL = 'https://new-dev-ing.aws-int.defra.cloud/login';
  return config;
};
