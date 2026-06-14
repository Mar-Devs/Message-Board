const { Pool } = require("pg");
const { loadEnvFile } = require("node:process");
const path = require("node:path");
process.loadEnvFile(path.join(__dirname, "..", ".env"));


module.exports = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: { rejectUnauthorized: false },
  //   host: process.env.PGHOST,
  //   user: process.env.PGUSER,
  //   database: process.env.DATABASE_PUBLIC_URL,
  //   password: process.env.PGPASSWORD,
  //   port: process.env.PGPORT,
});
