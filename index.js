const express = require('express')
const app = express();
const cors = require('cors');
const path = require("path");

const appData = require('./data.json');

// app.use(cors());

app.use(express.static(path.join(__dirname, '/eleme')));

// app.get("")

app.get('/api/seller', function (req,res, next) {
    res.json({
      errno: 0,
      data: appData.seller
    })
  });

  app.get('/api/goods', function(req, res, next) {
    res.json({
      errno: 0,
      data: appData.goods
    })
  })

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/eleme/index.html")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));