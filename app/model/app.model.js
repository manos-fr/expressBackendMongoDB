const mongoose = require('mongoose');

const AppSchema = mongoose.Schema(
  {
    tconst: Object,
    titleType: Object,
    primarytitle: Object,
    originalTitle: Object,
    isAdult: Object,
    startYear: Object,
    endyear: Object,
    runtimeminutes: Object,
    genres: Object,
  },
  {
    collection: 'titles',
  }
);

module.exports = mongoose.model('App', AppSchema);
