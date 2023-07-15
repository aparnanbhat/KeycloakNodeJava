const session = require('express-session');
const Keycloak = require('keycloak-connect');

const memoryStore = new session.MemoryStore();

const keycloakConfig = {
  realm: 'xpressbees',
  'auth-server-url': 'https://stage-auth.xbees.in',
  'ssl-required': 'external',
  resource: 'billing-ui',
};

const keycloak = new Keycloak(keycloakConfig);


module.exports = keycloak;
