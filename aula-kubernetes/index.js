const express = require("express");
const app = express();
const port = 3000;

let startedAt = Date.now();

app.get("/", (req, res) => {
  res.send(`Ola meu senhores Leonardo`);
});

app.get("/health", (req, res) => {
  // Verifica se já se passaram 30 segundos desde o startedAt
  if (Date.now() - startedAt >= 30000) {
    res.status(500).send("Internal Server Error - Deu certooo");
  } else {
    res.status(200).send("OK");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// #F0101
