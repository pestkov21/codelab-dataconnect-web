const { validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'movie-connector',
  service: 'your-service-name',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

