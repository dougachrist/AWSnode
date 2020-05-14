const express = require('express');
const app = express();

app.get('/' , (req, res) => {
  res.send("Welcom home page baby");
});


app.listen(3000, () => {
  console.log("running on 3000 doug");
});

app.get('/');
