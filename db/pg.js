const { Pool } = require('pg');

const connectionString = process.env.PG_URI;
const pool = new Pool({ connectionString });

module.exports = pool;
