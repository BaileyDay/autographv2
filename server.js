const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const path = require('path')
const app = express();

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});