// load in express

const express = require("express");

// port number

const port = 3000;

// instantate express

const app = express();

// define routes
app.get("/", (req, res) => {
  res.send(`<h1>99 Bottles of beer on the wall</h1>
          <a href=/98>take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
  let bottles = parseInt(req.params.number_of_bottles);

  bottles === 0 || bottles < 0 || bottles > 99
    ? res.send(`<h1>Out of beer!</h1>
  <a href=/>Start over</a>`)
    : 0;

  res.send(`<h1>${bottles} of beer left</h1>
  <a href=${bottles - 1}>take one down, pass it around</a>`);
});

// tell app to listen
app.listen(port, () => {
  console.log(`Listening on port, ${port}`);
});
