const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('*', (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
