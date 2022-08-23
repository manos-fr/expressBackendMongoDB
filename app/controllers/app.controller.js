const App = require('../model/app.model.js');

exports.findAll = (req, res) => {
  App.titles
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving messages.',
      });
    });
};

exports.create = (req, res) => {
  const body = new App({
    body: req.body,
  });
  body
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Message.',
      });
    });
};

exports.findOne = (req, res) => {
  App.findById(req.params.titleId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving title with id ' + req.params.titleId,
      });
    });
};

exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.titleId,
    {
      body: req.body,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: 'Error updating title with id ' + req.params.titleId,
      });
    });
};

exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.titleId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      res.send({ message: 'Title deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Title not found with id ' + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: 'Could not delete title with id ' + req.params.titleId,
      });
    });
};
