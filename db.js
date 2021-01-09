const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jrvxglgi",
  password: "GLdv4rRwXxJRO7dp_kpck25bkrCyZDf4",
  host: "kandula.db.elephantsql.com",
  port: 5432,
  database: "jrvxglgi",
});

module.exports = pool;
