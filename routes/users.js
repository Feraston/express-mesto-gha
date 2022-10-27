const usersRout = require("express").Router();

const {
  getUsers,
  getUser,
  createUser
} = require("../controllers/users");

usersRout.get("/", getUsers);
usersRout.get("/:userId", getUser);
usersRout.post("/", createUser);

module.exports = usersRout;