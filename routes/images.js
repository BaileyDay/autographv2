const express = require("express");
const router = express.Router();
const multer = require('multer')
const imageController = require("../controllers/images");
const Image = require('../models/image');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

var s3 = new aws.S3()
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'autographfarm',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, new Date().toISOString() + '-' + file.originalname)
    }
  })
})

const singleUpload = upload.single('image')

router.get("/api/images", imageController.getImages);
router.post("/api/images", function(req, res) {
    singleUpload(req, res, function(err){
        const image = new Image ({
            path: req.file.location
        })
        res.send(200)
        return image.save();
    })
});

module.exports = router;