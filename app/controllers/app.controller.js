const App = require('../model/app.model.js');

exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send({ rows: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving titles.',
      });
    });
};

exports.create = (req, res) => {
  const body = new App(req.body);
  body
    .save()
    .then((data) => {
      res.send({ rows: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the title.',
      });
    });
};

exports.findOne = (req, res) => {
  App.find({ tconst: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.id,
        });
      }
      res.send({ rows: data });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Title not found with _id ',
        });
      } else {
        return res.status(500).send({
          message: 'Error retrieving title with id ' + req.params.id,
        });
      }
    });
};

exports.update = (req, res) => {
  App.updateOne(
    { tconst: req.params.id },
    {
      genres: req.body.genres,
      originalTitle: req.body.originalTitle,
      startYear: req.body.startYear,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.id,
        });
      }
      res.send({ rows: data });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Title not found with _id',
        });
      } else {
        return res.status(500).send({
          message: 'Error updating title with id ' + req.params.id,
        });
      }
    });
};

exports.delete = (req, res) => {
  App.findOneAndRemove({ tconst: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.id,
        });
      }
      res.send({ message: 'Title deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Title not found with _id',
        });
      } else {
        return res.status(500).send({
          message: 'Could not delete title with id ' + req.params.id,
        });
      }
    });
};
