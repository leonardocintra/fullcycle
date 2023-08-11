const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql2");
const conn = mysql.createConnection(config);

conn.connect();
const sql = `INSERT INTO people (name) values ('Leonardo')`;
conn.query(sql);
conn.end();

app.get("/", (req, res) => {
  res.send("Welcome ronaldinho");
});

app.listen(port, () => {
  console.log("listening on port " + port.toString() + "...");
});
