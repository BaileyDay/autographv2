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
            path: req.file.location,
            awsKey: req.file.key,
            gallery: "accomplishments"
        })
        res.send(200)
        return image.save();
    })
});
router.post("/api/images2", function(req, res) {
    singleUpload(req, res, function(err){
        const image = new Image ({
            path: req.file.location,
            awsKey: req.file.key,
            gallery: "funtimes"
        })
        res.send(200)
        return image.save();
    })
});

router.delete("/api/images", function(req, res) {
    const deleteId = req.body.id
    console.log(req.body)
    const params = {Bucket: 'autographfarm', Key: req.body.awsKey}
    s3.deleteObject(params, function(err, data){
        if(err) console.log(err)
        else console.log("deleted")
    })
    Image.findByIdAndDelete(deleteId, function (err){
        if(err){
            console.log(err)
            console.log("Successfull Deletion")
        }
    })
    res.send(200)
});
module.exports = router;