require("dotenv").config();
const fs = require('fs');
const Image = require('../models/image');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// var s3 = new aws.S3()
 
// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'autographfarm',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

// const singleUpload = upload.single('image')

exports.getImages = async (req, res, next) => {
    try {
        const image = await Image.find({"gallery": "accomplishments"});
        res.json(image);
      } catch (err) {
        console.error(err.message);
      }
}
exports.getImages2 = async (req, res, next) => {
  try {
      const image = await Image.find({"gallery": "funtimes"});
      res.json(image);
    } catch (err) {
      console.error(err.message);
    }
}

// exports.postImages = async (req, res, next) => {
//   upload.single('image')
//   return res.json({"imageUrl": req.file.location})
// }
