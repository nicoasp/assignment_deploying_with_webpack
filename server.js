const express = require('express');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 5000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/dist/index.html'))
);

app.listen(port);