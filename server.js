const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const path = require('path')
const app = express();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGO

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.log(err)
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});