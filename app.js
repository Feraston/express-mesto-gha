const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const usersRout = require("./routes/users");
const cardsRout = require("./routes/cards");

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '635af1a34aa5ad4e6c762d84'
  };

  next();
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use("/users", usersRout);
app.use("/cards", cardsRout);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error in server setup ${PORT}`);
  }
});