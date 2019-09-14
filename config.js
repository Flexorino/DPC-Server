const path = require('path');

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8889,
  URL_PATH: 'http://localhost',
  BASE_VERSION: '',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
module.exports = config;
