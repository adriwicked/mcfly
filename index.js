
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('McFly API');
});

// Como USUARIO quiero poder llamar al API para crear notas.
app.post('/notes/newnote', (req, res) => {   
  const note = req.body.note;    
  // Guardar note en la base de datos
});

// Como USUARIO quiero poder llamar al API para consultar las notas.
app.get('/notes/allnotes', (req, res) => { 
  // Devolver todas las notas guardadas
});

// Como USUARIO quiero poder llamar al API para consultar una sóla nota.
app.get('/notes/:noteID', (req, res) => { 
  // Devolver de la base de datos la nota con noteID
});

// Como USUARIO quiero poder llamar al API para marcar favorita una nota.
app.post('/notes/:noteID', (req, res) => { 
  // Cambiar campo favorite a true en la nota con noteID
});

// Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.
app.get('/notes/favnotes', (req, res) => { 
  // Devolver todas las notas que tengan favorite en true
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));