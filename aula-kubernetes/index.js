const express = require("express");
const app = express();
const port = 3000;

const nome1 = process.env.NOME_1;
const nome2 = process.env.NOME_2;

app.get("/", (req, res) => {
  res.send(`Ola meu senhores ${nome1} e ${nome2}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
