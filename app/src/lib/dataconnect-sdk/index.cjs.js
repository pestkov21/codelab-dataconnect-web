const { validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'movie-connector',
  service: 'firebase-web-quickstart',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

