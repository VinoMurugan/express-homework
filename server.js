const express = require('express');
const app = express();
const port = 3000;

// Initialize the bottle count
let bottleCount = 99;

// Define the home route
app.get('/', (req, res) => {
  res.send(`
    <h1>${bottleCount} Bottles of beer on the wall</h1>
    <a href="/${bottleCount - 1}">Take one down, pass it around</a>
  `);
});

