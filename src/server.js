
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let votes = [];

app.post('/submitVote', (req, res) => {
  const { vote, name } = req.body;
  if (!vote || !name) {
    return res.status(400).send({ error: 'Vote and name are required' });
  }
  
  votes.push({ vote, name });
  res.status(200).send({ message: 'Vote submitted successfully' });
});

module.exports = app;

