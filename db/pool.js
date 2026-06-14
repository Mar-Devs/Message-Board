const { Pool } = require("pg");
const { loadEnvFile } = require("node:process");
const path = require("node:path");

try{
    process.loadEnvFile(path.join(__dirname, "..", ".env"));

} catch{
    console.log("This is production :)")
}

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
