const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "digital_customer_care_db",
  password: "0987654321",
  port: 5585,
});

module.exports = pool;