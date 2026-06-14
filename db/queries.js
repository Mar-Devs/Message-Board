const pool = require("./pool.js");

async function getData() {
  const { rows } = await pool.query("SELECT * FROM user_messages");
  return rows;
}

async function populate(arr) {
  await pool.query(
    "INSERT INTO user_messages (user_name, message, submission_date) VALUES ($1,$2,$3)",
    arr,
  );
}



async function fix(msg) {
  await pool.query(
    "UPDATE user_messages SET message = $1 WHERE user_name = 'Katniss'",
    [msg],
  );
}

module.exports = { populate, getData };
