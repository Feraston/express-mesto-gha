const Card = require("../models/cards");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => console.log(err));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => console.log(err));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => console.log(err));
};
module.exports.putLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    {
      $addToSet: { likes: req.user._id },
    },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => console.log(err));
};
module.exports.deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    {
      $pull: { likes: req.user._id },
    },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => console.log(err));
};