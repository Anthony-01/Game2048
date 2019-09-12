const express = require('express')
const app = express();
const cors = require('cors');
const path = require("path");

app.use(cors());

app.use(express.static(path.join(__dirname, '/web')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/web/index.html")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))