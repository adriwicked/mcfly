const express = require('express');
const app = express();
const Note = require('./models/note.model');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./configs/db.config');

app.get('/', (req, res) => {
  res.send('McFly API');
});

// Como USUARIO quiero poder llamar al API para crear notas.
app.post('/newnote', (req, res) => {       
  const note = new Note({text: req.body.text, favourite: req.body.favourite });
  note.save(err => {
    err ? res.send(err) : res.send("New note stored");
  });
});

// Como USUARIO quiero poder llamar al API para consultar las notas.
app.get('/allnotes', (req, res, next) => { 
  Note.find()
    .then(notes => res.json(notes))    
    .catch(err => next(err));
});

// Como USUARIO quiero poder llamar al API para consultar una sóla nota.
app.get('/notes/:id', (req, res, next) => {   
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => next(err));
});

// Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.
app.get('/favnotes', (req, res, next) => { 
  Note.find({ favourite: true })
  .then(notes => res.json(notes))    
  .catch(err => next(err));
});

// Como USUARIO quiero poder llamar al API para marcar favorita una nota.
app.post('/notes/fav/:id', (req, res) => {   
  Note.findByIdAndUpdate(req.params.id, {favourite: true }, err =>
    err ? res.send(err) : res.send("Note updated"));
});

app.listen(3000, () => console.log('Server ready'));