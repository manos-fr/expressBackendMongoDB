const mongoose = require('mongoose');

const AppSchema = mongoose.Schema({
  tconst: String,
  titleType: String,
  primarytitle: String,
  originalTitle: String,
  isAdult: Number,
  startYear: Number,
  endyear: Number,
  runtimeminutes: Number,
  genres: String,
});

module.exports = mongoose.model('App', AppSchema);
