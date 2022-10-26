const express = require("express");

const { PORT = 3000 } = process.env;
const app = express();

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error in server setup ${PORT}`);
  }
});