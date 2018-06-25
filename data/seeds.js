require('../configs/db.config');
const Note = require('../models/note.model');
const notes = require('./notes.data');

Note.insertMany(notes)
  .then(() => console.info('Seeds ready!'))
  .catch(error => console.error(error));