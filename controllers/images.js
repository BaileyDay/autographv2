require("dotenv").config();
const fs = require('fs');
const Image = require('../models/image')



exports.getImages = async (req, res, next) => {
    try {
        const image = await Image.find();
        res.json(image);
      } catch (err) {
        console.error(err.message);
      }
}

// exports.postImages = async (req, res, next) => {
//     res.send("req recieved")
//     console.log(req.file)
// }
