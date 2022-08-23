module.exports = (app) => {
  const App = require('../controllers/app.controller.js');

  app.get('/titles', App.findAll);

  app.get('/titles/:id', App.findOne);

  app.post('/titles', App.create);

  app.put('/titles/:id', App.update);

  app.delete('/titles/:id', App.delete);
};
