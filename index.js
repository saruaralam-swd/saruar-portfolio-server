const express = require('express');
const cors = require('cors');
require('colors')

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const projects = require('./projects.json');

app.get('/projects', (req, res) => {
  res.send(projects);
});

app.get('/project-details/:id', (req, res) => {
  const id = req.params.id;
  const result = projects.find(project => project._id === id);
  res.send(result);
});

app.get('/', (req, res) => {
  res.send('saruar portfolio server is running');
});

app.listen(port, () => {
  console.log(`server running on the port ${port}`.cyan)
});