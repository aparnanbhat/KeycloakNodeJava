const { Pool } = require('pg');

const postgresPool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'password',
    database: 'example',
    schema: 'backend'
});

module.exports = postgresPool;