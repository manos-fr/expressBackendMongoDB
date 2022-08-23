module.exports = (app) => {
  const App = require('../controllers/app.controller.js');

  app.get('/titles', App.findAll);

  app.post('/titles', App.create);

  app.get('/titles/:titleId', App.findOne);

  app.put('/titles/:titleId', App.update);

  app.delete('/titles/:titleId', App.delete);
};
