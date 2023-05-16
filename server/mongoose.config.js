const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jokesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('Connection error', err));
