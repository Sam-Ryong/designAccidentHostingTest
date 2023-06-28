const fs = require('fs');
const express = require('express');
const Globalrouter = express.Router();

Globalrouter.get('/', (req, res) => {

    fs.readFile('index.html', 'utf8', (err, html) => {
      if (err) {
        res.status(500).send('Error reading HTML file');
      } else {
  
        res.send(html);
      }
    });
  });

  module.exports = Globalrouter;