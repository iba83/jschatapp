const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.sendFile(__dirname + '/reset.css');
  res.sendFile(__dirname + '/index.css');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
