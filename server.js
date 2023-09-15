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
// Define the route with bottle count
app.get('/:number_of_bottles', (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);
  
    if (isNaN(numberOfBottles) || numberOfBottles < 0) {
      res.status(400).send('Invalid input.');
      return;
    }
  
    bottleCount = numberOfBottles;
  
    if (bottleCount === 0) {
      res.send(`
        <h1>No more bottles of beer on the wall</h1>
        <a href="/">Start over</a>
      `);
    } else {
      res.send(`
        <h1>${bottleCount} Bottles of beer on the wall</h1>
        <a href="/${bottleCount - 1}">Take one down, pass it around</a>
        <br>
        <a href="/">Start over</a>
      `);
    }
  });
  
  app.listen(port, () => {
    console.log('listening on port' , port);
  });
  
