const { Pool } = require("pg");
const { loadEnvFile } = require("node:process");
const path = require("node:path");
process.loadEnvFile(path.join(__dirname, "..", ".env"));


module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
